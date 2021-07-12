function openMenu() {
		document.querySelector('#toggle-btn').classList.toggle('active');

		document.querySelector('#sidebar').classList.toggle('active');
		document.querySelector('#social-links').classList.toggle('new');
		document.body.style.backgroundImage = "linear-gradient(rgb(0 0 0 / 20%), rgb(0 0 0 20%))";

	}
//Department cards animation
	let card1 = document.querySelector('#card1');
	let card2 = document.querySelector('#card2');
	let card3 = document.querySelector('#card3');
	let card4 = document.querySelector('#card4');
	let card5 = document.querySelector('#card5');
	let card6 = document.querySelector('#card6');
	let card7 = document.querySelector('#card7');
	let card8 = document.querySelector('#card8');

	let cardL = document.querySelector('#cardL');
	let cardW = document.querySelector('#cardW');



	cardW.addEventListener('click', function() {
		card1.style.transform = "translate(350px,0px)";
		card2.style.transform = "translate(-350px, 0px)";
		card3.style.transform = "translate(350px , 300px)";
		card4.style.transform = "translate(-350px , -300px)";
		card5.style.transform = "translate(-350px , 300px)";
		card6.style.transform = "translate(350px , -300px)";
		card7.style.transform = "translate(0px , -300px)";
		card8.style.transform = "translate(0px , 300px)";
		cardW.style.opacity = "0";

	});
