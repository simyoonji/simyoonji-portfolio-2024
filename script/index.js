// loading
window.addEventListener('load', () => {
    var loading = document.querySelector('.loading');
    loading.style.display = 'none';
});

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

// 클릭 이벤트 -> ability 열기
const sectionProfile = document.getElementById('profile');
const modalBg = sectionProfile.querySelector('.ability-modal');
const abilityBox = sectionProfile.querySelector('.ability-contents');
const abilityOpen = document.querySelector('.abilityOpen')
const BLOCK = 'block';

abilityOpen.addEventListener('click', () => {
            modalBg.classList.add(BLOCK);
        });

const abilityClose = document.querySelector('.ability-close')
        .addEventListener('click', () => {
            modalBg.classList.remove(BLOCK);
        });

modalBg.addEventListener('click', (e) => {
            if (!abilityBox.contains(e.target)) {
                modalBg.classList.remove(BLOCK);
            }
        });