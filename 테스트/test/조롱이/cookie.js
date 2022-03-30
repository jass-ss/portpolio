
/* 쿠키: 사용자의 컴퓨터에 파일(문자열) 형태로 저장하는 정보 

    쿠키의 생명주기
    쿠키이름 = 쿠키값; path=/ (쿠키의 document 위치값); expires=해당쿠키가 삭제될 날짜;

*/
console.log('???')
const btnView = document.querySelector(".view"); 
const btnDel = document.querySelector(".del");
const popup = document.querySelector("#popup"); 
const btnClose = popup.querySelector(".close"); 

//닫기 버튼을 클릭했을 때 생성되는 쿠키문자열을 변수에 저장.
const isCookie = document.cookie.indexOf("today=done"); 
console.log(isCookie)


//페이지가 로딩되었을 때 쿠키가 있는지 판별하여 팝업에 display값 설정.
//만약 쿠키가 없다면 팝업을 보여주고 
//만약 쿠키가 있다면 팝업을 숨김 

let isOn; //popup의 display 값에 적용할 값을 변수로 설정.
(isCookie == -1) ? isOn = "block" : isOn = "none"; 
popup.style.display = isOn; 


//쿠키확인 버튼 이벤트 
btnView.addEventListener("click", e=>{
    e.preventDefault(); 
    console.log(document.cookie); 
});

//쿠키 삭제 버튼 이벤트 
btnDel.addEventListener("click", e=>{
    e.preventDefault(); 
    setCookie("today","done", 0); 
    alert("쿠키를 삭제했습니다");
}); 

//팝업 닫기 버튼 클릭 이벤트 
btnClose.addEventListener("click", e=>{
    e.preventDefault();    
    popup.style.display = "none";

    //체크박스에 체크가 되어있는지 판별하여 변수에 저장
    let isChecked = popup.querySelector("input[type=checkbox]").checked; 

    //체크박스에 체크가 되었다면 쿠키 생성 함수 호출.
    if(isChecked) setCookie("today", "done", 1); 

})
 
 
//쿠키 생성 함수 
function setCookie(name, val, due){
    const today = new Date(); 
    const day = today.getDate(); 
    today.setDate(day + due); 
    const duedate = today.toGMTString();  
    document.cookie = `${name}=${val}; path=/; expires=${duedate}`;
}

