import "bootstrap/dist/css/bootstrap.css";
const deleteObjectBtn = document.querySelector("#deleteObjectIdBtn");
const objectP = document.querySelector("#object");

async function talkToAPI(
  url = "http://localhost:8080/CORSwithJava/api/test",
  options
) {
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}

talkToAPI()
  .then(data => {
    console.log(`GET method: ${data.name}`);
  })
  .catch(err => {
    console.log(err);
  });

let optionsPost = {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "post"
  })
};

talkToAPI("http://localhost:8080/CORSwithJava/api/test", optionsPost)
  .then(data => {
    console.log(`POST method: name: ${data.name}`);
  })
  .catch(err => {
    console.log(err);
  });

let optionsPut = {
  method: "Put",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "put"
  })
};

talkToAPI("http://localhost:8080/CORSwithJava/api/test", optionsPut)
  .then(data => {
    console.log(`PUT method: name: ${data.name}`);
  })
  .catch(err => {
    console.log(err);
  });

let optionsDelete = {
  method: "DELETE",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
};

talkToAPI("http://localhost:8080/CORSwithJava/api/test", optionsDelete)
  .then(data => {
    console.log(`DELETE method:  ${data.object}`);
  })
  .catch(err => {
    console.log(err);
  });
