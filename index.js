const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'});
sr.reveal('.home-img',{delay:350, origin:'right'});

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'});

let myArray = [ './images/WhatsApp Image 2022-11-02 at 1.23.10 PM.jpeg ','./images/WhatsApp Image 2022-11-02 at 1.23.10 PM.jpeg ','./images/WhatsApp Image 2022-11-02 at 1.23.10 PM.jpeg ','./images/WhatsApp Image 2022-11-02 at 1.23.10 PM.jpeg ' ]

const help = document.getElementsByClassName('pict')


// for (let index = 0; index < pict.length; index++) {
// 	const element = pict[index];
// 	console.log(element);

	
// }
help.forEach(element => {
	console.log(element);
});

for (let i = 0; i < myArray.length; i++) {
	const element = array[i];



	
}


