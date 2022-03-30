
console.log(document.cookie);

const popup = document.querySelector('#visual .popup');
const isCookie = document.cookie.indexOf('today');
const btnClose = popup.querySelector('.close');
const del = document.querySelector('.del');
console.log(del);

//console.log(isCookie);
//(isCookie === -1)?popup.classList.add('on'):popup.style.display='none'

if(isCookie === -1){
    popup.classList.add('on');
}else{
    popup.style.display='none';
}

btnClose.addEventListener('click',()=>{
    popup.style.display='none';
    const isCheck = popup.querySelector('input[type=checkbox]').checked;
    if(isCheck)setCookie('today','done',1);
})

del.addEventListener('click',()=>{
    setCookie("today","done", 0); 
    alert("쿠키를 삭제했습니다");
    console.log(document.cookie);
    console.log(document.cookie.indexOf("today=done"));
})

function setCookie(name, val, due){
    const today = new Date();
    const day = today.getDate();
    today.setDate(day + due);
    const duedate = today.toGMTString();  
    document.cookie = `${name}=${val}; path=/; expires=${duedate};`;
}

