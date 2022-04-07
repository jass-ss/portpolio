const pics = [
	`img/brandMoment.jpg`,
	'img/product1_Moment.jpg',
	'img/product3_Moment.jpg',
];
//const videios = ['img/brand.mp4', 'img/product1.mp4 ', 'img/product3.mp4'];
const img = document.querySelector('.video img');
const video = document.querySelectorAll('.video video');

const li = document.querySelectorAll('.list li a');

li.forEach((l, index) => {
	l.addEventListener('mouseenter', (e) => {
		e.preventDefault();
		video.forEach((v) => {
			v.style.opacity = 0;
			v.style.width = '0%';
			v.style.height = '30%';
		});
		video[index].style.opacity = 1;
		video[index].style.width = '100%';
		video[index].style.height = '100%';
		img.style.opacity = 0;
		//img.setAttribute('src', pics[index]);
		//video.setAttribute('src', videios[index]);
		video[index].play();

		/*	new Anim(video,{
			prop:'opacity',
			value: 0,
			duration:0,
			callback:()=>{
				new Anim(video,{
					prop:'opacity',
					value: 0,
					duration:0,})
			}
		}) */
	});
});
