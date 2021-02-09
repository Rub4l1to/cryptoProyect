const getList = async (url) => {
  let data = await fetch(url);
  return data.json();
};

export { getList };
