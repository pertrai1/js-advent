const stars = document.querySelectorAll('.star');
const starRating = document.querySelector('.star-rating');
stars.forEach(( star, i ) => {
    star.addEventListener('mouseover', (e) => {
        console.log(e);
        starRating.classList = "";
        starRating.classList.add('star-rating');
        starRating.classList.add(`star-${ i+ 1 }`)
    })
})