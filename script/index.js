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
const MenuBox = document.querySelector('.header');
const MenuBoxNav = MenuBox.querySelector('nav');
const MenuBoxList = MenuBox.querySelectorAll('li');
const MenuOpen = document.querySelector('header > button');
const SHOW = 'show';

MenuOpen.addEventListener('click', () => {
    MenuBox.classList.toggle(SHOW);
    modalBg.classList.remove(BLOCK);
    document.body.style.overflow = 'auto';
});

MenuBox.addEventListener('click', (e) => {
    if (!MenuBoxNav.contains(e.target)) {
        MenuBox.classList.remove(SHOW);
    }
});

MenuBoxList.forEach((e) => {
    e.addEventListener('click', () => {
            MenuBox.classList.remove(SHOW);
    });
});

// 클릭 이벤트 -> skills 열기
const sectionProfile = document.getElementById('profile');
const modalBg = sectionProfile.querySelector('.skills-modal');
const skillsBox = sectionProfile.querySelector('.skills-contents');
const skillsOpen = document.querySelector('.skillsOpen')
const BLOCK = 'block';

skillsOpen.addEventListener('click', () => {
            modalBg.classList.add(BLOCK);
            document.body.style.overflow = 'hidden';
        });

const skillsClose = document.querySelector('.skills-close')
        .addEventListener('click', () => {
            modalBg.classList.remove(BLOCK);
            document.body.style.overflow = 'auto';
        });

modalBg.addEventListener('click', (e) => {
            if (!skillsBox.contains(e.target)) {
                modalBg.classList.remove(BLOCK);
                document.body.style.overflow = 'auto';
            }
        });


// skills 모션 변경
let motionImage = document.querySelector('.skills-inner-rt dt');
const MOTION_NORMAL = 'changeMotion-normal';
const MOTION_DASH = 'changeMotion-dash';
const MOTION_DANCE = 'changeMotion-dance';

// normal
 document.querySelector('.motions > button:nth-of-type(1)')
         .addEventListener('click', () => {
             motionImage.classList.remove(MOTION_DASH);
             motionImage.classList.remove(MOTION_DANCE);

             motionImage.classList.add(MOTION_NORMAL);
 });
// Dash
document.querySelector('.motions > button:nth-of-type(2)')
        .addEventListener('click', () => {
            motionImage.classList.remove(MOTION_NORMAL);
            motionImage.classList.remove(MOTION_DANCE);

            motionImage.classList.add(MOTION_DASH);
});
// Dance
document.querySelector('.motions > button:nth-of-type(3)')
        .addEventListener('click', () => {
            motionImage.classList.remove(MOTION_NORMAL);
            motionImage.classList.remove(MOTION_DASH);
            
            motionImage.classList.add(MOTION_DANCE);
});

