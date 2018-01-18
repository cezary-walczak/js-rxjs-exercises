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

console.log('#page-banner node type is:', banner.nodeType); //1
console.log('#page-banner node name is:', banner.nodeName); //DIV
console.log('#page-banner has child nodes:', banner.hasChildNodes()); //true

var clonedBanner = banner.cloneNode(true); //passing true for nested element
console.log(clonedBanner);

console.log('book-list parent node is:', bookList.parentNode);
console.log('book-list parent node of parent node is:', bookList.parentElement.parentElement);

console.log('book-list child node is:', bookList.childNodes); //include linebreaks
console.log('book-list child is:', bookList.children);

console.log('book-list next sibling is:', bookList.nextSibling); //include linebreaks
console.log('book-list next sibling is:', bookList.nextElementSibling);

console.log('book-list previous sibling is:', bookList.previousSibling); //include linebreaks
console.log('book-list previous sibling is:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br>Too cool for every one else';

var h2 = document.querySelector('#book-list h2');
h2.addEventListener('click', function(e) {
  console.log(e);
  console.log(e.target);
});

// var btns = document.querySelectorAll('#book-list .delete');
// btns.forEach(function(btn) {
//   btn.addEventListener('click', function(e) {
//     e,preventDefault();
//     var li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   });
// });

var list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e) {
  if(e.target.className == 'delete') {
    list.removeChild(e.target.parentElement);
  }
});

var addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var value = addForm.querySelector('input[type="text"]').value;

  var li = document.createElement('li');
  var bookName = document.createElement('span');
  var deleteBtn = document.createElement('span');

  bookName.textContent = value;
  deleteBtn.textContent = ' delete';

  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});