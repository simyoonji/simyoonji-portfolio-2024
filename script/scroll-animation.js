const main = document.querySelector('#main');
const title = document.querySelector('.title');
const profile = document.querySelector('#profile');
const profileLeft = profile.querySelector('.profile-about ul');
const profileTop = profile.querySelector('.profile-txt-top');
const profileBt = profile.querySelector('.profile-txt-bottom');

gsap.to(title, {
	duration: 1,
	opacity : 1,

	scrollTrigger: {
		trigger : main,
	}
});

gsap.to(profileLeft, {
	duration: 1,
	opacity : 1,
    x : 0,

	scrollTrigger: {
		trigger : profile,
	}
});

gsap.to(profileTop, {
    delay : .5,
	duration: 1,
	opacity : 1,
    x : 0,

	scrollTrigger: {
		trigger : profile,
	}
});

gsap.to(profileBt, {
    delay : 1,
	duration: 1,
	opacity : 1,
    x : 0,

	scrollTrigger: {
		trigger : profile,
	}
});