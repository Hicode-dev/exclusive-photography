const observer1 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
});
const observer2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('sharpp')
        }else{
            entry.target.classList.remove('sharpp')
        }
    })
});

const hiddenLoki = document.querySelectorAll('.loki')
hiddenLoki.forEach((el)=> observer1.observe(el) )

const sharp = document.querySelectorAll('.sharp')
sharp.forEach((el)=> observer2.observe(el) )

const left = document.querySelectorAll('.left')
left.forEach((el)=> observer2.observe(el) )





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


