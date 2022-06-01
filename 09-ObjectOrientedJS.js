var obj = new Object();

var obj = {};

obj = {
  name: { first: "Gandalf", last: "the Grey" },
  address: "Middle Earth",
};

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
}

var book = new Book("title", "pages", "isbn");
console.log(book.title); // exibe o título do livro
console.log(book.pages); // atualiza o valor do título do livro
console.log(book.isbn); // exibe o valor atualizado

Book.prototype.printTitle = function () {
  console.log(this.title);
};

book.printTitle(this.title);

function Book(title, pages, isbn) {
  this.title = title;
  this.pages = pages;
  this.isbn = isbn;
  this.printIsbn = function () {
    console.log(this.isbn);
  };
}

book.printIsbn();