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
let hero = document.querySelector('.hero');
let herolook = document.querySelector('.inrodaction__second-section_hero img');
let stopRand = true;
let paper = document.querySelector('.paper');
let count = 0;
let health = 3;
let papers = paper.cloneNode(true);

// navigation 
if (window.matchMedia("screen and (min-aspect-ratio:1/1)").matches) {
    const navMenuList = document.querySelector('.nav__menu-list');
    navMenuList.style.top = (window.innerHeight - navMenuList.offsetHeight) / 2 + 'px';
    navMenuList.style.left = (window.innerWidth - navMenuList.offsetWidth) / 5 + 'px';

    const navFullscreenPic = document.querySelector('.nav__fullscreen_pic img');
    navFullscreenPic.style.top = navMenuList.style.top;
    navFullscreenPic.style.right = navMenuList.style.left;
}

//first slide

document.querySelector('.inrodaction__first-section_fullscreen-button').addEventListener('click', toggleScreen);

function toggleScreen() {
    if (document.fullscreenElement === null) {
        document.documentElement.requestFullscreen();
    }
}

//Second slide

let buttonStart = document.querySelector('.inrodaction__first-section_start-button');
buttonStart.onclick = () => {

    let herolookRed = document.querySelector('.look_red');
    let herolookBlue = document.querySelector('.look_blue');
    let herolookLightBlue = document.querySelector('.look_light-blue');
    let herolookYellow = document.querySelector('.look_yellow');
    let herolookGreen = document.querySelector('.look_green');
    let herolookBlack = document.querySelector('.look_black');

    let gameIntro = document.querySelector('.inrodaction__first-section');
    gameIntro.classList.add('inactive');

    if (window.matchMedia("screen and (min-aspect-ratio:1/1)").matches) {
        let gameHero = document.querySelector('.inrodaction__second-section_hero img');
        gameHero.style.transform = 'translate(0,0)';
    }


    let gameMenu = document.querySelector('.inrodaction__second-section');
    gameMenu.style.visibility = 'visible';
    gameMenu.style.opacity = '1';


    let gameMenuForm = document.querySelector('.inrodaction__second-section_form');
    gameMenuForm.style.transform = 'translate(0,0)';

    //sex selector
    document.querySelector('.inrodaction__second-section_button_m').addEventListener('click', male);
    function male(event) {
        event.preventDefault();
        herolook.src = 'img/hero_looks/hero_red_boy.PNG';
        herolook.classList.add('male');
        herolook.classList.remove('female');
    }
    document.querySelector('.inrodaction__second-section_button_f').addEventListener('click', female);
    function female(event) {
        event.preventDefault();
        herolook.src = 'img/hero_looks/hero_red_girl.PNG';
        herolook.classList.add('female');
        herolook.classList.remove('male');
    }

    //click looks
    document.querySelector('.introdaction__second-section_look').addEventListener('click', look);
    function look(event) {
        if ((herolook.classList.contains('male')) || (herolook.classList.contains('male') == false && herolook.classList.contains('female') == false)) {
            (event.target == herolookRed) ? (herolook.src = 'img/hero_looks/hero_red_boy.PNG') :
                (event.target == herolookBlue) ? (herolook.src = 'img/hero_looks/hero_blue_boy.PNG') :
                    (event.target == herolookLightBlue) ? (herolook.src = 'img/hero_looks/hero_light-blue_boy.PNG') :
                        (event.target == herolookYellow) ? (herolook.src = 'img/hero_looks/hero_yellow_boy.PNG') :
                            (event.target == herolookGreen) ? (herolook.src = 'img/hero_looks/hero_green_boy.PNG') :
                                (event.target == herolookBlack) ? (herolook.src = 'img/hero_looks/hero_black_boy.PNG') :
                                    false;
        }
        else if (herolook.classList.contains('female')) {
            (event.target == herolookRed) ? (herolook.src = 'img/hero_looks/hero_red_girl.PNG') :
                (event.target == herolookBlue) ? (herolook.src = 'img/hero_looks/hero_blue_girl.PNG') :
                    (event.target == herolookLightBlue) ? (herolook.src = 'img/hero_looks/hero_light-blue_girl.PNG') :
                        (event.target == herolookYellow) ? (herolook.src = 'img/hero_looks/hero_yellow_girl.PNG') :
                            (event.target == herolookGreen) ? (herolook.src = 'img/hero_looks/hero_green_girl.PNG') :
                                (event.target == herolookBlack) ? (herolook.src = 'img/hero_looks/hero_black_girl.PNG') :
                                    false;
        }
    }

    //drag&drop looks
    let looks = document.querySelector('.introdaction__second-section_look');
    let a = 1;

    herolook.ondragover = event => {
        event.preventDefault();
    }
    looks.ondragstart = event => {
        herolook.style.border = '0.4vh solid #f76c6c';
        a = event.target;
    }
    looks.ondragend = event => {
        herolook.style.border = '0px';
    }

    herolook.ondrop = (event) => {
        if ((herolook.classList.contains('male')) || (herolook.classList.contains('male') == false && herolook.classList.contains('female') == false)) {
            (a == herolookRed) ? (herolook.src = 'img/hero_looks/hero_red_boy.PNG') :
                (a == herolookBlue) ? (herolook.src = 'img/hero_looks/hero_blue_boy.PNG') :
                    (a == herolookLightBlue) ? (herolook.src = 'img/hero_looks/hero_light-blue_boy.PNG') :
                        (a == herolookYellow) ? (herolook.src = 'img/hero_looks/hero_yellow_boy.PNG') :
                            (a == herolookGreen) ? (herolook.src = 'img/hero_looks/hero_green_boy.PNG') :
                                (a == herolookBlack) ? (herolook.src = 'img/hero_looks/hero_black_boy.PNG') :
                                    false;
        }

        else if (herolook.classList.contains('female')) {
            (a == herolookRed) ? (herolook.src = 'img/hero_looks/hero_red_girl.PNG') :
                (a == herolookBlue) ? (herolook.src = 'img/hero_looks/hero_blue_girl.PNG') :
                    (a == herolookLightBlue) ? (herolook.src = 'img/hero_looks/hero_light-blue_girl.PNG') :
                        (a == herolookYellow) ? (herolook.src = 'img/hero_looks/hero_yellow_girl.PNG') :
                            (a == herolookGreen) ? (herolook.src = 'img/hero_looks/hero_green_girl.PNG') :
                                (a == herolookBlack) ? (herolook.src = 'img/hero_looks/hero_black_girl.PNG') :
                                    false;
        }
    }



}


