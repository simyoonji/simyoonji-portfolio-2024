const main = document.querySelector('#main');
const profile = document.querySelector('#profile');
const profileLeft = profile.querySelector('.profile-about ul');
const profileTop = profile.querySelector('.profile-txt-top');
const profileBt = profile.querySelector('.profile-txt-bottom');

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