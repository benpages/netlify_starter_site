const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-list');

toggle.addEventListener('click', function () {
	links.classList.toggle('show-nav-list');
});
