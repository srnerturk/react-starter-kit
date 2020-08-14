const setItem = (key, val) => {
  localStorage.setItem(key, val);
};

const getItem = (key) => {
  localStorage.getItem(key);
};

export { setItem, getItem };
