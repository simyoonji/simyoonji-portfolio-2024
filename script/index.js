const mouse = document.querySelector('.mouse');
const buttonAll = document.querySelectorAll('button');
const aAll = document.querySelectorAll('a');
const MOUSE_FOCUS = 'mouseFocus';

// mouse 
window.addEventListener('mousemove',(event) => {
    mouse.style.left = `${event.clientX}px` 
    mouse.style.top = `${event.clientY}px` 
});

buttonAll.forEach((item) => {
    item.addEventListener('mouseover', () => {
         mouse.classList.add(MOUSE_FOCUS);
    });
    item.addEventListener('mouseout', () => {
          mouse.classList.remove(MOUSE_FOCUS);
    });
});

aAll.forEach((item) => {
    item.addEventListener('mouseover', () => {
         mouse.classList.add(MOUSE_FOCUS);
    });
    item.addEventListener('mouseout', () => {
          mouse.classList.remove(MOUSE_FOCUS);
    });
});

// menu
const headerMenuBox = document.querySelector('.header');
const headerMenuBoxNav = headerMenuBox.querySelector('nav');
const headerMenuList = headerMenuBox.querySelectorAll('li');
const headerMenuBtn = document.querySelector('header > button');
const headerMenuBtnText = headerMenuBtn.querySelector('span');
const SHOW = 'show';

headerMenuBtn.addEventListener('click', () => {
    headerMenuBox.classList.toggle(SHOW);

    if (headerMenuBox.classList.contains(SHOW)) {
        headerMenuBtnText.innerText = 'close';
    } else {
        headerMenuBtnText.innerText = 'menu'; 
    }
});

headerMenuBox.addEventListener('click', (e) => {
    if (!headerMenuBoxNav.contains(e.target)) {
        headerMenuBox.classList.remove(SHOW);
        headerMenuBtnText.innerText = 'menu'; 
    }
});

headerMenuList.forEach((e) => {
    e.addEventListener('click', () => {
            headerMenuBox.classList.remove(SHOW);
            headerMenuBtnText.innerText = 'menu'; 
    });
});

// 클릭 이벤트 -> skills 열기
const sectionProfile = document.getElementById('profile');
const skillsBox = sectionProfile.querySelector('.profile-skills');
const modalBg = sectionProfile.querySelector('.profile-modal-bg');
const skillsOpen = document.querySelector('.skillsOpen')

skillsOpen.addEventListener('click', () => {
            modalBg.style.display = 'block';
            skillsBox.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

// const skillsClose = document.querySelector('.skillsClose')
//         .addEventListener('click', () => {
//             modalBg.style.display = 'none';
//             skillsBox.style.display = 'none';
//             document.body.style.overflow = 'auto';
//         });

modalBg.addEventListener('click', () => {
            modalBg.style.display = 'none';
            skillsBox.style.display = 'none';
            document.body.style.overflow = 'auto';
        });


// // skills 모션 변경
// let motionImage = document.querySelector('.skills-right dt');
// const MOTION_NORMAL = 'changeMotion-normal';
// const MOTION_DASH = 'changeMotion-dash';
// const MOTION_DANCE = 'changeMotion-dance';

// // normal
// document.querySelector('.motions > button:nth-of-type(1)')
//         .addEventListener('click', () => {
//             motionImage.classList.remove(MOTION_DASH);
//             motionImage.classList.remove(MOTION_DANCE);
//             motionImage.classList.add(MOTION_NORMAL);
// });
// // Dash
// document.querySelector('.motions > button:nth-of-type(2)')
//         .addEventListener('click', () => {
//             motionImage.classList.remove(MOTION_NORMAL);
//             motionImage.classList.remove(MOTION_DANCE);
//             motionImage.classList.add(MOTION_DASH);
// });
// // Dance
// document.querySelector('.motions > button:nth-of-type(3)')
//         .addEventListener('click', () => {
//             motionImage.classList.remove(MOTION_NORMAL);
//             motionImage.classList.remove(MOTION_DASH);
//             motionImage.classList.add(MOTION_DANCE);
// });