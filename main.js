var banner = document.getElementById('page-banner');
console.log(banner);

var titles = document.getElementsByClassName('title');
for(i = 0; i < titles.length; i++) {
  console.log(titles[i]);
}

var lis = document.getElementsByTagName('li');
Array.from(lis).forEach(function(item) {
  console.log(item);
});

var wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf); //return only first element

var books = document.querySelectorAll('#book-list li .name');
console.log(books); //return collection

books.forEach(function(book) {
  book.textContent += ' (book title)';
});

var bookList = document.querySelector('#book-list');
bookList.innerHTML += '<p>Books and more books...</p>';