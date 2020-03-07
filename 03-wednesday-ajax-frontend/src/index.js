import "bootstrap/dist/css/bootstrap.css";
import { printTableFromArray, printTable } from "./html";
import { getDataFromAPIAppendToContainer } from "./api";

const usersDiv = document.querySelector("#usersId");
const getUserBtn = document.querySelector("#getUserBtnId");
const getUserInput = document.querySelector("#userInputId");
const newUserBtn = document.querySelector("#newUserBtnId");

function showAllUsers() {
  getDataFromAPIAppendToContainer(
    "http://localhost:3333/api/users/",
    usersDiv,
    printTableFromArray
  );
}
showAllUsers();

function getUserById() {
  if (getUserInput.value > 0) {
    const url = "http://localhost:3333/api/users/" + getUserInput.value;
    getDataFromAPIAppendToContainer(url, usersDiv, printTable);
  } else {
    showAllUsers();
  }
}

function newUser() {
  const age = document.querySelector("#newUserAgeId").value;
  const name = document.querySelector("#newUserNameId").value;
  const gender = document.querySelector("#newUserGenderId").value;
  const email = document.querySelector("#newUserEmailId").value;
  document.querySelector("#newUserAgeId").value = "";
  document.querySelector("#newUserNameId").value = "";
  document.querySelector("#newUserGenderId").value = "";
  document.querySelector("#newUserEmailId").value = "";
  let options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      age: age,
      name: name,
      gender: gender,
      email: email
    })
  };
  fetch("http://localhost:3333/api/users/", options)
    .then(response => {
      if (!response.ok) {
        return Promise.reject({
          status: response.status,
          fullError: response.json()
        });
      }
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => console.log(`${e.status} ${e.msg}`));
      } else {
        console.log("Network error");
      }
    });
  showAllUsers();
}
getUserBtn.addEventListener("click", getUserById);
newUserBtn.addEventListener("click", newUser);

const deleteUserInput = document.querySelector("#deleteUserInputId");
const deleteUserBtn = document.querySelector("#deleteUserBtnId");
function deleteUserById() {
  const userId = deleteUserInput.value;
  let options = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  fetch("http://localhost:3333/api/users/" + userId, options)
    .then(response => {
      if (!response.ok) {
        return Promise.reject({
          status: response.status,
          fullError: response.json()
        });
      }
    })
    .catch(err => {
      if (err.status) {
        err.fullError.then(e => console.log(`${e.status} ${e.msg}`));
      } else {
        console.log("Network error");
      }
    });
}

deleteUserBtn.addEventListener("click", deleteUserById);
