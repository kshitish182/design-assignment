let hamBurger = document.getElementById('hamburger');
let burgerButton = document.getElementById('burgerButton');
let iconContainer = document.getElementsByClassName('icon-container');
let innerList = document.getElementsByClassName('list-inner-element-container');
let pgFirstRow = document.getElementsByClassName('pg-first-row');


burgerButton.addEventListener('click', event => {
	if(hamBurger.style.display === ""){
		hamBurger.style.display = 'block';
	}else if(hamBurger.style.display === 'block'){
		hamBurger.style.display = "";
	}
});


	for(let i = 0; i< iconContainer.length; i++){
		iconContainer[i].addEventListener('click', event =>{
				console.log(innerList[i]);
				if(innerList[i].style.display === "block"){
					console.log('here');
					innerList[i].style.display = "none";
					pgFirstRow[i].style.marginBottom = "0px";

				}else{
					console.log('herealso')
					innerList[i].style.display = "block";
					pgFirstRow[i].style.marginBottom = "15px";
				}
		});
	}