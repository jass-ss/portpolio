
/* 유효성 검사란? 
    만약 input type="text" 에 값을 입력하지 않거나, 또는 조건을 만족하지 않는다면 
    submit 버튼을 클릭했을 때 e.preventDefault()로 페이지 이동(데이터전송) 방지.
*/

const form = document.querySelector("#member");
const btnSubmit = form.querySelector("input[type=submit]");

btnSubmit.addEventListener('click', e=>{
    //조건을 만족하면 pass,
    //만족못하면 e.preventDefault();
    e.preventDefault();
    if(!validation_id()) e.preventDefault();
 

})
//정규표현식: 문자열에서 특정 문자를 찾기 위한 패턴
// /@/ //사이에 있는 문자열을 포함하는지 검사.
function validation_id(){

    const input = form.querySelector('[name=userid]');
    console.log(input)
    const txt = input.value.trim();  //대상의 양옆의 공백을 삭제. 공백을 제외한 value값을 저장.
    
    if(txt !== (""&&" ")){
        return true;
    }else{ 
        const msg = document.createElement('p') //p태그 생성.
        msg.append('텍스트를 입력하세요');
        input.closest('td').append(msg); //element.closest('요소'): element에서 가장 가까운 '요소'에 append('추가할 거').  
        
        const errMsgs = input.closest('td').querySelector('p');
        if(errMsgs.length>0) input.closest('td').querySelector('p').remove(); 
        return false;}


}

function isCheck(name){
    const inputs = form.querySelectorAll(`[name=${name}]`);
    let isChecked = false;

    for(let input of inputs){
        if(input.checked) isCheck = true; //한 개라도 체크되면 true;
    }

    if(isChecked){
        return true;
    }else{
        const errMsg = document.createElement('p');

        errMsg.append('선택해주세요');
        inputs[0].closest('td').append(errMsgs);
    }
}
function isPwd(name1, name2){
    const pwd1 = form.querySelector(`name${[name1]}`);
    const pwd2 = form.querySelector(`name${[name2]}`);
    const pwd1_val = pwd1.value;
    const pwd2_val = pwd2.value;
    const num = /[0~9]/; //0부터 9까지를 나타내는 정규표현식.
    const eng = /[a-zA-Z]/ 
    const spc = /[&@!$%^*+_]/ //특수문자. 

    if(pwd1_val === pwd2_val && num.test(pwd1_val)&&eng.test(pwd1_val)&&spc.test(pwd1_val)&& pwd1_val.length> len){
        // pwd1_val === pwd2_val 이고 이 둘은 문자,숫자,특수문자를 다 포함하고있다. 또 일정 길이 이상이다.
        return true;
    }else{
        const errMsgs = pwd1.closest('td').querySelectorAll('p');
        if(errMsgs.length > 0) errMsgs.forEach(el=>el.remove()) 
        const errMsg = document.createElement('p');
        errMsg.append(`비밀번호는 ${len}글자 이상, 영문, 숫자, 특수문자를 모두 포함해야 합니다`);
        pwd1.closest('td').append(errMsg);
        return false;
    }
}