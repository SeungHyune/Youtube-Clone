import '../css/main.scss';

const $headerRight = document.querySelector('.header-right');
$headerRight.addEventListener('click', e => {
    const { target } = e;
    const parentDiv = target.closest('.toggle');
    const section = target.closest('section');
    if(section) return;
    
    const $createVideo = document.querySelector('.create-video');
    const $notice = document.querySelector('.notice');
    const $profile = document.querySelector('.profile');
    
    const parentDivAll = parentDiv.className.split(' ');
    console.log(parentDivAll);
    if(parentDivAll.includes('create-video')) {
        $notice.classList.remove('on');
        $profile.classList.remove('on');
    } else if(parentDivAll.includes('notice')) {
        $createVideo.classList.remove('on');
        $profile.classList.remove('on');
    } else if(parentDivAll.includes('profile')) {
        $createVideo.classList.remove('on');
        $notice.classList.remove('on');
    }
    parentDiv.classList.toggle('on');
})

const $headerLeft = document.querySelector('.header-left');
const $wrapper = document.querySelector('.wrapper');
$headerLeft.addEventListener('click', (e) => {
    const { target } = e;
    
    const $button = target.closest('.nav-btn');
    const $navWrapper = target.closest('.nav-wrapper');
   
    // nav 메뉴가 열렸을 때 메뉴가 아닌 곳 클릭 시 닫히도록 설정
    console.log($navWrapper)
    if(window.innerWidth <= 1312 && $navWrapper == null) {
        $wrapper.classList.remove('on');
    }

    // nav 버튼 클릭 시 메뉴를 열거나 닫히도록 설정
    if($button) {
        $wrapper.classList.toggle('on');
    }
})