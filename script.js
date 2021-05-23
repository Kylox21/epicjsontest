const petsData = [
  {
    name: 'The king of drugs',
    bookname: 'Nora Barrett',
    id: 1,
    photo:
      'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105'
  },
  {
    name: 'Barksalot',
    bookname: 'Dog',
    href: 'book.html',
    id: 2,
    photo: 'https://learnwebcode.github.io/json-example/images/dog-1.jpg'
  }
];

console.log('Name:', name);

function petTemplate(pet, index) {
  return `
<div class ="image-grid">
   <div class="animal">
   
    <img class="pet-photo " src="${pet.photo}" >
   
      
       <div class="olay" onclick="location.href='book.html?book=${index}';" style="cursor: pointer;">
       <div id="mydiv">
  
      <h2 class="pet-name">${pet.name}
      
      
      <h1 class="species">${pet.bookname}

      </div>
       <div></div></div>
      </div>
   </div>

  
`;
}

function indexPage() {
  document.getElementById('app').innerHTML = `
   <h1 class="app-title">Kids</h1>
   ${petsData.map(petTemplate).join('')}
`;
}

const urlParams = new URLSearchParams(window.location.search);
const bookPos = urlParams.get('book');

function getTemplateFor() {
  let book = petsData[bookPos];
  let bookHtml = `
<div class ="book-html">
<h1>${book.name}  </h1>
<p>${book.bookname}</p>
</div>
`;

  document.getElementById('book_details').innerHTML = bookHtml;
}
