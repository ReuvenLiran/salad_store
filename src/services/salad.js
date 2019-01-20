export const getIngredientsAPI = async () => {
  const URL_API = 'data.json';
  const resp = await fetch(URL_API);
  return resp.json();
};

// export const getData = async () => {

// }
// export const getData = async () => {

//   // const promise = await new Promise((resolve) => {
//   //   setTimeout(() => resolve('some data'), 1000);
//   // });
//   // return promise;
// };
