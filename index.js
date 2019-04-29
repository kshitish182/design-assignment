let hamBurger = document.getElementById('hamburger');
let burgerButton = document.getElementById('burgerButton');



burgerButton.addEventListener('click', event => {
	if(hamBurger.style.display === ""){
		hamBurger.style.display = 'block';
	}else if(hamBurger.style.display === 'block'){
		hamBurger.style.display = "";
	}
});