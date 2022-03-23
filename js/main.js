
const slide = document.querySelector('.slide');
const pics = document.querySelector('.pics');
const imgs = pics.querySelectorAll('img');
let enable = true;

const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector('.menuMo');


btnCall.onclick = function(e){
    e.preventDefault();
    btnCall.classList.toggle('on');

    menuMo.classList.toggle('on');
}


const next = document.querySelector('#visual .next');
const prev = document.querySelector('#visual .prev');
const play = document.querySelector('#visual .play');
const pause = document.querySelector('#visual .stop');
const time =document.querySelector('#visual .time');

let running = setInterval(()=>run(), 10000);

init();
setTime();
next.addEventListener('click', e=>{
    e.preventDefault();
    if(play.classList.contains('on')){
        play.classList.remove('on');
        time.classList.add('off')
    }

    if (enable){
        enable = false;
        nextSlide();
    }
})

prev.addEventListener('click', e=>{
    e.preventDefault();
    if (enable){
        enable = false;
        prevSlide();
    }
})

play.addEventListener('click',e=>{
    e.preventDefault();
    setTime();
    running = setInterval(()=>run(), 10000);
})

pause.addEventListener('click',e=>{
    e.preventDefault();
    play.classList.remove('on');
    time.style.display = 'none';
    clearTimeout(running);

    new Anim(time,{
        prop: 'width',
        value: '0',
        duration: 0
    })
})


function run(){
    setTime();
    nextSlide();
}




function init(){
    const len = imgs.length;
    pics.style.left = '-100%'
    pics.style.width = `${100 * len}%`;
    imgs.forEach((el)=>{el.style.width = `${100 / len}%`})
}

function nextSlide(){
    new Anim(pics,{
        prop:'left',
        value: '-200%',
        duration:500, 
        callback: ()=>{
            pics.append(pics.firstElementChild);
            pics.style.left = "-100%"; 
            enable = true;
        }
    })
}

function prevSlide(){
    new Anim(pics,{
        prop:'left',
        value: '0%',
        duration: 500,
        callback:()=>{
            pics.prepend(pics.lastElementChild);
            pics.style.left= '-100%';
            enable = true;
        }
    })
}

function setTime(){
    if(time.style.display === 'none'){
        time.style.display = 'block'
    }

    new Anim(time,{
        prop: 'width',
        value: '20%',
        duration: 9500,
        callback:()=>{
            new Anim(time,{
                prop:'width',
                value:'0%',
                duration:0
            })
        }
    })
}
