// Recibe cualquier url y nos devuelve un json con los datos
const getList = async (url) => {
  let data = await fetch(url);
  return data.json();
};

export { getList };
