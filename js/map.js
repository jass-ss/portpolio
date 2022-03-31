
const map_container = document.querySelector('section.brand article.contact .map');
//console.log(map_container)
const branch_btns = document.querySelectorAll('section.brand article.contact .branch li');
const logo = document.querySelector('figure.logo .svg svg path');
let drag = true;
let zoom = true;
const t_on = document.querySelectorAll('section.brand article.contact .traffic li')[0];
const t_off = document.querySelectorAll('section.brand article.contact .traffic li')[1];
const svgEvent = document.querySelector('section.brand').offsetTop;

window.addEventListener('scroll',()=>{
    const scroll = window.scrollY||window.pageYOffset;
    if(scroll>= (svgEvent - 400)){
        logo.classList.add('on')
    }else{logo.classList.remove('on')}
})

var markerOptions =[
    {
        title : "Head Office", 
        latlng : new kakao.maps.LatLng(37.51426220045354, 127.06024581720781), 
        imgSrc : "img/marker1.png", 
        imgSize : new kakao.maps.Size(232,99), 
        imgPos : {offset : new kakao.maps.Point(116,99)}, 
        button : branch_btns[0] 
    },
    {
        title : "Digital Market", 
        latlng : new kakao.maps.LatLng(37.51720985347799, 127.04134374625059), 
        imgSrc : "img/marker2.png", 
        imgSize : new kakao.maps.Size(232,99), 
        imgPos : {offset : new kakao.maps.Point(116,99)} ,
        button : branch_btns[1]
    },
    {
        title : "Flagship Store", 
        latlng : new kakao.maps.LatLng(37.585601140947716, 127.02013033711161), 
        imgSrc : "img/marker3.png", 
        imgSize : new kakao.maps.Size(232,99), 
        imgPos : {offset : new kakao.maps.Point(116,99)},
        button : branch_btns[2] 
    }
]; 

const option = {
    center : new kakao.maps.LatLng(37.51426220045354, 127.06024581720781), //맵의 중심좌표
    level : 3, //지도의 확대, 축소 정도 
}

const map = new kakao.maps.Map(map_container, option); //지도 생성 및 객체된 객체 리턴.

const mapTypeControl = new kakao.maps.MapTypeControl(); //지도 위에 나타낼 컨트롤러
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT); //컨트롤이 표치될 위치. TOPRIGHT은 오른쪽 위 

setDraggable(drag);
setZoomable(zoom);


   //지도에 교통정보를 표시할지 말지 제어

t_on.addEventListener('click',(e)=>{
 e.preventDefault();
 if(t_on.classList.contains('on')) return;

 map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); 
 t_on.classList.add('on');
 t_off.classList.remove('on');
})

t_off.addEventListener('click',(e)=>{
    e.preventDefault();
    if(t_off.classList.contains('on')) return;
   
    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC); 
    t_on.classList.remove('on');
    t_off.classList.add('on');
   })

   for(let i=0; i<markerOptions.length; i++){
       new kakao.maps.Marker({ //마커 이미지를 특정된 위치로.
           map: map,
           position: markerOptions[i].latlng,
           title: markerOptions[i].title,
           image: new kakao.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions[i].imgPos) //이미지를 마커이미지로 만드는 객체 메서드
       })

       markerOptions[i].button.addEventListener('click', e=>{
           e.preventDefault();
           moveTo(markerOptions[i].latlng) // 마커를 누르면 해당 마커의 위치로 움직이는 함수.
           branch_btns.forEach((b)=>b.classList.remove('on'));
           branch_btns[i].classList.add('on');
       })
   }

   window.addEventListener('resize',()=>{
       const active_btn = document.querySelector('section.brand article.contact .branch li.on'); // on되어있는 마커를 찾아서
       const active_index = active_btn.getAttribute('data-index'); //인덱스 값 추출.
       
       moveTo(markerOptions[active_index].latlng); //resize 될 때 마다 on인 마커를 찾어서 센터로 이동

   })


   function moveTo(latlng){
        map.setCenter(latlng) //해당 지점을 중심지점으로 이동. 
   }


   function setDraggable(drag){
        map.setDraggable(drag); //마우스 드래그로 지도 이동 가능여부 설정
    };

    function setZoomable(zoom){
        map.setZoomable(zoom); //마우스 드래그로 지도 확대,축소 가능여부 설정
    };

