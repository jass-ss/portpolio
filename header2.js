const fixed = document.querySelector('.fixed');
const pics = document.querySelectorAll('.pic');
const videos =document.querySelectorAll('video');
console.log(pics);

fixed.addEventListener('mouseenter',()=>{
    pics.forEach(p=>{
        p.style.flex = '1';
        p.querySelector('video').style.height = '15%'
    })
})

videos.forEach(v=>{
    v.addEventListener('mouseenter',(e)=>{
        e.currentTarget.play();
    })
})

pics.forEach((p,index)=>{
    p.addEventListener('mouseenter',(e)=>{
       // const img = p.querySelector('img');

        pics.forEach(p=>{
            p.style.flex='1';
            p.querySelector('img').style.height = '50vh'
            p.querySelector('video').style.height = '15%'
        });

        e.currentTarget.querySelector('video').play();
        p.style.flex = '4';

        //img.style.height = '85vh';
        //pics[index].querySelector('img').style.height = '85vh';

        //.pic을 각각 설정
        if(index === 0){
            pics[index].querySelector('img').style.height = '85vh';
            pics[index].querySelector('video').style.height = '70vh';
        }  
        if(index === 1){
            pics[index].querySelector('img').style.height = '85vh';
            pics[index].querySelector('video').style.height = '70vh';
        }  
        if(index === 2){
            pics[index].querySelector('img').style.height = '85vh';
            pics[index].querySelector('video').style.height = '70vh';
        }
    });
    p.addEventListener('mouseleave',(e)=>{
        e.currentTarget.querySelector('video').pause();
    })
}); 
