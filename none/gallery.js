/*
key :04528b7866b34ab295d6f44d109ca738

https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

buddyicon 
http://farm{icon-farm}.staticflickr.com/{icon-server}/buddyicons/{nsid}.jpg

https://www.flickr.com/images/buddyicon.gif

https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value

flickr.interestingness.getList
*/
const body = document.querySelector("body"); 
const frame = document.querySelector("dd.sns"); 
const frame2 = document.querySelector('dd.youtube')
const sns = document.querySelector('dt.sns');
const youtube = document.querySelector('dt.youtube')
const input = document.querySelector("#search"); 
const btnSearch = document.querySelector(".btnSearch"); 
const loading = document.querySelector(".loading"); 
const base = "https://www.flickr.com/services/rest/?";
const method_interest = "flickr.interestingness.getList";
const method_favorite = "flickr.favorites.getList";
const method_people = 'flickr.people.getPhotos';
const method_search = "flickr.photos.search"; 
const user = '195295333@N07'
const key = "e565f81533120f8f890f47cdeb951ff4";
const per_page = 50; 
const url = `${base}method=${method_favorite}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&user_id=${user}`;

//페이지로딩시 interstingness메소드 url 호출 
callData(url); 



//검색버튼 클릭시 태그로 검색한 이미지 호출 메소드 
/*btnSearch.addEventListener("click", e=>{
    let tag = input.value; 

    const url = `${base}method=${method_search}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&privacy_filter=1&tags=${tag}`;
    
    callData(url);
})*/


//썸네일 클릭시 팝업생성 이벤트 연결 
frame.addEventListener("click", e=>{
    e.preventDefault(); 

    let target = e.target.closest(".item").querySelector(".pic img"); 

    //썸네일을 클릭했을 때만 코드실행 
    if(e.target === target){
        //클릭한 썸네일의 부모 a에서 href속성 구하기 
        let imgSrc = e.target.parentElement.getAttribute("href"); 

        let pop = document.createElement("aside"); 
        pop.classList.add("pop"); 
        let pops = `
                    <div class="con">
                        <img src="${imgSrc}">
                    </div>
                    <span class="close">close</span>
        `; 
        pop.innerHTML = pops; 
        body.append(pop);
        //팝업생성시 스크롤 없애기  
        body.style.overflow = "hidden"; 
    }   
});

body.addEventListener("click", e=>{
    let pop = body.querySelector(".pop"); 

    //팝업이 있을 경우에만 코드 실행 
    if(pop){
        let close = pop.querySelector(".close"); 
        //close버튼을 클릭했을 때만 코드 실행 
        if(e.target == close){
            pop.remove(); 
            body.style.overflow = "auto"; 
        }
    }
    
})

function callData(url){
    fetch(url)
    .then(data=>{   
        return data.json();    
    })
    .then(json=>{
        console.log(json)
        const items = json.photos.photo; 
        //console.log(items); 
        createList(items);
        imgLoaded();
    
        
    })
}

function createList(items){
    let htmls =""; 
   // console.log(items); 
    items.forEach(data=>{
        htmls +=`
                <article class="item">
                    <div>
                        <a class="pic" href="https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg">
                            <img src="https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg">
                        </a>

                        <p>${data.title}</p>
                        <div class="profile">
                            <img src="http://farm${data.farm}.staticflickr.com/${data.server}/buddyicons/${data.owner}.jpg">
                            <span>${data.owner}</span>
                        </div>
                    </div>
                </article>
        `; 
    })

    frame.innerHTML = htmls;     
}

function imgLoaded(){     
    const thumbs = document.querySelectorAll(".pic img"); 
    const len = thumbs.length; 
    let count = 0; 

    thumbs.forEach(thumb =>{
        //썸네일 엑박일 경우 대체이미지 처리 
        thumb.onerror = ()=>{
            thumb.setAttribute("src", "img/k1.jpg");
        };
        //이미지 모두 로딩완료후 isotope적용 
        thumb.onload =()=>{
            count++; 
            if(count === len){
                new Isotope(frame,{
                    itemSelector :".item", 
                    columnWidth : ".item", 
                    transitionDuration :"0.8s"
                });

                //모든 이미지 로딩 끝나고 isotope적용시
                //frame과 loading에 모션 처리 
                frame.classList.add("on"); 
                loading.classList.add("off"); 
            };
        };
    });
    
    //버디아이콘 엑박시 대체이미지 변경 
    const buddies = document.querySelectorAll(".profile img"); 
    buddies.forEach(buddy=>{
        buddy.onerror=()=>{
            buddy.setAttribute("src", "https://www.flickr.com/images/buddyicon.gif"); 
        };
    });
};
 

const youtube_key = "AIzaSyCK9lW6syZHNw0hLhSpWzUcjnQzmoebEQM";
const playListId = "PLgRXT2p63sR2oVxZ8U2F72MACQoAgiN-A";
const num = 4;
const youtube_url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${youtube_key}&playlistId=${playListId}&maxResults=${num}`;
const closeBtn = youtube.querySelector('aside .closeBtn');


youtube.addEventListener('click', e=>{
    sns.classList.remove('on');
    frame.classList.remove('on');
    youtube.classList.add('on');
    frame2.classList.add('on')
    fetch(youtube_url)
    .then(data=>data.json())
    .then(json=>{
        console.log(json)
        const itmes = json.items;
        let result = '';

        itmes.forEach(item=>{
            const data = 
            /*<article>
                <img src=${item.snippet.thumbnails.high.url}/>
                 <h2>${item.snippet.thumbnails.high.url}</h2>   
            </article> */
            `
            <article>
            <div class="pic" data-videoId="${item.snippet.resourceId.videoId}">
                <a href='#' data-videoId="${item.snippet.resourceId.videoId}">
                <img src=${item.snippet.thumbnails.high.url} class="youtube"/>
                </a>
            </div>

            <div class="con">
            <h2>${item.snippet.title}</h2>
            </div>
        </article>` ;
            result+=data
        })
        frame2.innerHTML = result;
    })
}) ;
 

frame2.addEventListener('click',e=>{
    e.preventDefault();
    const target = e.target;
    if(!target.classList.contains('youtube')) return;
    const url = e.target.closest('a').getAttribute('data-videoId');
    console.log(url)
    const aside = document.createElement('aside');
    const data = `
    <iframe src="https://youtube.com/embed/${url}" frameborder="0" width="50%" height="50%" allowfullscreen></iframe>
    <span class='close'>X</span>`;
    aside.innerHTML = data;
    body.append(aside);
    const closeBtn = aside.querySelector('span.close');
    closeBtn.addEventListener('click',()=>{
        aside.remove();
    })
})




sns.addEventListener('click', e=>{
    sns.classList.add('on');
    frame.classList.add('on');
    youtube.classList.remove('on');
    frame2.classList.remove('on');
}) ;





/*
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
      frame2.innerHTML = result;
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
    <iframe src="http://youtube.com/embed/${videoId}" frameborder="0" width="50%" height="40%" allowfullscreen></iframe>
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
*/