const slider = document.querySelector("#slider");
const ul = slider.querySelector('ul');
const lis = document.querySelectorAll('li');
const len = lis.length;
const prev = slider.querySelector(".prev");
const next = slider.querySelector('.next');
let enableClick =  true;

init();

next.addEventListener('click' , e=>{
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        nextSlide();
    } //false일 땐 함수 실행x
})

prev.addEventListener('click', e=>{
    e.preventDefault();
    if(enableClick){
        enableClick = false;
        prevSlide();
    }
})

function nextSlide(){
    new Anim(ul,{
        prop:"left",
        value: "-200%",
        duration: 1000,
        callback: ()=>{
            ul.append(ul.firstElementChild);
            ul.style.left = "-100%"; 
            enableClick = true;
        }
    })
    //이동을 하면, 첫번째 자식요소를 뜯어서 마지막으로 보내주고, 
    //그러면 부모요소의 구성자체가 변하므로 위치값도 바꿔줘야 한다. => ul.style.left = "-100%"
}

function prevSlide(){
    new Anim(ul,{
        prop: 'left',
        value: "0%",
        duration: 1000,
        callback:()=>{
            ul.style.left = "-100%";
            ul.prepend(ul.lastElementChild);
            enableClick = true;
        }
    })
}

function init(){
    ul.style.left = "-100%";
    ul.style.width = `${100 * len}%`;
    lis.forEach((li)=>{
        li.style.width = `${100 / len}%`
    })
}
