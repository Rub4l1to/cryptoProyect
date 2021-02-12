export const getDataName = (data) => 
    data.reduce((acc, element) => [...acc, `<i>${element.name}</i>`], []); 

export const readArray = (data, func) => {
    data.map((item) => {
        const { id, name, image, current_price } = item;
        func(id, name, image, current_price);
    });
}

export const readDetails = (data, func) => {
        const { name,links, market_data } = data;
        func( name,links, market_data );
}

