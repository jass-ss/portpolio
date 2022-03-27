const form = document.querySelector('form');
const btnSubmit = form.querySelector("input[type=submit]"); 

btnSubmit.addEventListener('click', e=>{
    //e.preventDefault();

    if(!isTxtNum('id', 6, 13)){ e.preventDefault()}
    if(!isPwd('pwd1', 6, 13)){ e.preventDefault()}
    if(!isSame('pwd1', 'pwd2')){e.preventDefault()}
    if(!isTxt('name')){e.preventDefault()}
    if(!isCheck("gender")) e.preventDefault(); 
    if(!isEmpty('address')){e.preventDefault()}
    if(!isEmpty('address2')){e.preventDefault()}
    if(!isNum('phone2','phone3')){e.preventDefault}
    if(!isBirth('birth')){e.preventDefault}
    if(!isEmail('email')){e.preventDefault} 

})

function isTxtNum(res, n, n2){
    const txt = form.querySelector(`input[name=${res}]`);
    const val = txt.value;
    console.log(txt)
    console.log(val.length)
    if(/[0-9]/.test(val)&&/[a-zA-Z]/.test(val)&& val.length> n && val.length< n2 ){
        //console.log(val)
        const msgs = txt.closest('td').querySelectorAll('p');
        if(msgs.length>0){
            msgs.forEach((el)=>{
                el.remove();
            })
        }
        return true;
    }else{
        console.log('no')
        const errMsg = document.createElement('p')
        errMsg.append('영어, 숫자를 혼합하여 6자~12자인 아이디를 적어주세요');
        const errMsgs = txt.closest('td').querySelectorAll('p');
        if(errMsgs.length>0){
            errMsgs.forEach((el)=>{
                el.remove()
            })
        }
        txt.closest('td').append(errMsg);
        return false;
    }
} 

function isPwd(res, n, n2){
    const pwd = form.querySelector(`input[name = ${res}]`);
    const val = pwd.value;
    if(/[!@#$%^&*-+_=]/.test(val)&&/[a-zA-Z]/.test(val)&&/[0-9]/.test(val)&&val.length>n&&val.length<n2){
        const msgs = pwd.closest('td').querySelectorAll('p');
        if(msgs.length>0){ msgs.forEach(el=>el.remove())}
        return true
    }else{
        const errMsg = document.createElement('p');
        errMsg.append('영어, 숫자, 특수문자를 혼합하여 6자~12자인 비밀번호를 적어주세요')
        const errMsgs = pwd.closest('td').querySelectorAll('p');
        if(errMsgs.length>0){errMsgs.forEach(el=>el.remove())}
        pwd.closest('td').append(errMsg);
        return false;
    }
}

function isSame(a,b){
    const one = form.querySelector(`input[name = ${a}]`);
    const two = form.querySelector(`input[name = ${b}]`);
    if(one.value === two.value){
        const errMsgs = two.closest('td').querySelectorAll('p');
        if(errMsgs.length>0){errMsgs.forEach(el=>el.remove())}
        return true
    }else{
        const errMsg = document.createElement('p');
        errMsg.append('비밀번호를 다시 입력해주세요')
        const errMsgs = two.closest('td').querySelectorAll('p');
        if(errMsgs.length>0){errMsgs.forEach(el=>el.remove())}
        two.closest('td').append(errMsg);
        return false
    }
}

function isTxt(userName){
    const name = form.querySelector(`input[name=${userName}]`);
    const val = name.value;
    if(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(val)){
        const errMsgs = name.closest('td').querySelectorAll('p');
        if(errMsgs.length>0){errMsgs.forEach(el=>el.remove())}
        return true;
    }else{
        const errMsg = document.createElement('p');
        errMsg.append('이름을 입력해주세요')
        const errMsgs = name.closest('td').querySelectorAll('p');
        if(errMsgs.length>0){errMsgs.forEach(el=>el.remove())}
        name.closest('td').append(errMsg);
        return false;
    }
}

function isCheck(res){
    let isTrue = false;
    const gender = form.querySelectorAll(`input[name = ${res}]`);
    //console.log(gender)
    gender.forEach((el)=>{
        if(el.checked){ isTrue = true;}
    })

    if(isTrue){
        const errMsgs = gender[0].closest('td').querySelectorAll('p');
        if(errMsgs.length>0){errMsgs.forEach(el=>el.remove())}
        return true
    }else{
        const errMsg = document.createElement('p');
        errMsg.append('성별을 선택해주세요')
        const errMsgs = gender[0].closest('td').querySelectorAll('p');
        if(errMsgs.length>0){errMsgs.forEach(el=>el.remove())}
        gender[0].closest('td').append(errMsg);
        return false;
    }    
}

function isNum(a, b){
    const phone2 = form.querySelector(`input[name=${a}]`);
    const phone3 = form.querySelector(`input[name=${b}]`);
    if(/[0-9]/.test(phone2.value) && /[0-9]/.test(phone3.value)&&phone2.value.length === 4 && phone3.value.length === 4 ){
        console.log('2')
        const errMsgs = phone2.closest('td').querySelectorAll('p');
        if(errMsgs.length>0){errMsgs.forEach(el=>el.remove())}
        return true
    }else{
        console.log('l')
        const errMsg = document.createElement('p');
        errMsg.append('핸드폰번호 4자리를 입력해주세요')
        const errMsgs = phone2.closest('td').querySelectorAll('p');
        if(errMsgs.length>0){errMsgs.forEach(el=>el.remove())}
        phone2.closest('td').append(errMsg);
        return false;
    }
}

function isBirth(n){
    const birth = form.querySelector(`input[name=${n}]`);
    if(/[0-9]/.test(birth.value)){
        const errMsgs = birth.closest('td').querySelectorAll('p');
        if(errMsgs.length>0){errMsgs.forEach(el=>el.remove())}
        return true
    }else{
        const errMsg = document.createElement('p');
        errMsg.append('생년월일을 입력해주세요')
        const errMsgs = birth.closest('td').querySelectorAll('p');
        if(errMsgs.length>0){errMsgs.forEach(el=>el.remove())}
        birth.closest('td').append(errMsg);
        return false;
    }
}

function isEmpty(n){
    const address = form.querySelector(`input[name=${n}]`);
    const val = address.value;
    if(val.trim()){
        const errMsgs = address.closest('td').querySelectorAll('p');
        if(errMsgs.length>0){errMsgs.forEach(el=>el.remove())}
        return true
    }else{
        const errMsg = document.createElement('p');
        errMsg.append('주소를 입력해주세요')
        const errMsgs = address.closest('td').querySelectorAll('p');
        if(errMsgs.length>0){errMsgs.forEach(el=>el.remove())}
        address.closest('td').append(errMsg);
        return false;
    }
}

function isEmail(res){
    const email = form.querySelector(`input[name=${res}]`);
    const val = email.value;
    if(/[@]/.test(val)){
        const errMsgs = email.closest('td').querySelectorAll('p');
        if(errMsgs.length>0){errMsgs.forEach(el=>el.remove())}
        return true
    }else{
        const errMsg = document.createElement('p');
        errMsg.append('올바른 이메일주소를 입력해주세요')
        const errMsgs = email.closest('td').querySelectorAll('p');
        if(errMsgs.length>0){errMsgs.forEach(el=>el.remove())}
        email.closest('td').append(errMsg);
        return false;
    }
}