export const printTable = obj => {
  let table = "<table class='table'>";
  table += "<tr>";
  for (let key of Object.keys(obj)) {
    table += `<th> ${key} </th>`;
  }
  table += "</tr>";
  for (let values of Object.values(obj)) {
    table += `<td> ${values} </td>`;
  }
  table += "</tr>";
  table += "</table>";
  return table;
};

export const printTableFromArray = array => {
  const table = `
  <table class='table'>
    <tr>
    ${Object.keys(array[0])
      .map(
        key => `
      <th>${key}</th>
    `
      )
      .join("")}
    </tr>
    ${array
      .map(
        value => `
      <tr>
      ${Object.values(value)
        .map(
          propValue => `
      <td> ${propValue} </td>
      `
        )
        .join("")}
      </tr>`
      )
      .join("")}
  </table>`;
  return table;
};
