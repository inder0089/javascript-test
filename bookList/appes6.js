class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById("book-list");
    // create tr element
    const row = document.createElement("tr");
    // insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
    list.appendChild(row);
  }
  showAlert(message, className) {
    //   create div
    const div = document.createElement("div");
    //   add class
    div.className = `alert ${className}`;
    //  add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector(".container");
    // get form
    const form = document.querySelector("#book-form");
    // insert alert
    container.insertBefore(div, form);

    // time out after 3 second
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

// Event Listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
  //   console.log("test");
  // Get Form Value
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  //   console.log(title, author, isbn);

  // instantiate book
  const book = new Book(title, author, isbn);
  //   console.log(book);

  // instantiate UI
  const ui = new UI();

  // validate
  if (title === "" || author === "" || isbn === "") {
    // alert("Please Enter Book fields");
    ui.showAlert("Please fill in all fields", "error");
  } else {
    // add book to list
    ui.addBookToList(book);
    // show success
    ui.showAlert("book added", "success");
    // clear field
    ui.clearFields();
  }

  e.preventDefault();
});

// Event listener for delete
document.getElementById("book-list").addEventListener("click", function (e) {
  // console.log(123);
  // instantiate UI
  const ui = new UI();
  // delete book
  ui.deleteBook(e.target);
  // show message
  ui.showAlert("book removed!", "success");

  e.preventDefault;
});
