const pics = document.querySelectorAll(".pic");
console.log(pics)
const figure = document.querySelectorAll('.figure');
const _chrome = pics[0].querySelector(".txt");
const brand = pics[1].querySelector(".txt");
const product = pics[2].querySelector(".txt");
const store = pics[3].querySelector(".txt");

intro();


pics.forEach((p, index) => {
  p.addEventListener("mouseenter", () => {
    const video = p.querySelector("video");

    //공통으로 적용시킬 부분

    //각각 적용시킬 부분
    if (index === 0) {
      p.style.flex = "1";
      pics[0].querySelector(".txt").style.opacity = 1;
    }
    if (index === 1) {
      video.style.opacity = 1;
      video.play();
      pics[index].querySelector("img").style.opacity = 0;
    }
    if (index === 2) {
      video.style.opacity = 1;
      video.play();
      pics[index].querySelector("img").style.opacity = 0;
      //pics[index].querySelector("img").style.display = "none";
    }
    if (index === 3) {
      video.style.opacity = 1;
      video.play();
      pics[index].querySelector("img").style.opacity = 0;
      //pics[index].querySelector("img").style.display = "none";
    }
  });

  p.addEventListener("mouseleave", (e) => {
    const video = e.currentTarget.querySelector('video');
    if(video){
      video.pause();
    }
    //pics[index].querySelector("img").style.display = "block";
    pics[index].querySelector("img").style.opacity = 1;
  });
});


figure.forEach(f=>{
  f.addEventListener('click',e=>{
    const el = e.currentTarget; //.figure
    const pic = e.currentTarget.parentElement; //.pic

    if(!el.hasAttribute('on')){
    el.setAttribute('on','')
    pics.forEach(p=> p.style.display = 'none');
    pic.style.display = 'block';
    el.style.height = '100%';
    pic.querySelector('.figure').style.top = 0;
    pic.querySelector('.txt').style.marginTop = 0;
    pic.querySelector('.txt').style.color = '#fff'
    }else{
      const index = pic.getAttribute('data-index');
      console.log(index)
      el.removeAttribute('on');
      pics.forEach(p=> p.style.display = 'block');
      el.style.height = '50%';
      if(index == 1){
        el.style.top = '47.5%';
        pic.querySelector('.txt').style.marginTop = '-150px';
        pic.querySelector('.txt').style.color = '#222'
      }
      if(index == 2){
        el.style.top = '10%';
        pic.querySelector('.txt').style.marginTop = '300px';
        pic.querySelector('.txt').style.color = '#222'
      }
      if(index == 3){
        el.style.top = '47.5%';
        pic.querySelector('.txt').style.marginTop = '-150px';
        pic.querySelector('.txt').style.color = '#222'
      }

    }
  })
})


function intro() {
  new Anim(_chrome, {
    prop: "opacity",
    value: 1,
    duration: 500,
    callback: () => {
      new Anim(brand, {
        prop: "opacity",
        value: 1,
        duration: 500,
        callback: () => {
          new Anim(product, {
            prop: "opacity",
            value: 1,
            duration: 500,
            callback: () => {
              new Anim(store, {
                prop: "opacity",
                value: 1,
                duration: 500,
                callback: () => {},
              });
            },
          });
        },
      });
    },
  });
}