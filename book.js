// constructor

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// constructor prototype : method attached to each book to change read status

Book.prototype.readStatus = function () {
  if (this.read == true) {
    return "Read";
  } else {
    return "Unread";
  }
};
// show book form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

// library Array
const library = [];

// form input button
const buttonInput = document.getElementById("buttonInput");

buttonInput.addEventListener("click", () => {
  const titleInput = document.getElementById("titleInput").value;
  const authorInput = document.getElementById("authorInput").value;
  const pagesInput = document.getElementById("pagesInput").value;
  const readCheckBox = document.getElementById("readCheckBox").checked;

  addBookToLibrary(titleInput, authorInput, pagesInput, readCheckBox);
  document.getElementById("myForm").style.display = "none";
});

// adds new book to library Array
const main = document.getElementById("main");

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  library.push(newBook);
  main.innerHTML = "";

  mapBooks();
}

// fuunction that creates a card with new books

const mapBooks = () => {
  library.map((book, index) => {
    const div = document.createElement("div");
    div.classList.add("div-card");

    const title = document.createElement("h2");
    title.textContent = book.title;
    const author = document.createElement("h3");
    author.textContent = book.author;
    const pages = document.createElement("h4");
    pages.textContent = `${book.pages} pages`;

    const readStatus = document.createElement("h4");
    readStatus.classList.add("read-status");
    readStatus.textContent = book.readStatus();
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "delete";

    deleteBtn.addEventListener("click", () => {
      library.splice(index, 1);
      main.innerHTML = "";
      mapBooks();
    });

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(readStatus);
    div.appendChild(deleteBtn);
    main.appendChild(div);
  });
};
// console.log(library);
// console.log(titleInput, authorInput, pagesInput);
