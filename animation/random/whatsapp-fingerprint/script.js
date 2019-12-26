const $ = document.querySelector.bind(document);
const $c = document.getElementsByClassName.bind(document);
const addClass = (el, className) => el.classList.add(className);
const removeClass = (el, className) => el.classList.remove(className);
let status = 'locked';

const container = $('#container');
const oval = $('#Oval');
const check = $('#check');
const text = $('#text');

const fingerprintPath1 = $c('pathType1');
const fingerprintPath2 = $c('pathType2');

const animateText = () => {
	addClass(text, 'animate-text');
	setTimeout(() => {
		removeClass(text, 'animate-text');
	}, 500);
};

const addClasses = () => {
	addClass(oval, 'animate-oval');
	addClass(check, 'animate-check');
	[...fingerprintPath1].forEach(path => addClass(path, 'animate-path'));
	[...fingerprintPath2].forEach(path => addClass(path, 'animate-path-delay'));
	container.style.cursor = 'auto';

	animateText();
	setTimeout(() => {
		text.innerText = 'Press here to lock';
		text.style.cursor = 'pointer';
	}, 250);

	status = 'unlocked';
};

const removeClasses = () => {
	removeClass(oval, 'animate-oval');
	removeClass(check, 'animate-check');
	[...fingerprintPath1].forEach(path => removeClass(path, 'animate-path'));
	[...fingerprintPath2].forEach(path => removeClass(path, 'animate-path-delay'));
	container.style.cursor = 'pointer';

	animateText();
	setTimeout(() => {
		text.innerText = 'Touch the fingerprint sensor to unlock';
		text.style.cursor = 'auto';
	}, 250);

	status = 'locked';
};

container.addEventListener('click', () => {
	if (status === 'locked') addClasses();
});

text.addEventListener('click', () => {
	if (status === 'unlocked') removeClasses();
});
