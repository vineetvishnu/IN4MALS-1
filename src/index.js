	var bars = document.getElementById("nav-action");
	var nav = document.getElementById("nav");


	//setting up the listener
	bars.addEventListener("click", barClicked, false);


	//setting up the clicked Effect
	function barClicked() {
		bars.classList.toggle('active');
		nav.classList.toggle('visible');
	}

  //setting up departments card shuffle effect
  let cards = [].slice.call(document.querySelectorAll('.card'));
  let cardW = document.querySelector('#cardW');
  
	//setting up the clicked Effect
  cardW.addEventListener('click', function () {
  	cards.forEach(function (card) {
  		card.classList.add('transformed')
  	});
  	cardW.classList.add('hidden');

  });
