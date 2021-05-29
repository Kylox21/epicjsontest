
const petsData = [
  {
    name: '1660ti',
    id: 1,
    location : 'amd',
    photo:'test.jpg'
  },
  {
    name: '120ti',
    id: 2,
    location : 'amd',
    photo: 'https://learnwebcode.github.io/json-example/images/dog-1.jpg'
  },
  {
    name: '1660ti',
    id: 1,
    location : 'amd',
    photo:'test.jpg'
  },
  {
    name: '1660ti',
    id: 1,
    location : 'amd',
    photo:'test.jpg'
  },
  {
    name: '1660ti',
    id: 1,
    location : 'amd',
    photo:'test.jpg'
  },
  {
    name: '1660ti',
    id: 1,
    location : 'amd',
    photo:'test.jpg'
  },
  {
    name: '1660ti',
    id: 1,
    location : 'amd',
    photo:'test.jpg'
  },
  {
    name: '1660ti',
    id: 1,
    location : 'amd',
    photo:'test.jpg'
  },
  {
    name: '1660ti',
    id: 1,
    location : 'amd',
    photo:'test.jpg'
  },
  {
    name: '1660ti',
    id: 1,
    location : 'amd',
    photo:'test.jpg'
  },
  {
    name: '1660ti',
    id: 1,
    location : 'amd',
    photo:'test.jpg'
  },
  {
    name: '1660ti',
    id: 1,
    location : 'amd',
    photo:'test.jpg'
  },
  {
    name: '1660ti',
    id: 1,
    location : 'amd',
    photo:'test.jpg'
  },
  
];

console.log('Name:', name);

function petTemplate(pet, index) {

  return `
  <div class = "shitter">
   <div class="animal">
   
      
       <div class="olay" onclick="location.href='book.html?book=${index}';" style="cursor: pointer;">
       <div id="mydiv">
  
      <h2 class="pet-name">${pet.name}
      
      

       </div></div>
       </div>
       </div>

  
`;
}

function indexPage() {
  document.getElementById('app').innerHTML = `
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
<p>${book.location}</p>
</div>
`;

  document.getElementById('book_details').innerHTML = bookHtml;
}


//SEARCH FUNCTION

