// NAVIGATION MENU

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
	nav.hasAttribute('data-visible')
		? nav.setAttribute('aria-expanded', false)
		: nav.setAttribute('aria-expanded', true);
	nav.toggleAttribute('data-visible');
});
