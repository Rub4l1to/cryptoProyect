import * as d3 from "d3";

//Set accessor and parse data
const xAccessor = (d) => parseDate(d.Date);
const parseDate = d3.timeParse("%Y-%m-%d");
const yAccessor = (d) => parseFloat(d["Closing Price (USD)"]);
const tooltip = document.querySelector(".tooltip");
const parent = d3.select(".section-details__graph");
const numberFormat = d3.format(".4r")
const formatTime = d3.timeFormat("%d-%m-%y")


async function call() {
  const select = document.querySelector("#coins").value
  const coinsData = {
    bitcoin: await d3.csv("./src/data/bitcoin.csv"),
    ethereum: await d3.csv("./src/data/ethereum.csv"),
    cardano: await d3.csv("./src/data/cardano.csv"),
    litecoin: await d3.csv("./src/data/litecoin.csv"),
    tether: await d3.csv("./src/data/tether.csv"),
    ripple: await d3.csv("./src/data/XRP.csv"),
    binancecoin: await d3.csv("./src/data/bitcoin.csv"),
    polkadot: await d3.csv("./src/data/bitcoin.csv"),
  };

  const dataset = coinsData[select];
  const lineGraph = LineGraph(".section-details__graph");
  lineGraph.clear();
  lineGraph.build();
  lineGraph.loadGraph(dataset);
}

function LineGraph(container) {
  let bounds;
  let initialized = false;
  let wrapper;

  //Set dimensions
  let dimensions = {
    width: parent.node().offsetWidth,
    height: 400,
    margins: {
      top: 30,
      right: 15,
      bottom: 40,
      left: 60,
    }
  };
  dimensions.boundedWidth =
    dimensions.width - dimensions.margins.left - dimensions.margins.right;
  dimensions.boundedHeight =
    dimensions.height - dimensions.margins.top - dimensions.margins.bottom;

  function build() {
    // crear el svg
    // calcular los anchos del elemento div
    // y en general lo que hay que hacer una sola vez
    wrapper = d3
      .select(container)
      .append("svg")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .style("background-color", "white");
  }

  function loadGraph(dataset) {
    initialized = true;

    bounds = wrapper.append("g").style(
      "transform",
      `translate(${dimensions.margins.left}px,
                 ${dimensions.margins.top}px)`
    );

    //Create scales
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(dataset, yAccessor)])
      .range([dimensions.boundedHeight, 0]);

    const xScale = d3
      .scaleTime()
      .domain(d3.extent(dataset, xAccessor))
      .range([0, dimensions.boundedWidth]);

    //Draw data & tooltip
    const lineGenerator = d3.line()
      .curve(d3.curveBasis)
      .x((d) => xScale(xAccessor(d)))
      .y((d) => yScale(yAccessor(d)));

    const line = bounds
      .append("path")
      .data(dataset)
      .attr("d", lineGenerator(dataset))
      .attr("fill", "none")
      .attr("stroke", "#2B3FCC")
      .attr("stroke-width", "3")
      .call(transition)

      .on("mousemove", (ev) => {
        line.attr("stroke-width", "4").attr("opacity", "0.2");
        const graphX = ev.offsetX - dimensions.margins.left;
        const graphY = ev.offsetY - dimensions.margins.top;

        tooltip.innerHTML = `
                <b>${numberFormat(yScale.invert(graphY))}$</b> <br>
                   ${formatTime(xScale.invert(graphX))}`;
        tooltip.classList.remove("hidden");
      })
      .on("touchend mouseleave", (ev) => {
        line.attr("stroke-width", "3").attr("opacity", "100%");
        tooltip.classList.add("hidden")
        tooltip.style.top = ev.pageY + "px";
        tooltip.style.left = ev.pageX + "px";
      });

    //Animate line
    function transition(path) {
      path
        .transition()
        .duration(6500)
        .attrTween("stroke-dasharray", tweenDash)
        .on("end", () => {
          d3.select(this).call(transition);
        });
    }

    function tweenDash() {
      const l = this.getTotalLength(),
        i = d3.interpolateString("0," + l, l + "," + l);
      return function (t) {
        return i(t);
      };
    }

    //Draw axis
    let tickLabels = ["Abr", "Jul", "Oct", "Ene"];

    const yAxis = d3
      .axisLeft()
      .scale(yScale)
      .tickSize(-dimensions.boundedWidth)
      .ticks(7)
      .tickFormat((d) => {
        return d + " $";
      });

    const xAxis = d3
      .axisBottom()
      .scale(xScale)
      .ticks(4)
      .tickFormat((d, i) => tickLabels[i]);

    bounds
      .append("g")
      .call(yAxis)
      .call((g) =>
        g
          .select(".domain")
          .attr("stroke-opacity", 0.5)
          .attr("stroke-dasharray", "2,2")
      )
      .call((g) =>
        g
          .selectAll("line")
          .attr("stroke-opacity", 0.5)
          .attr("stroke-dasharray", "2,2")
      )
      .call((g) => g.selectAll(".tick text").attr("x", -5).attr("dy", 3))
      .attr("font-size", 12)
      .attr("font-family", "Roboto")
      .attr("font-weight", 700)
      .attr("color", "grey")
      .call((g) => g.select(".domain").remove());

    bounds
      .append("g")
      .call(xAxis)
      .style("transform", `translateY(${dimensions.boundedHeight}px)`)
      .call((g) => g.select(".domain").remove())
      .call((g) => g.selectAll("line").remove())
      .call((g) => g.selectAll("text").attr("dy", 20))
      .attr("font-family", "Roboto")
      .attr("font-size", 12)
      .attr("font-weight", 700)
      .attr("color", "grey");
  }

  function clear() {
    document.querySelector(".section-details__graph").innerHTML = "";
    if (bounds) bounds.remove();
  }

  return { build, loadGraph, clear };
}

export { call, LineGraph };