export const getLocalStorage = (key) => {
  const storedItem = localStorage.getItem(key);
  if (storedItem) return JSON.parse(storedItem);
};

export const setLocalStorage = (key, item) => {
  const formattedItem = JSON.stringify(item);
  localStorage.setItem(key, formattedItem);
};
