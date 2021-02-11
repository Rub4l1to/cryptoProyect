export const getDataName = (data) => 
    data.reduce((acc, element) => [...acc, `<i>${element.name}</i>`], []); 