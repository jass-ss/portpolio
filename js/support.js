 
const youtube_key = "AIzaSyCK9lW6syZHNw0hLhSpWzUcjnQzmoebEQM";
const playListId = "PLgRXT2p63sR2XX3SUYVo57tpYJxmNIhm-";
const num = 5;
const youtube_url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${youtube_key}&playlistId=${playListId}&maxResults=${num}`;

const slide = document.querySelector('.slide');


getData(youtube_url)

function getData(url){
    const main_article = document.querySelector('article.main');
    const videos_article = document.querySelector('article.videos');
    const main_video = main_article.querySelector('.video');

    fetch(url)
    .then(data=>data.json())
    .then(json=>{
        console.log(json);
        const items = json.items;
        console.log(items);
        const article1 = `
        <iframe src = "https://youtube.com/embed/${items[0].snippet.resourceId.videoId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
        `
        let article2 = '';
        for(let i=1; i<items.length; i++){
            const article = `<iframe src = "https://youtube.com/embed/${items[i].snippet.resourceId.videoId}" frameborder="0" width="24%" height="100%" allowfullscreen></iframe>`
            article2 += article;
        } 
        console.log(article2)

        main_video.innerHTML = article1;
        videos_article.innerHTML = article2;
    })
}