
const pics = document.querySelectorAll('.pic');
console.log(pics);

/*pics.forEach((p)=>{
    p.addEventListener('mouseenter',()=>{
        pics.forEach(p=>{
            p.style.flex='1';
            p.querySelector('img').style.height ='50vh';    
        });
        p.style.flex = '4';
        p.querySelector('img').style.height = '85vh';
    })
}) */

pics.forEach((p,index)=>{
    p.addEventListener('mouseenter',()=>{
        const img = p.querySelector('img');
        pics.forEach(p=>{
            p.style.flex='1';
            p.querySelector('img').style.height = '50vh'
        });
        p.style.flex = '4';
        if(index === 0){
            img.style.height ='85vh';
        }
        if(index===1){
            img.style.height ='85vh';
        }
        if(index===2){
            img.style.top = 0;
            img.style.height ='85vh';
            //pics[1].querySelector('img').style.bottom ='10vh';
            //pics[1].querySelector('img').style.height ='75vh';
        }else{
            pics[2].querySelector('img').style.top = '10%';}
        if(index===3){
            img.style.height ='85vh';
        }
    })
})