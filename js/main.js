window.addEventListener("load", () => {
  const grid = new Isotope("section", {
    itemSelector: "article",
    columnWidth: "article",
    transitionDuration: "0.8s",
  });

  const category = document.querySelectorAll(".list li"); //이거 모든 li가 선택됨.,. 내가 원하는 건 3묶음으로 선택하는건데!? 동작은 문제없지만, 원하는 그림이 아님... 나중에 수정해야함.
  console.log(category);
  //const appliance = document.querySelectorAll("#appliance li");
  //const cookWear = document.querySelectorAll("#cookWear li");

  for (el of category) {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const sort = e.currentTarget.querySelector("a").getAttribute("href");
      console.log(sort);
      grid.arrange({
        filter: sort,
      });

      /* if (e.currentTarget.innerText === "All") {
        document.querySelector("#appliance").classList.remove("on");
        document.querySelector("#cookWear").classList.remove("on");
      } else if (e.currentTarget.innerText === "Cook Wear") {
        document.querySelector("#appliance").classList.remove("on");
        document.querySelector("#cookWear").classList.add("on");
      } else {
        document.querySelector("#appliance").classList.add("on");
        document.querySelector("#cookWear").classList.remove("on");
      }*/

      for (el of category) {
        el.classList.remove("on");
      }
      e.currentTarget.classList.add("on");
    });
  }

  /* for (el of appliance) {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      for (el of appliance) {
        el.classList.remove("on");
      }
      for(el of cookWear){
        el.classList.remove("on");
      }
      e.currentTarget.classList.add("on");
    });
  }

  for (el of cookWear) {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      for (el of cookWear) {
        el.classList.remove("on");
      }
      for (el of appliance) {
        el.classList.remove("on");
      }
      e.currentTarget.classList.add("on");
    });
  }*/
});

/*
for (let el of article) {
  el.addEventListener("click", (e) => {
    aside.classList.add("on");

    const innerTxt = e.currentTarget.querySelectorAll(".txt li");
    console.log(innerTxt);
    txt[0].innerText = innerTxt[0].innerText;
    txt[1].innerText = innerTxt[1].innerText;
    txt[2].innerText = innerTxt[2].innerText;

    const src = e.currentTarget.querySelector("img").getAttribute("src");
    console.log(src);
    img.setAttribute("src", src);
  });
} */

const article = document.querySelectorAll("section article");
const aside = document.querySelector("aside");
const txt = aside.querySelectorAll(".txt li");
console.log(txt);
const link = aside.querySelector('a');
const img = aside.querySelector("img");
const closeBtn = aside.querySelector("span");

closeBtn.addEventListener("click", () => {
  new Anime(aside, {
    prop: "bottom",
    value: "-100%",
    duration: 500,
    callback:()=>{
      new Anime(closeBtn,{
        prop:'opacity',
        value: 0,
        duration:0,
        callback:()=>{
          new Anime(link,{
            prop:'opacity',
            value: 0,
            duration:0,
          })
        }
      })
    }
  });
});

for (let el of article) {
  el.addEventListener("click", (e) => {
    const innerTxt = e.currentTarget.querySelectorAll(".txt li");
    console.log(innerTxt);
    txt[0].innerText = innerTxt[0].innerText;
    txt[1].innerText = innerTxt[1].innerText;
    txt[2].innerText = innerTxt[2].innerText;

    const src = e.currentTarget.querySelector("img").getAttribute("src");
    console.log(src);
    img.setAttribute("src", src);
    new Anime(aside, {
      prop: "bottom",
      value: "0%",
      duration: 500,
      callback:()=>{
        new Anime(closeBtn,{
          prop:'opacity',
          value: 1,
          duration:500,
          callback:()=>{
            new Anime(link,{
              prop:'opacity',
              value: 1,
              duration:500,
            })
          }
        })
      }
    });
  });
}
