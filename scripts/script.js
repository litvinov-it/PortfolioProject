const menuBtn =  document.querySelector('.nav__icon');
const menu =  document.querySelector('.nav__list');

if (menuBtn && menu) {
	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
	})
	menu.querySelectorAll('.nav__link').forEach(link => {
		link.addEventListener('click', () => {
			menuBtn.classList.toggle('active');
			menu.classList.toggle('active');
		})
	})
}

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
	anchor.addEventListener('click', (e) => {
		const blockId = anchor.getAttribute('href').replace('#', '');
		document.getElementById(blockId).scrollIntoView({
			behavior: "smooth",
			block: 'start'
		})
		e.preventDefault();
	})
})

const createSelectedSection = (root) => {
	const nav = root.querySelector('.nav');

	root.querySelectorAll('.observe').forEach((section) => {
		new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					nav.querySelectorAll('.nav__item').forEach(item => {
						item.classList.remove('active');
					})
					const id = entry.target.getAttribute('id');
					nav.querySelector(`a[href="#${id}"]`).closest('.nav__item').classList.add('active');
				}
			})
		}, {}).observe(section);
	})
}

createSelectedSection(document.querySelector('#page'));