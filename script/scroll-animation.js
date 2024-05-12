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

/* project area */
const project = document.querySelector('.team-project-inner');
const projectList = project.querySelectorAll('.team-project-slide img'); 
const projectImgsArray = Array.from(projectList); // NodeList를 배열로 변환
// 유사한 배열의 객체와, 반복 가능한 객체를 배열로 반환한다. 객체를 배열로 바꾼다.

projectImgsArray.forEach((img) => {
	// forEach문을 통해 각각의 img를 전달
  gsap.to(img, {
    opacity: 1,
    y: 0,

	// 각각의 이미지들을 트리거로 설정한다.
    scrollTrigger: {
      trigger: img, 
    },
  });
});

/* script */
const script = document.querySelector('.script');
const scriptListLeft = script.querySelector('li:nth-of-type(1)');
const scriptListMiddle = script.querySelector('li:nth-of-type(2)');
const scriptListRight = script.querySelector('li:nth-of-type(3)');

gsap.to(scriptListLeft, {
    duration: 0.5,
    opacity: 1,
    y: 0,
    scrollTrigger: {
        trigger: script
    }
});
gsap.to(scriptListMiddle, {
    duration: 1,
    opacity: 1,
    y: 0,
    scrollTrigger: {
        trigger: script
    }
});
gsap.to(scriptListRight, {
    duration: 1.5,
    opacity: 1,
    y: 0,
    scrollTrigger: {
        trigger: script
    }
});

/* contact area */
const contact = document.querySelector('#contact');
const contactTxtLeft = contact.querySelector('ul li:nth-of-type(1)');
const contactTxtRight = contact.querySelector('ul li:nth-of-type(2)');

gsap.to(contactTxtLeft, {
	opacity : 1,
    x : 0,

	scrollTrigger: {
		trigger : contact
	}
});

gsap.to(contactTxtRight, {
	opacity : 1,
    x : 0,

	scrollTrigger: {
		trigger : contact
	}
});