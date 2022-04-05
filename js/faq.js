

const letter = document.querySelector('.community .wrap h1');
console.log(letter)
//console.log(letter.offsetTop);

window.addEventListener('scroll',()=>{
    const scroll = window.scrollY || window.pageYOffset;
    if(scroll >= (letter.offsetTop * 2) ){
        letter.classList.add('on')
    }else{ letter.classList.remove('on') }
})