//Third slide

let buttonLetsGo = document.querySelector('.inrodaction__second-section_button_go');
buttonLetsGo.onclick = (event) => {
    event.preventDefault();
    name = document.querySelector('.inrodaction__second-section input').value;

    let gameMenu = document.querySelector('.inrodaction__second-section');
    gameMenu.style.visibility = 'hidden';
    gameMenu.style.opacity = '0';
    gameMenu.style.display = 'none';

    let introductionHello = document.querySelector('.inrodaction__third-section p');
    introductionHello.textContent = 'Hi, ' + name + '!';

    let introduction = document.querySelector('.inrodaction__third-section');
    introduction.style.visibility = 'visible';
    introduction.style.opacity = '1';

    let introThirdText = document.querySelector('.inrodaction__third-section_text');
    introThirdText.style.transform = 'translate(0,0)';

    let introThirdButton = document.querySelector('.inrodaction__third-section button');
    introThirdButton.style.transform = 'translate(0,0)';

    let herolookgame = document.querySelector('.hero img');
    herolookgame.src = herolook.src;
}


//fourth slide

let buttonStart2 = document.querySelector('.inrodaction__third-section button');
buttonStart2.onclick = () => {

    //page-refresh
    let gameIntrodaction = document.querySelector('.game__introdaction');
    gameIntrodaction.style.display = 'none';

    let gameProcess = document.querySelector('.game__process');
    gameProcess.style.display = 'block';

    //game process
    barName.textContent = name;
    barHealth1.style.display = 'block';
    barHealth2.style.display = 'block';
    barHealth3.style.display = 'block';

    heroMove();
    setInterval(rand, 700);

    repeatButton.onclick = () => {
        gameOverWindow.style.display = 'none';
        gameOverWindowScore.innerHTML = 'Your score:';
        stopRand = true;
    }

    homeButton.onclick = () => {
        document.location = 'index.html';
    }
}

function heroMove() {
    if (window.matchMedia("screen and (min-aspect-ratio:1/1)").matches) {
        window.addEventListener('mousemove', heroMove);
        function heroMove(e) {
            if ((e.pageX < ((0.9 * window.innerWidth) - (1.1 * hero.offsetWidth))) && (e.pageX > (0.1 * window.innerWidth))) {
                hero.style.left = e.pageX - (0.1 * window.innerWidth) + 'px';
            }
        }
    }
    else {
        window.addEventListener('touchmove', heroMove);
        function heroMove(e) {
            touchPosition = { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
            hero.style.left = touchPosition.x - (0.1 * window.innerWidth) + 'px';
        }

    }
}

function rand() {
    if (!stopRand) return false;
    let papers = paper.cloneNode(true);
    papers.style.left = Math.random() * 75 + 'vw';
    papers.style.opacity = 1;
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


