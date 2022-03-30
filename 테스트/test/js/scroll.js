
 /*
const sections = document.querySelectorAll('section');
const lis = document.querySelectorAll('ul li');
let posArr =[];

for(let section of sections){
    posArr.push(section.offsetTop)
}

window.addEventListener('scroll', e=>{
    let scroll = window.scrollY||window.pageXOffset;

    sections.forEach((el, index)=>{
        if(scroll >= el){
            for(let i = 0; i<sections.length; i++){
                lis[i].classList.remove('on');
                sections[i].classList.remove('on');
                
            }
        }
    })
})

lis.forEach((li,index)=>{
    li.addEventListener('click', e=>{

        new Anime(window,{
            prop: 'scroll',
            value:posArr[index],
            duration:500
        })
    })
})
*/

const sections = document.querySelectorAll("section"); 
const lis = document.querySelectorAll("ul li"); 
let posArr = []; 
const base = -300; 
 


//section의 세로 위치값을 배열에 저장 
for(let section of sections){
    posArr.push(section.offsetTop); 
}

//브라우저에서 스크롤 할 때 
window.addEventListener("scroll", e=>{
    //현재 스크롤한 값을 변수에 담아서 
    let scroll = window.scrollY||window.pageYOffset; 

    sections.forEach((el,index)=>{
        //scroll값이 해당섹션의 값보다 크거나 같을 경우 
        //해당 순번의 li, section만 활성화
        //base - posArr값에서 base값만큼 더해서 section이 브라우저 끝에 닿지 않아도 활성화되도록 처리 
        if(scroll>= posArr[index] +base){
            for(let i=0; i<sections.length; i++){
                lis[i].classList.remove("on"); 
                sections[i].classList.remove("on"); 
            } 
            lis[index].classList.add("on"); 
            sections[index].classList.add("on"); 

        }
    })  
   /* if(scroll>= posArr[2]){
        let cScroll = scroll - posArr[2];
        cScroll = scroll * 4;

        if(cScroll >= 2045)cScroll = 2045; // cScroll값이 스크롤길이보다 커지면 음수가 되므로.
        const path = sections[2].querySelector('path')
        path.style.strokeDashoffset = 2045 - cScroll;   
    }else{
        path.style.strokeDashoffset = 2045 // 스크롤이 해당 섹션이 아닌 곳이면 그냥 안보이는걸로.
    }*/ //=>스크롤값에 따라 stroke 조절하는 함수.

})

//ul li 버튼 클릭시 해당 섹션위치값으로 스크롤 이동 
lis.forEach((li, index)=>{
    li.addEventListener("click", e=>{         
        new Anime(window,{
            prop:"scroll", 
            value:posArr[index],
            duration:500
        })
    })
}); 