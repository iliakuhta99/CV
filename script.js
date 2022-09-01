const animItems = document.querySelectorAll('.anim_items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(parms) {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
        
        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
        } else {
            animItem.classList.remove('active')
        }
    }  
    }
    setTimeout(() => {
        animOnScroll();
    }, 300)
}

function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top:rect.top + scrollTop, left: rect.left + scrollLeft}
}


//positions of elements sdsfj

const sectionRightOne = document.querySelector('.section__right_one');
sectionRightOne.style.top = (window.innerHeight - sectionRightOne.offsetHeight)/2 +'px';

const sectionRightTwo = document.querySelector('.section__right_two');
sectionRightTwo.style.top = (window.innerHeight - sectionRightTwo.offsetHeight)/2 + window.innerHeight +'px';

const sectionRightThree = document.querySelector('.section__right_three');
sectionRightThree.style.top = (window.innerHeight - sectionRightThree.offsetHeight)/2 + 2*window.innerHeight +'px';

const sectionRightFour = document.querySelector('.section__right_four');
sectionRightFour.style.top = (window.innerHeight - sectionRightFour.offsetHeight)/2 + 3*window.innerHeight +'px';

const headerScroll = document.querySelector('#welc_scroll_img');
headerScroll.style.left = (window.innerWidth)/2 - 180 +'px';
headerScroll.style.top = window.innerHeight -280 +'px';

const navMenuList = document.querySelector('.nav__menu-list');
navMenuList.style.top = (window.innerHeight - navMenuList.offsetHeight)/2 +'px';
navMenuList.style.left = (window.innerWidth - navMenuList.offsetWidth)/5 +'px';

const navFullscreenPic = document.querySelector('.nav__fullscreen_pic img');
navFullscreenPic.style.top = navMenuList.style.top;
navFullscreenPic.style.right = navMenuList.style.left;

const headerSecondaryText = document.querySelector('.header__secondary-text');
headerSecondaryText.style.paddingBottom = (window.innerHeight - headerSecondaryText.offsetHeight)/2 +'px';
headerSecondaryText.style.paddingTop = '50vh';


const section = document.querySelector('.section');
const header = document.querySelector('.header');

window.addEventListener('scroll', function(){
    if ((window.pageYOffset > (header.offsetHeight -70))&&(window.pageYOffset < (header.offsetHeight + section.offsetHeight - 70)) ) {
        document.getElementById("home").src="img/png/home_red.png";
        document.getElementById("menu").src="img/png/menu_red.png";
    } else {
        document.getElementById("home").src="img/png/home.png";
        document.getElementById("menu").src="img/png/menu.png";
    }
})




