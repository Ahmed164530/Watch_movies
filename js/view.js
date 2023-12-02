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
let stars = document.querySelector('.modal-body section.comment .add-comment .stars');

function toggleOverflew() {
    let body = document.querySelector('html');
    body.classList.toggle('hidden-overflew');
    stars.setAttribute('nStars', 'zero');
    document.querySelector('.modal-body section.comment .add-comment textarea').value = '';
    
    
}

const imgs = document.querySelectorAll('img');
const items = document.querySelectorAll('.item');

// Add a new attribute 'data-custom' with a value 'example'
for (let index = 0; index < imgs.length; index++) {
    const img = imgs[index];
    img.setAttribute('data-bs-toggle', 'modal');
    img.setAttribute('data-bs-target', '#ModalFullscreen');
    img.setAttribute('onclick','toggleOverflew()')

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

const comments_str = `
<li>
    <div class="input-group">
        <h6 class="name">Abdon</h6>
        <div class="stars" nStars="one">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
    </div>
    <p class="someone-comment">
        The latest film was packed with a massive amount of thrill and action! Every moment
        felt like a scene from an action movie. Truly awesome, you've got to take a look!
    </p>
</li>
<li>
    <div class="input-group">
        <h6 class="name">Ahmed ragab</h6>
        <div class="stars" nStars="four">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
    </div>
    <p class="someone-comment">
        The new sci-fi film excelled in some aspects, but I felt that some moments were
        exaggerated. Perhaps I have a different artistic taste. Did you feel the same?
    </p>
</li>
<li>
    <div class="input-group">
        <h6 class="name">Catastr0ph1c</h6>
        <div class="stars" nStars="two">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
    </div>
    <p class="someone-comment">
        I've heard about the new film, but I don't think I'm interested. Maybe I have
        another set of movies I'd prefer to watch. Is it really good?
    </p>
</li>
<li>
    <div class="input-group">
        <h6 class="name">ahmniab</h6>
        <div class="stars" nStars="three">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
    </div>
    <p class="someone-comment">
        I watched the latest film, and it was a different experience. Despite some good
        creative aspects, I noticed some weak points in the screenplay. Not bad, but not the
        best for me.
    </p>
</li>
<li>
    <div class="input-group">
        <h6 class="name">ENG GMY</h6>
        <div class="stars" nStars="five">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
    </div>
    <p class="someone-comment">
        The new film was terrific! Did you know that [movie name] is their favorite film?
        They have excellent taste in choosing movies. Cinema seems to hold a special place
        in their heart.
    </p>
</li>
<li>
    <div class="input-group">
        <h6 class="name">Ahmed Hamed</h6>
        <div class="stars" nStars="five">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
    </div>
    <p class="someone-comment">
        The new film was amazing! I loved every moment of it. The storyline was thrilling,
        and the performances were exceptional. If you haven't seen it yet, you should!
    </p>
</li>
`;
const comments = document.querySelector('.modal-body section.comment .comments');
let item = document.querySelectorAll('.item');

// Loop through each div and add a click event listener
item.forEach(function (item) {
    item.addEventListener('click', function () {

        let h5 = document.getElementById('ModalLabel');
        let img = document.querySelector('.modal-body .img-box img');

        h5.innerHTML = this.querySelector('h3').textContent;
        img.setAttribute('src', this.querySelector('img').getAttribute('src'));

        let info = document.querySelector('.modal-body .img-side .data');
        info.innerHTML = this.querySelector('p.info').textContent;

        let intro = document.querySelector('.modal-body .img-side a');
        intro.setAttribute('href', this.querySelector('a').getAttribute('href'));

        comments.innerHTML = comments_str;

    });
});

// stars section

const fifStar = document.querySelector('.modal-body section.comment .add-comment i:nth-child(5)');
const fouStar = document.querySelector('.modal-body section.comment .add-comment i:nth-child(4)');
const thrStar = document.querySelector('.modal-body section.comment .add-comment i:nth-child(3)');
const secStar = document.querySelector('.modal-body section.comment .add-comment i:nth-child(2)');
const fStar = document.querySelector('.modal-body section.comment .add-comment .stars i:first-child');

function reset() {
    fifStar.style.color = '';
    fouStar.style.color = '';
    thrStar.style.color = '';
    secStar.style.color = '';
    fStar.style.color = '';

}
// one star

fStar.addEventListener('mouseenter', function () {

    fifStar.style.color = '#fff';
    fouStar.style.color = '#fff';
    thrStar.style.color = '#fff';
    secStar.style.color = '#fff';
    fStar.style.color = '#ffe083';

});

fStar.addEventListener('mouseleave', function () {
    reset();
});

fStar.addEventListener('click', function () {
    if (stars.getAttribute('nStars') == 'one') {
        stars.setAttribute('nStars', 'zero');
    }
    else {
        stars.setAttribute('nStars', 'one');
    }
});

// two stars

secStar.addEventListener('mouseenter', function () {
    fifStar.style.color = '#fff';
    fouStar.style.color = '#fff';
    thrStar.style.color = '#fff';
    secStar.style.color = '#ffe083';
    fStar.style.color = '#ffe083';

});

secStar.addEventListener('mouseleave', function () {

    reset();

});

secStar.addEventListener('click', function () {
    if (stars.getAttribute('nStars') == 'two') {
        stars.setAttribute('nStars', 'zero');
    }
    else {
        stars.setAttribute('nStars', 'two');
    }
});

// three stars

thrStar.addEventListener('mouseenter', function () {
    fifStar.style.color = '#fff';
    fouStar.style.color = '#fff';
    thrStar.style.color = '#ffe083';
    secStar.style.color = '#ffe083';
    fStar.style.color = '#ffe083';
});

thrStar.addEventListener('mouseleave', function () {
    reset();
});

thrStar.addEventListener('click', function () {
    if (stars.getAttribute('nStars') == 'three') {
        stars.setAttribute('nStars', 'zero');
    }
    else {
        stars.setAttribute('nStars', 'three');
    }
});
// four stars

fouStar.addEventListener('mouseenter', function () {
    fifStar.style.color = '#fff';
    fouStar.style.color = '#ffe083';
    thrStar.style.color = '#ffe083';
    secStar.style.color = '#ffe083';
    fStar.style.color = '#ffe083';
});

fouStar.addEventListener('mouseleave', function () {
    reset();
});

fouStar.addEventListener('click', function () {
    if (stars.getAttribute('nStars') == 'four') {
        stars.setAttribute('nStars', 'zero');
    }
    else {
        stars.setAttribute('nStars', 'four');
    }
});

// five stars

fifStar.addEventListener('mouseenter', function () {

    fifStar.style.color = '#ffe083';
    fouStar.style.color = '#ffe083';
    thrStar.style.color = '#ffe083';
    secStar.style.color = '#ffe083';
    fStar.style.color = '#ffe083';
});

fifStar.addEventListener('mouseleave', function () {
    reset();
});

fifStar.addEventListener('click', function () {

    if (stars.getAttribute('nStars') == 'five') {
        stars.setAttribute('nStars', 'zero');
    }
    else {
        stars.setAttribute('nStars', 'five');
    }
});

// submit button 

const submit = document.querySelector('.modal-body section.comment .add-comment button.btn');

submit.addEventListener('click', function () {
    const textarea = document.querySelector('.modal-body section.comment .add-comment textarea');
    const comment = textarea.value;
    let nStars = stars.getAttribute('nStars');
    // let comment = text.value;
    console.log(comment);
    console.log(nStars);
    if (comment == '' || nStars == 'zero') {
        alert('You must write a comment and rate movie frist');
    }
    else {
        let newComment = document.createElement('li');
        newComment.innerHTML = `
        <div class="input-group">
            <h6 class="name">You</h6>
            <div class="stars" nStars="${nStars}">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
        </div>
        <p class="someone-comment">${comment}</p> `;
        
        comments.appendChild(newComment);
        textarea.value = '';
        stars.setAttribute('nStars','zero');

    }
});


const heart = document.querySelectorAll('.fa-solid.fa-heart');

heart.forEach(function (heart) {
    heart.addEventListener('click', function () {
        heart.classList.toggle('color-red');
    })
});
