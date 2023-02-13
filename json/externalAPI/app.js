document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  //   console.log("inder");

  const number = document.querySelector('input[type="number"]').value;
  //   console.log(number);

  const xhr = new XMLHttpRequest();
  //   console.log("xhr", xhr);
  xhr.open("GET", `https://api.chucknorris.io/jokes/random`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log("inder");
      //   const response = JSON.parse(this.response);
      const joke = JSON.parse(this.responseText);

      //   let output = `<li>${joke.value}</li>`;
      //     document.querySelector(".jokes").innerHTML = output;

      let ul = document.querySelector(".jokes");
      //   let li = `<li>${joke.value}</li>`;
      //   console.log(li);
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(joke.value));
      ul.append(li);

      //   console.log(joke);
    }
  };
  xhr.send();

  e.preventDefault();
}
