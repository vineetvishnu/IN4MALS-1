function openMenu() {
		document.querySelector('#toggle-btn').classList.toggle('active');

		document.querySelector('#sidebar').classList.toggle('active');
		document.querySelector('#social-links').classList.toggle('new');
		document.body.style.backgroundImage = "linear-gradient(rgb(0 0 0 / 20%), rgb(0 0 0 20%))";

	}
let cards = [].slice.call(document.querySelectorAll('.card'));
let cardW = document.querySelector('#cardW');

cardW.addEventListener('click', function() {
    cards.forEach(function(card){card.classList.add('transformed')});
    cardW.classList.add('hidden');

});
