export const getDataFromAPIAppendToContainer = (
  url,
  div,
  callback,
  options,
  ...args
) => {
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        return Promise.reject({
          status: response.status,
          fullError: response.json()
        });
      }
      return response.json();
    })
    .then(json => {
      div.innerHTML = callback(json, args);
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => console.log(`${e.status} ${e.msg}`));
      } else {
        console.log("Network error");
      }
    });
};
