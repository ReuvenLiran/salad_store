export const getIngredientsAPI = async () => {
  const URL_API = 'data.json';
  const resp = await fetch(URL_API);
  const { items } = await resp.json();
  return items;
};
