export const getDataName = (data) => 
    data.reduce((acc, element) => [...acc, `<i>${element.name}</i>`], []); 

export const readArray = (data, func) => {
    data.map((item) => {
        const { name, image, current_price } = item;
        func(name, image, current_price);
    });
}