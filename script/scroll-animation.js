// profile area
const profile = document.querySelector('#profile');
const profileLeft = profile.querySelector('.profile-about ul');
const profileTop = profile.querySelector('.profile-txt-top');
const profileBt = profile.querySelector('.profile-txt-bottom');

gsap.to(profileLeft, {
	duration: 1,
	opacity : 1,
    x : 0,

	scrollTrigger: {
		trigger : profile
	}
});

gsap.to(profileTop, {
    delay : .5,
	duration: 1,
	opacity : 1,
    x : 0,

	scrollTrigger: {
		trigger : profile
	}
});

gsap.to(profileBt, {
    delay : 1,
	duration: 1,
	opacity : 1,
    x : 0,

	scrollTrigger: {
		trigger : profile
	}
});

const contact = document.querySelector('#contact');
const contactTxtLeft = contact.querySelector('ul li:nth-of-type(1)');
const contactTxtRight = contact.querySelector('ul li:nth-of-type(2)');

gsap.to(contactTxtLeft, {
	duration: 2,
	opacity : 1,
    x : 0,

	scrollTrigger: {
		trigger : contact
	}
});

gsap.to(contactTxtRight, {
	duration: 2,
	opacity : 1,
    x : 0,

	scrollTrigger: {
		trigger : contact
	}
});