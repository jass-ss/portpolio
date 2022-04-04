const pics = document.querySelectorAll(".pic");
console.log(pics)
const _chrome = pics[0].querySelector(".txt");
const brand = pics[1].querySelector(".txt");
const product = pics[2].querySelector(".txt");
const store = pics[3].querySelector(".txt");

intro();

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

pics.forEach((p, index) => {
  p.addEventListener("mouseenter", () => {
    const video = p.querySelector("video");

    //공통으로 적용시킬 부분
    pics.forEach((p) => {
      const video = p.querySelector("video");
      const img = p.querySelector("img");
      p.style.flex = "1";
      img.style.display = "block";
      if (video) {
        video.style.opacity = "0";
        video.style.height = "30vh";
      }
    });
    pics[0].querySelector(".txt").style.opacity = 0;
    p.style.flex = "4";

    //각각 적용시킬 부분
    if (index === 0) {
      p.style.flex = "1";
      pics[0].querySelector(".txt").style.opacity = 1;
    }
    if (index === 1) {
      video.style.opacity = 1;
      video.style.height = "85vh";
      video.play();
      pics[index].querySelector("img").style.display = "none";
      pics[index].querySelector(".txt").style.marginTop = "0";
      pics[index].querySelector("h1").style.color = "#fff";
      pics[index].querySelector("h2").style.color = "#fff";
    }
    if (index === 2) {
      video.style.opacity = 1;
      video.style.height = "85vh";
      video.play();
      pics[index].querySelector("img").style.display = "none";
      pics[index].querySelector(".txt").style.marginTop = "0";
      pics[index].querySelector("h1").style.color = "#fff";
      pics[index].querySelector("h2").style.color = "#fff";
    }
    if (index === 3) {
      video.style.opacity = 1;
      video.style.height = "85vh";
      video.play();
      pics[index].querySelector("img").style.display = "none";
      pics[index].querySelector(".txt").style.marginTop = "0";
      pics[index].querySelector("h1").style.color = "#fff";
      pics[index].querySelector("h2").style.color = "#fff";
    }
  });

  p.addEventListener("mouseleave", () => {
    p.querySelector("video").pause();
    pics[index].querySelector("h1").style.color = "#222";
    pics[index].querySelector("h2").style.color = "#222";
    pics[1].querySelector(".txt").style.marginTop = "-200px";
    pics[2].querySelector(".txt").style.marginTop = "300px";
    pics[3].querySelector(".txt").style.marginTop = "-100px";
  });
});
