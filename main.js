function openMenu() {
		document.querySelector('#toggle-btn').classList.toggle('active');

		document.querySelector('#sidebar').classList.toggle('active');
		document.querySelector('#social-links').classList.toggle('new');
		document.body.style.backgroundImage = "linear-gradient(rgb(0 0 0 / 20%), rgb(0 0 0 20%))";

	}

	let card1 = document.querySelector('#card1');
	let card2 = document.querySelector('#card2');
	let card3 = document.querySelector('#card3');
	let card4 = document.querySelector('#card4');
	let card5 = document.querySelector('#card5');
	let card6 = document.querySelector('#card6');
	let card7 = document.querySelector('#card7');
	let card8 = document.querySelector('#card8');
	let card9 = document.querySelector('#card9');
	let card10 = document.querySelector('#card10');
	let card11 = document.querySelector('#card11');


		card1.addEventListener('click', function() {
			console.log('hello');
			card2.style.transform = "translate(250px,0px)";
			card3.style.transform = "translate(-650px, 0px)";
			card4.style.transform = "translate(-650px , -300px)";
			card5.style.transform = "translate(250px , -300px)";
			card1.style.display = "none";
			
		});
	
