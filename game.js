//
let name;
let barName = document.querySelector('.game__process_bar-name');
let barPoints = document.querySelector('.game__process_bar-points p');
let barHealth3 = document.querySelector('.game__process_bar-health-3');
let barHealth2 = document.querySelector('.game__process_bar-health-2');
let barHealth1 = document.querySelector('.game__process_bar-health-1');
let gameOverWindow = document.querySelector('.game__over');
let gameOverWindowScore = document.querySelector('.game__over_window p');
let repeatButton = document.querySelector('.game__over button');
let homeButton = document.querySelector('.home');

//
const navMenuList = document.querySelector('.nav__menu-list');
navMenuList.style.top = (window.innerHeight - navMenuList.offsetHeight) / 2 + 'px';
navMenuList.style.left = (window.innerWidth - navMenuList.offsetWidth) / 5 + 'px';

const navFullscreenPic = document.querySelector('.nav__fullscreen_pic img');
navFullscreenPic.style.top = navMenuList.style.top;
navFullscreenPic.style.right = navMenuList.style.left;



//Second slide

let buttonStart = document.querySelector('.inrodaction__first-section_start-button');
buttonStart.onclick = () => {
    let gameIntro = document.querySelector('.inrodaction__first-section');
    gameIntro.classList.add('inactive');

    let gameHero = document.querySelector('.inrodaction__second-section_hero');
    gameHero.style.transform = 'translate(0,0)';


    let gameMenu = document.querySelector('.inrodaction__second-section');
    gameMenu.style.visibility = 'visible';
    gameMenu.style.opacity = '1';


    let gameMenuForm = document.querySelector('.inrodaction__second-section_form');
    gameMenuForm.style.transform = 'translate(0,0)';

}


//Third slide

let buttonLetsGo = document.querySelector('.inrodaction__second-section button');
buttonLetsGo.onclick = (event) => {
    event.preventDefault();
    name = document.querySelector('.inrodaction__second-section input').value;

    let gameMenu = document.querySelector('.inrodaction__second-section');
    gameMenu.style.visibility = 'hidden';
    gameMenu.style.opacity = '0';
    gameMenu.style.display = 'none';

    let introductionHello = document.querySelector('.inrodaction__third-section p');
    introductionHello.innerHTML = 'Hi, ' + name + '!';

    let introduction = document.querySelector('.inrodaction__third-section');
    introduction.style.visibility = 'visible';
    introduction.style.opacity = '1';

    let introThirdText = document.querySelector('.inrodaction__third-section_text');
    introThirdText.style.transform = 'translate(0,0)';

    let introThirdButton = document.querySelector('.inrodaction__third-section button');
    introThirdButton.style.transform = 'translate(0,0)';
}


//fourth slide

let buttonStart2 = document.querySelector('.inrodaction__third-section button');
buttonStart2.onclick = () => {

    let gameIntrodaction = document.querySelector('.game__introdaction');
    gameIntrodaction.style.visibility = 'hidden';
    gameIntrodaction.style.display = 'none';
    let gameProcess = document.querySelector('.game__process');
    gameProcess.style.display = 'block';
    barName.innerHTML = name;


    window.addEventListener('mousemove', heroMove);
    let hero = document.querySelector('.hero');
    function heroMove(e) {
        hero.style.left = e.pageX + 'px';
    }

    let paper = document.querySelector('.paper');
    let count = 0;
    let health = 3;

    let stopRand = true;

    myInterval = setInterval(rand, 700);
    function rand() {

        if (!stopRand) return false;

        let papers = paper.cloneNode(true);
        papers.style.left = Math.random() * 75 + 'vw';
        paper.before(papers);

        setTimeout(function () {
            let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue('left'));
            let paperTop = parseInt(window.getComputedStyle(papers).getPropertyValue('left'));
            papers.remove();

            if (((heroTop - paperTop) <= 40) && ((heroTop - paperTop) >= -40)) {
                count++;
                barPoints.innerHTML = count;
            }
            else {
                health--;
                barHealthMinus();
            }

            if (health == 0) {
                stopRand = false;
                gameOverWindow.style.display = 'block';
                gameOverWindowScore.innerHTML = 'Your score: ' + count;
                setTimeout(function () {
                    health = 3;
                    count = 0;
                    clearTimeout();
                    clearInterval();
                    barPoints.innerHTML = count;
                    barHealth1.style.display = 'block';
                    barHealth2.style.display = 'block';
                    barHealth3.style.display = 'block';


                }, 2500)
            }
        }, 2200);

    }

    repeatButton.onclick = () => {
        gameOverWindow.style.display = 'none';
        gameOverWindowScore.innerHTML = 'Your score:';
        stopRand = true;
    }

    homeButton.onclick = () => {
        document.location = 'index.html';
    }

}

function barHealthMinus() {
    if (barHealth1.style.display == 'block' && barHealth2.style.display == 'block' && barHealth3.style.display == 'block') {
        barHealth1.style.display = 'none';
    }
    else if (barHealth1.style.display == 'none' && barHealth2.style.display == 'block' && barHealth3.style.display == 'block') {
        barHealth2.style.display = 'none';
    } else {
        barHealth3.style.display = 'none';
    }

}



