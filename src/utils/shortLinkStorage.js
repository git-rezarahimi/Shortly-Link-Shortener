/* Sets an item in local storage with a given key and value. */
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/* Retrieves an item from local storage with a given key */
export const getItem = (key) => {
  const value = JSON.parse(localStorage.getItem(key));
  return value;
};

/* Updates an existing array of short links in local storage with a new short link. */
export const updateItems = (key, newShortLink) => {
  const shortLinks = getItem(key) || [];
  shortLinks.push(newShortLink);
  setItem(key, shortLinks);
};
