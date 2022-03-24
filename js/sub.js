const sections = document.querySelectorAll("section");
const arr = [];
let enable = true;
let now = 0;
let targetSec = 0;

sections.forEach((el, index) => {
  if(index === 0){
    const offset = 0;
    arr.push(offset);
  }else{
  const offset = el.offsetTop;
  arr.push(offset);
}
});

console.log(arr); //[122, 1059, 1996, 2933, 3870]

window.addEventListener("mousewheel", (e) => {
    e.preventDefault();
    console.log(enable)
    if (enable) {
      //  enable = false;
      if (e.deltaY > 0) {
        //휠 아래로
        if(now === sections.length -1){
            enable = true;
            return;
        }
       /* setPage(targetSec);
        now++;
        targetSec++;*/
        targetSec = now+1;
      }else{   
        if(now === 0){
            enable = true;
            return;
        }
        targetSec = now-1;
      }
      setPage(targetSec);
    }
  },
  { passive: false }
);

window.addEventListener('scroll',e=>{ //마우스휠 이벤트에도 실행된다.
    const scroll = window.scrollY;
    arr.forEach((el,index)=>{
        if(scroll>=el){
            for(let el of sections)el.classList.remove('on');
            sections[index].classList.add('on');
            now = index;
            //console.log(now);
        }
    })
})

function setPage(n) {
  
  new Anim(window, {
    prop: "scroll",
    value: arr[n],
    duration:400,
    callback:()=>{
      enable = true;
    }
  });
}
