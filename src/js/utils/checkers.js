// Recibira un json y devolvera otro array con los nombres
export const getDataName = (data) => 
    data.reduce((acc, element) => [...acc, `<i>${element.name}</i>`], []); 

// Recibe un json y extraemos los datos para el modelo de la tarjeta
export const readArray = (data, func) => {
    console.log(data)
    data.map((item) => {
        const { id, name, image, current_price } = item;
        func(id, name, image, current_price);
    });
}

// Recibe un json y extraemos los datos para el modelo de la section
export const readDetails = (data, func) => {
    console.log(data)
        const { name,links, market_data } = data;
        func( name,links, market_data );
}