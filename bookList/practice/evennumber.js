// even number
// let i = 1;
// for (let i = 1; i <= 10; i++) {
//   //   console.log(i);
//   if (i % 2 == 0) {
//     console.log("Even Number " + i);
//   }
// }
// odd number
// i = 1;
// for (let i = 1; i <= 10; i++) {
//   if (i % 2) {
//     console.log("odd number " + i);
//   }
// }

// multiplication table

document
  .getElementById("submit-form")
  .addEventListener("submit", (e) => myFunction(e));

function myFunction(e) {
  e.preventDefault();

  var t = document.getElementById("number").value;
  var max = document.getElementById("max").value;

  for (let y = 1; y <= max; y++) {
    let z = t * y;

    const tablevale = document.getElementById("table");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${t}</td>
        <td>*</td>
        <td>${y}</td>
        <td>=</td>
        <td>${z}</td>`;

    tablevale.appendChild(row);
    // console.log(t,"*, y, "=", z);
    console.log(`${t}*${y} = ${z}`);
  }
}
