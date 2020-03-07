import "bootstrap/dist/css/bootstrap.css";

const svg = document.querySelector("#svg2");
const text = document.querySelector("#text");
var lastElement;
function getCountryInfo(countryCode) {
  let url = "http://restcountries.eu/rest/v1/alpha?codes=" + countryCode;
  fetch(url)
    .then(response => {
      if (!response.ok) {
        return Promise.reject({
          status: response.status,
          fullError: response.json()
        });
      }
      return response.json();
    })
    .then(
      ([
        {
          name = "ERROR",
          area = "ERROR",
          capital = "ERROR",
          population = "ERROR"
        } = {}
      ] = []) => {
        text.innerText = `
      Country: ${name}
      Population: ${population}
      Area: ${area}
      Capital: ${capital}
      `;
      }
    )
    .catch(err => {
      text.innerText = `
      Error: ${err.status}`;
    });
}

function countryClicked(e) {
  if (e.target.id != "svg2") {
    e.target.style.fill = "red";
    if (lastElement == undefined) {
      lastElement = e.target;
    } else {
      lastElement.style.fill = "#c0c0c0";
      lastElement = e.target;
    }
    getCountryInfo(e.target.id);
  }
}

svg.addEventListener("mouseover", countryClicked);
