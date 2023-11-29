// const toggle = document.querySelector('.toggle');
// const content = document.querySelector('.modal-dialog');

// // Add a click event listener to the button
// toggle.addEventListener('click', function() {
//   // Toggle the display style of the content
//   if (content.style.display === 'none') {
//     content.style.display = 'block';
//   } else {
//     content.style.display = 'none';
//   }
// });
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

const imgs = document.querySelectorAll('img');
const items = document.querySelectorAll('.item');

// Add a new attribute 'data-custom' with a value 'example'
for (let index = 0; index < imgs.length; index++) {
    const img = imgs[index];
    img.setAttribute('data-bs-toggle', 'modal');
    img.setAttribute('data-bs-target', '#ModalFullscreen');

}
// for (let index = 0; index < items.length; index++) {
//     const item = items[index];
//     item.setAttribute('onclick', 'set_model()');


// }

// function set_model() {
// let model = document.getElementById('ModalFullscreen');
// let h5 = document.getElementById('ModalLabel');
// h5.innerHTML= this.innerHTML;
// // console.log('log log');

// }
function searchFilms() {
    const searchValue = document.getElementById("searchInput").value.trim().toLowerCase();
    const filmCards = document.querySelectorAll('.item');

    filmCards.forEach(card => {
        const title = card.querySelector('.title').textContent.toLowerCase();

        if (title.includes(searchValue)) {
            card.style.display = ""; // Show the card if it matches the search
        } else {
            card.style.display = "none"; // Hide the card if it doesn't match the search
        }
    });
}

let item = document.querySelectorAll('.item');

// Loop through each div and add a click event listener
item.forEach(function (item) {
    item.addEventListener('click', function () {
        // Change the inner HTML of the clicked h5 to 'Welcome'
        console.log('welcome');
        let model = document.getElementById('ModalFullscreen');
        let h5 = document.getElementById('ModalLabel');
        let img = document.querySelector('.modal-body .img-box img');
        
        h5.innerHTML = this.querySelector('h3').textContent;
        img.setAttribute('src' , this.querySelector('img').getAttribute('src'));

        let info = document.querySelector('.modal-body .img-side .data');
        info.innerHTML = this.querySelector('p.info').textContent;

        let intro = document.querySelector('.modal-body .img-side a');
        intro.setAttribute('href' , this.querySelector('a').getAttribute('href'));


        

        // this.innerHTML = 'Welcome';
    });
});