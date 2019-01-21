export const STORE_DATA = 'STORE_DATA';

export const getData = data => ({
  type: STORE_DATA,
  data,
});