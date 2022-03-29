const slide = document.querySelector(".slide");
const pics = document.querySelector(".pics");
const imgs = pics.querySelectorAll("img");
let enable = true;

const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");

const next = document.querySelector("#visual .next");
const prev = document.querySelector("#visual .prev");
const play = document.querySelector("#visual .play");
const pause = document.querySelector("#visual .stop");
const time = document.querySelector("#visual .time");

const service = document.querySelector("#service");
const serviceOdd = service.querySelectorAll(".odd");
const serviceEven = service.querySelectorAll(".even");
const brand = document.querySelector("#brand");

const serviceTop = service.offsetTop;
const brandTop = brand.offsetTop;
console.log(serviceEven);

const body = document.querySelector("body");
const review = document.querySelector("section#review");
const dt = document.querySelectorAll("#review dt");
const dd = document.querySelectorAll("#review dd");
const youtube = document.querySelector("dt.youtube");
const key = "AIzaSyCK9lW6syZHNw0hLhSpWzUcjnQzmoebEQM";
const playListId = "PLgRXT2p63sR2oVxZ8U2F72MACQoAgiN-A";
const num = 4;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;
const closeBtn = review.querySelector('aside .closeBtn');

youtube.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(url)
    .then((data) => data.json())
    .then((json) => {
      // console.log(data.items);
      const datas = json.items;
      let result = "";
      const content = datas.forEach((item) => {
        console.log(item);
        const data = `
                    <article>
                        <div class="pic"  data-videoId="${item.snippet.resourceId.videoId}">
                            <a href='#'>
                            <img src=${item.snippet.thumbnails.high.url} class="youtube"/>
                            </a>
                        </div>

                        <div class="con">
                        <h2>${item.snippet.title}</h2>
                        </div>
                    </article>
                `;
        //review.append(data);
        //youtube.nextElementSibling.append(data) //dd에는 텍스트를 추가해도 소용없다. 다른 태그안에 텍스트를 넣은 후 그 태그를 append 해야한다.
        result += data;
      });
      youtube.nextElementSibling.innerHTML = result;
    });
});

review.addEventListener("click", (e) => {
    //console.log(e.target.closest('a'))
  if (e.target.classList.contains("youtube")) {
    e.preventDefault();
    if (!e.target.closest("a")) return;
    const videoId = e.target.closest("div.pic").getAttribute("data-videoId");
    //console.log(videoId)
    const aside = document.createElement("aside");
    aside.innerHTML = `
    <iframe src="https://youtube.com/embed/${videoId}" frameborder="0" width="50%" height="40%" allowfullscreen></iframe>
    <span class='closeBtn'>X</span>`;
    review.append(aside);
  }
});

review.addEventListener('click',e=>{
    const close = document.querySelector('#review .closeBtn');
    if(!close){
        return
    }else{
        const aside = document.querySelector('#review aside');
        close.addEventListener('click',()=>{
            aside.remove();
        })
    }
})

dt.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    setOn(index);
  });
});

init();
setTime();

let running = setInterval(() => run(), 10000);

btnCall.onclick = function (e) {
  e.preventDefault();
  btnCall.classList.toggle("on");

  menuMo.classList.toggle("on");
};

window.addEventListener("scroll", (e) => {
  const scroll = window.scrollY;
  if (scroll >= `${serviceTop - 350}`) {
    serviceOdd.forEach((el) => {
      el.classList.add("on");
    });
  }

  if (scroll >= `${serviceTop + 250}`) {
    serviceEven.forEach((el) => {
      el.classList.add("on");
    });
  }
  if (scroll >= `${brandTop - 500}`) {
    brand.classList.add("on");
  }
});

next.addEventListener("click", (e) => {
  e.preventDefault();
  if (play.classList.contains("on")) {
    play.classList.remove("on");
    time.classList.add("off");
  }

  if (enable) {
    enable = false;
    nextSlide();
  }
});

prev.addEventListener("click", (e) => {
  e.preventDefault();
  if (enable) {
    enable = false;
    prevSlide();
  }
});

play.addEventListener("click", (e) => {
  e.preventDefault();
  setTime();
  running = setInterval(() => run(), 10000);
});

pause.addEventListener("click", (e) => {
  e.preventDefault();
  play.classList.remove("on");
  time.style.display = "none";
  clearTimeout(running);

  new Anim(time, {
    prop: "width",
    value: "0",
    duration: 0,
  });
});

function setOn(index) {
  dt.forEach((el) => el.classList.remove("on"));
  dd.forEach((el) => el.classList.remove("on"));
  dt[index].classList.add("on");
  dd[index].classList.add("on");
}

function run() {
  setTime();
  nextSlide();
}

function init() {
  const len = imgs.length;
  pics.style.left = "-100%";
  pics.style.width = `${100 * len}%`;
  imgs.forEach((el) => {
    el.style.width = `${100 / len}%`;
  });
}

function nextSlide() {
  new Anim(pics, {
    prop: "left",
    value: "-200%",
    duration: 500,
    callback: () => {
      pics.append(pics.firstElementChild);
      pics.style.left = "-100%";
      enable = true;
    },
  });
}

function prevSlide() {
  new Anim(pics, {
    prop: "left",
    value: "0%",
    duration: 500,
    callback: () => {
      pics.prepend(pics.lastElementChild);
      pics.style.left = "-100%";
      enable = true;
    },
  });
}

function setTime() {
  if (time.style.display === "none") {
    time.style.display = "block";
  }

  new Anim(time, {
    prop: "width",
    value: "20%",
    duration: 9500,
    callback: () => {
      new Anim(time, {
        prop: "width",
        value: "0%",
        duration: 0,
      });
    },
  });
}
