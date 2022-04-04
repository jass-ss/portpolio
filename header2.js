const fixed = document.querySelector('.fixed');
const pics = document.querySelectorAll('.pic');
const videos =document.querySelectorAll('video');
console.log(pics);

fixed.addEventListener('mouseenter',()=>{
    pics.forEach(p=>{
        p.style.flex = '1';
        p.querySelector('video').style.height = '30%'
        pics[2].querySelector('img').style.height = '70vh'
        p.querySelector('.box').style.color = '#222';
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
            p.querySelector('img').style.height = '65vh';
            p.querySelector('video').style.height = '30%';
            p.querySelector('.box').style.color = '#222';
        });

        e.currentTarget.querySelector('video').play();
        p.style.flex = '4';

        //img.style.height = '85vh';
        //pics[index].querySelector('img').style.height = '85vh';

        //.pic을 각각 설정
        if(index === 0){
            pics[index].querySelector('img').style.height = '85vh';
            pics[index].querySelector('video').style.height = '70vh';
            pics[index].querySelector('.box').style.color = '#fff'
        }  
        if(index === 1){
            pics[index].querySelector('img').style.height = '85vh';
            pics[index].querySelector('video').style.height = '70vh';
            pics[index].querySelector('.box').style.color = '#fff'
        }  
        if(index === 2){
            pics[index].querySelector('img').style.height = '85vh';
            pics[index].querySelector('video').style.height = '70vh';
            pics[index].querySelector('.box').style.color = '#fff'
        }
    });
    p.addEventListener('mouseleave',(e)=>{
        e.currentTarget.querySelector('video').pause();
    })
}); 
