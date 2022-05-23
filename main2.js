const stage = document.createElement('stage');
document.body.appendChild(stage);
const level = document.getElementById('level');
level.innerText = "LEVEL1";
level.style.display = "none";
const level2 = document.getElementById('level1');
level2.innerText = "LEVEL2";
level2.style.display = "none";
const level3 = document.getElementById('level2');
level3.innerText = "LEVEL3";
level3.style.display = "none";
const final = document.getElementById('level3');
final.innerText = "FINAL";
final.style.display = "none";
const clear = document.getElementById('clear');
clear.innerText = "CLEARED";
clear.style.display = "none";
let deletemae = 3;
let deletemae1 = 3;
let deletemae2 = 3;
let timer;
let deletetimer;
let deletetimer2;
let countdownSE = new Audio("countdownBGM.mp3");
let sinkaiBGM = new Audio('水中.mp3');
let soraBGM = new Audio('飛行船.mp3');
let spaceBGM = new Audio('宇宙.mp3');
let finalBGM = new Audio('finalBGM.mp3');
let clearBGM = new Audio('clearBGM.mp3');
let answer2 = document.getElementById('answer2').style.display = "none";
let answer3 = document.getElementById('answer3').style.display = "none";
let answer4 = document.getElementById('answer4').style.display = "none";
let answer5 = document.getElementById('answer5').style.display = "none";
let answer6 = document.getElementById('answer6').style.display = "none";
let answer7 = document.getElementById('answer7').style.display = "none";
let answer8 = document.getElementById('answer8').style.display = "none";
let answer9 = document.getElementById('answer9').style.display = "none";
let answer10 = document.getElementById('answer10').style.display = "none";
let maru1 = document.getElementById("maru1");
let maru2 = document.getElementById("maru2");
let maru3 = document.getElementById("maru3");
let maru4 = document.getElementById("maru4");
let maru5 = document.getElementById("maru5");
let maru6 = document.getElementById("maru6");
let maru7 = document.getElementById("maru7");
let maru8 = document.getElementById("maru8");
let maru9 = document.getElementById("maru9");
let maru10 = document.getElementById("maru10");
let mondai = document.getElementById("mondai");
mondai.style.display = "none";
let countdown = document.getElementById('countdown');
countdown.style.display = "none";
let seikaisu = 0;
let seigenjikan = 15;
let timer1;
let timerjunbi;
let timer2;
let timer3;
let timer4;
let timer5;
let timer6;
let timer7;
let timer8;
let timer9;
function hajimeru() {
    const ketteion = new Audio("決定音.mp3");
    ketteion.play()
    goStart();

}
function goStart() {
    const title = document.getElementById("text1");
    title.style.display = "none";
    const titl1 = document.getElementById("text2");
    titl1.style.display = "none";
    const titl2 = document.getElementById("text3");
    titl2.style.display = "none";
    const startbutton = document.getElementById("hajimeru1");
    startbutton.style.display = "none";
    stage.style.backgroundImage = "url(sinkai.png)";
    sinkaiBGM.play();
    const level = document.getElementById('level');
    level.style.display = "block";
    timer = setInterval(LevelDelete, 1000);
}
function LevelDelete() {
    deletemae--;
    console.log(deletemae)
    if (deletemae === -1) {
        const level = document.getElementById('level');
        level.style.display = "none";
    }
    if (deletemae === -5) {
        clearInterval(timer);
        deletemae = 3;
        timer1 = setInterval(toi1hajime1, 1000);
    }
    function toi1hajime1() {
        seigenjikan--;
        kaito1();
        console.log(seigenjikan);
        if (seigenjikan === 5) {
            countdown.style.display = "block";
            countdown.src = "countdown5.png";
            countdownSE.play();
        }
        if (seigenjikan === 4) {
            countdown.style.display = "block";
            countdown.src = "countdown4.png";
            countdownSE.play();
        }
        if (seigenjikan === 3) {
            countdown.style.display = "block";
            countdown.src = "countdown3.png";
            countdownSE.play();
        }
        if (seigenjikan === 2) {
            countdown.style.display = "block";
            countdown.src = "countdown2.png";
            countdownSE.play();
        }
        if (seigenjikan === 1) {
            countdown.style.display = "block";
            countdown.src = "countdown1.png";
            countdownSE.play();
        }
        if (seigenjikan === 0) {
            sinkaiBGM.pause();
            alert("GAMEOVER");
            clearInterval(timer1);
            document.location.reload();
        }
    }
}
function timerstop() {
    maru1.style.backgroundColor = "red";
    seikaisu++;
    console.log(seikaisu)
    countdown.style.display = "none";
    clearInterval(timer1);
    seigenjikan = 15
    t1();
}
function t1() {
    timerjunbi = setInterval(timerjunbi1, 1000);
}
let timerjunbidesu = 5;
function timerjunbi1() {
    timerjunbidesu--;
    if (timerjunbidesu === 0) {
        clearInterval(timerjunbi);
        console.log(timerjunbidesu);
        timer2 = setInterval(toi2hajime, 1000);
        timerjunbidesu = 5
    }
}

function toi2hajime() {
    seigenjikan--;
    kaito2();
    console.log(seigenjikan)
    if (seigenjikan === 5) {
        countdown.style.display = "block";
        countdown.src = "countdown5.png";
        countdownSE.play();
    }
    if (seigenjikan === 4) {
        countdown.style.display = "block";
        countdown.src = "countdown4.png";
        countdownSE.play();
    }
    if (seigenjikan === 3) {
        countdown.style.display = "block";
        countdown.src = "countdown3.png";
        countdownSE.play();
    }
    if (seigenjikan === 2) {
        countdown.style.display = "block";
        countdown.src = "countdown2.png";
        countdownSE.play();
    }
    if (seigenjikan === 1) {
        countdown.style.display = "block";
        countdown.src = "countdown1.png";
        countdownSE.play();
    }
    if (seigenjikan === 0) {
        sinkaiBGM.pause();
        alert("GAMEOVER");
        clearInterval(timer1);
        document.location.reload();
    }
}
function timerstop1() {
    maru2.style.backgroundColor = "red";
    seikaisu++;
    console.log(seikaisu);
    countdown.style.display = "none";
    clearInterval(timer2);
    seigenjikan = 15
    t2()
}
function t2() {
    timerjunbi = setInterval(timerjunbi2, 1000);
}
function timerjunbi2() {
    timerjunbidesu--;
    if (timerjunbidesu === 0) {
        clearInterval(timerjunbi);
        console.log(timerjunbidesu);
        timer2 = setInterval(toi3hajime, 1000);
        timerjunbidesu = 5
    }
}
function toi3hajime() {
    seigenjikan--;
    kaito3();
    console.log(seigenjikan)
    if (seigenjikan === 5) {
        countdown.style.display = "block";
        countdown.src = "countdown5.png";
        countdownSE.play();
    }
    if (seigenjikan === 4) {
        countdown.style.display = "block";
        countdown.src = "countdown4.png";
        countdownSE.play();
    }
    if (seigenjikan === 3) {
        countdown.style.display = "block";
        countdown.src = "countdown3.png";
        countdownSE.play();
    }
    if (seigenjikan === 2) {
        countdown.style.display = "block";
        countdown.src = "countdown2.png";
        countdownSE.play();
    }
    if (seigenjikan === 1) {
        countdown.style.display = "block";
        countdown.src = "countdown1.png";
        countdownSE.play();
    }
    if (seigenjikan === 0) {
        sinkaiBGM.pause();
        alert("GAMEOVER");
        clearInterval(timer2);
        document.location.reload();
    }
}
function timerstop2() {
    maru3.style.backgroundColor = "red";
    seikaisu++;
    console.log(seikaisu);
    countdown.style.display = "none";
    clearInterval(timer2);
    sinkaiBGM.pause();
    seigenjikan = 15
    t3()
}

function t3() {
    timerjunbi = setInterval(timerjunbi3, 1000);
    deletetimer = setInterval(LevelDelete1, 1000);
}
function LevelDelete1() {
    deletemae--;
    console.log(deletemae)
    if (deletemae === -1) {
        const level2 = document.getElementById('level1');
        level2.style.display = "block";
    }
    if (deletemae === -4) {
        level2.style.display = "none";
        clearInterval(deletetimer);
    }
}
function timerjunbi3() {
    timerjunbidesu--;
    console.log(timerjunbidesu);
    stage.style.background = "url(sora.png)";
    soraBGM.play();
    if (timerjunbidesu === 0) {
        console.log(timerjunbidesu);
    }
    if (timerjunbidesu === -3) {
        timer3 = setInterval(toi4hajime, 1000);
        clearInterval(timerjunbi);
        timerjunbidesu = 5
    }
}
function toi4hajime() {
    seigenjikan--;
    kaito4();
    console.log(seigenjikan)
    if (seigenjikan === 5) {
        countdown.style.display = "block";
        countdown.src = "countdown5.png";
        countdownSE.play();
    }
    if (seigenjikan === 4) {
        countdown.style.display = "block";
        countdown.src = "countdown4.png";
        countdownSE.play();
    }
    if (seigenjikan === 3) {
        countdown.style.display = "block";
        countdown.src = "countdown3.png";
        countdownSE.play();
    }
    if (seigenjikan === 2) {
        countdown.style.display = "block";
        countdown.src = "countdown2.png";
        countdownSE.play();
    }
    if (seigenjikan === 1) {
        countdown.style.display = "block";
        countdown.src = "countdown1.png";
        countdownSE.play();
    }
    if (seigenjikan === 0) {
        sinkaiBGM.pause();
        alert("GAMEOVER");
        clearInterval(timer3);
        document.location.reload();
    }
}
function timerstop3() {
    maru4.style.backgroundColor = "red";
    soraBGM.pause();
    seikaisu++;
    console.log(seikaisu);
    countdown.style.display = "none";
    clearInterval(timer3);
    sinkaiBGM.pause();
    seigenjikan = 15
    t4()
}
function t4() {
    timerjunbi = setInterval(timerjunbi4, 1000);
}
function timerjunbi4() {
    timerjunbidesu--;
    if (timerjunbidesu === 0) {
        clearInterval(timerjunbi);
        console.log(timerjunbidesu);
        timer4 = setInterval(toi5hajime, 1000);
        timerjunbidesu = 5
    }
}
function toi5hajime() {
    soraBGM.play()
    seigenjikan--;
    kaito5();
    console.log(seigenjikan)
    if (seigenjikan === 5) {
        countdown.style.display = "block";
        countdown.src = "countdown5.png";
        countdownSE.play();
    }
    if (seigenjikan === 4) {
        countdown.style.display = "block";
        countdown.src = "countdown4.png";
        countdownSE.play();
    }
    if (seigenjikan === 3) {
        countdown.style.display = "block";
        countdown.src = "countdown3.png";
        countdownSE.play();
    }
    if (seigenjikan === 2) {
        countdown.style.display = "block";
        countdown.src = "countdown2.png";
        countdownSE.play();
    }
    if (seigenjikan === 1) {
        countdown.style.display = "block";
        countdown.src = "countdown1.png";
        countdownSE.play();
    }
    if (seigenjikan === 0) {
        sinkaiBGM.pause();
        alert("GAMEOVER");
        clearInterval(timer4);
        document.location.reload();
    }
}
function timerstop4() {
    maru5.style.backgroundColor = "red";
    soraBGM.pause();
    seikaisu++;
    console.log(seikaisu);
    countdown.style.display = "none";
    clearInterval(timer4);
    sinkaiBGM.pause();
    seigenjikan = 15
    t5()
}
function t5() {
    timerjunbi = setInterval(timerjunbi5, 1000);
}
function timerjunbi5() {
    timerjunbidesu--;
    if (timerjunbidesu === 0) {
        clearInterval(timerjunbi);
        console.log(timerjunbidesu);
        timer5 = setInterval(toi6hajime, 1000);
        timerjunbidesu = 5
    }
}
function toi6hajime() {
    soraBGM.play()
    seigenjikan--;
    kaito6();
    console.log(seigenjikan);
    if (seigenjikan === 5) {
        countdown.style.display = "block";
        countdown.src = "countdown5.png";
        countdownSE.play();
    }
    if (seigenjikan === 4) {
        countdown.style.display = "block";
        countdown.src = "countdown4.png";
        countdownSE.play();
    }
    if (seigenjikan === 3) {
        countdown.style.display = "block";
        countdown.src = "countdown3.png";
        countdownSE.play();
    }
    if (seigenjikan === 2) {
        countdown.style.display = "block";
        countdown.src = "countdown2.png";
        countdownSE.play();
    }
    if (seigenjikan === 1) {
        countdown.style.display = "block";
        countdown.src = "countdown1.png";
        countdownSE.play();
    }
    if (seigenjikan === 0) {
        sinkaiBGM.pause();
        alert("GAMEOVER");
        clearInterval(timer5);
        document.location.reload();
    }
}
function timerstop5() {
    maru6.style.backgroundColor = "red";
    soraBGM.pause();
    seikaisu++;
    console.log(seikaisu);
    countdown.style.display = "none";
    clearInterval(timer5);
    sinkaiBGM.pause();
    seigenjikan = 15
    t6()
}
function t6() {
    timerjunbi = setInterval(timerjunbi6, 1000);
    deletetimer = setInterval(LevelDelete2, 1000);
}
function LevelDelete2() {
    deletemae1--;
    console.log(deletemae1)
    if (deletemae1 === -1) {
        const level3 = document.getElementById('level2');
        level3.style.display = "block";
    }
    if (deletemae1 === -4) {
        level3.style.display = "none";
        clearInterval(deletetimer);
    }
}
function timerjunbi6() {
    timerjunbidesu--;
    console.log(timerjunbidesu);
    stage.style.background = "url(星空.png)";
    spaceBGM.play();
    if (timerjunbidesu === 0) {
        console.log(timerjunbidesu);
    }
    if (timerjunbidesu === -3) {
        timer6 = setInterval(toi7hajime, 1000);
        clearInterval(timerjunbi);
        timerjunbidesu = 5
    }

}
function toi7hajime() {
    spaceBGM.play()
    seigenjikan--;
    kaito7();
    console.log(seigenjikan)
    if (seigenjikan === 5) {
        countdown.style.display = "block";
        countdown.src = "countdown5.png";
        countdownSE.play();
    }
    if (seigenjikan === 4) {
        countdown.style.display = "block";
        countdown.src = "countdown4.png";
        countdownSE.play();
    }
    if (seigenjikan === 3) {
        countdown.style.display = "block";
        countdown.src = "countdown3.png";
        countdownSE.play();
    }
    if (seigenjikan === 2) {
        countdown.style.display = "block";
        countdown.src = "countdown2.png";
        countdownSE.play();
    }
    if (seigenjikan === 1) {
        countdown.style.display = "block";
        countdown.src = "countdown1.png";
        countdownSE.play();
    }
    if (seigenjikan === 0) {
        sinkaiBGM.pause();
        alert("GAMEOVER");
        clearInterval(timer6);
        document.location.reload();
    }
}
function timerstop6() {
    maru7.style.backgroundColor = "red";
    spaceBGM.pause();
    seikaisu++;
    console.log(seikaisu);
    countdown.style.display = "none";
    clearInterval(timer6);
    sinkaiBGM.pause();
    seigenjikan = 15
    t7()
}
function t7() {
    timerjunbi = setInterval(timerjunbi7, 1000);
}
function timerjunbi7() {
    timerjunbidesu--;
    if (timerjunbidesu === 0) {
        clearInterval(timerjunbi);
        console.log(timerjunbidesu);
        timer7 = setInterval(toi8hajime, 1000);
        timerjunbidesu = 5
    }
}
function toi8hajime() {
    spaceBGM.play()
    seigenjikan--;
    kaito8();
    console.log(seigenjikan)
    if (seigenjikan === 5) {
        countdown.style.display = "block";
        countdown.src = "countdown5.png";
        countdownSE.play();
    }
    if (seigenjikan === 4) {
        countdown.style.display = "block";
        countdown.src = "countdown4.png";
        countdownSE.play();
    }
    if (seigenjikan === 3) {
        countdown.style.display = "block";
        countdown.src = "countdown3.png";
        countdownSE.play();
    }
    if (seigenjikan === 2) {
        countdown.style.display = "block";
        countdown.src = "countdown2.png";
        countdownSE.play();
    }
    if (seigenjikan === 1) {
        countdown.style.display = "block";
        countdown.src = "countdown1.png";
        countdownSE.play();
    }
    if (seigenjikan === 0) {
        sinkaiBGM.pause();
        alert("GAMEOVER");
        clearInterval(timer7);
        document.location.reload();
    }
}
function timerstop7() {
    maru8.style.backgroundColor = "red";
    spaceBGM.pause();
    seikaisu++;
    console.log(seikaisu);
    countdown.style.display = "none";
    clearInterval(timer7);
    sinkaiBGM.pause();
    seigenjikan = 15
    t8()
}
function t8() {
    timerjunbi = setInterval(timerjunbi8, 1000);
}
function timerjunbi8() {
    timerjunbidesu--;
    if (timerjunbidesu === 0) {
        clearInterval(timerjunbi);
        console.log(timerjunbidesu);
        timer8 = setInterval(toi9hajime, 1000);
        timerjunbidesu = 5
    }
}
function toi9hajime() {
    spaceBGM.play()
    seigenjikan--;
    kaito9();
    console.log(seigenjikan)
    if (seigenjikan === 5) {
        countdown.style.display = "block";
        countdown.src = "countdown5.png";
        countdownSE.play();
    }
    if (seigenjikan === 4) {
        countdown.style.display = "block";
        countdown.src = "countdown4.png";
        countdownSE.play();
    }
    if (seigenjikan === 3) {
        countdown.style.display = "block";
        countdown.src = "countdown3.png";
        countdownSE.play();
    }
    if (seigenjikan === 2) {
        countdown.style.display = "block";
        countdown.src = "countdown2.png";
        countdownSE.play();
    }
    if (seigenjikan === 1) {
        countdown.style.display = "block";
        countdown.src = "countdown1.png";
        countdownSE.play();
    }
    if (seigenjikan === 0) {
        sinkaiBGM.pause();
        alert("GAMEOVER");
        clearInterval(timer8);
        document.location.reload();
    }
}
function timerstop8() {
    maru9.style.backgroundColor = "red";
    spaceBGM.pause();
    seikaisu++;
    console.log(seikaisu);
    countdown.style.display = "none";
    clearInterval(timer8);
    sinkaiBGM.pause();
    seigenjikan = 15
    t9()
}
function t9() {
    timerjunbi = setInterval(timerjunbi9, 1000);
    deletetimer = setInterval(LevelDelete3, 1000);
}
function LevelDelete3() {
    deletemae2--;
    console.log(deletemae2)
    if (deletemae2 === -1) {
        const final = document.getElementById('level3');
        final.style.display = "block";
    }
    if (deletemae2 === -4) {
        final.style.display = "none";
        clearInterval(deletetimer2);
    }
}
function timerjunbi9() {
    timerjunbidesu--;
    console.log(timerjunbidesu);
    stage.style.background = "url(final.jpg)";
    finalBGM.play();
    if (timerjunbidesu === 0) {
        console.log(timerjunbidesu);
    }
    if (timerjunbidesu === -3) {
        timer9 = setInterval(toi10hajime, 1000);
        clearInterval(timerjunbi);
        timerjunbidesu = 5
    }
}
function toi10hajime() {
    finalBGM.play()
    seigenjikan--;
    kaito10();
    console.log(seigenjikan)
    if (seigenjikan === 5) {
        countdown.style.display = "block";
        countdown.src = "countdown5.png";
        countdownSE.play();
    }
    if (seigenjikan === 4) {
        countdown.style.display = "block";
        countdown.src = "countdown4.png";
        countdownSE.play();
    }
    if (seigenjikan === 3) {
        countdown.style.display = "block";
        countdown.src = "countdown3.png";
        countdownSE.play();
    }
    if (seigenjikan === 2) {
        countdown.style.display = "block";
        countdown.src = "countdown2.png";
        countdownSE.play();
    }
    if (seigenjikan === 1) {
        countdown.style.display = "block";
        countdown.src = "countdown1.png";
        countdownSE.play();
    }
    if (seigenjikan === 0) {
        sinkaiBGM.pause();
        alert("GAMEOVER");
        clearInterval(timer9);
        document.location.reload();
    }
}
function timerstop9() {
    maru10.style.backgroundColor = "red";
    soraBGM.pause();
    seikaisu++;
    console.log(seikaisu);
    countdown.style.display = "none";
    clearInterval(timer9);
    sinkaiBGM.pause();
    t10()
}
function t10() {
    timerjunbi = setInterval(timerjunbi10, 1000);
}
function timerjunbi10() {
    finalBGM.pause();
    timerjunbidesu--;
    console.log(timerjunbidesu);
    stage.style.background = "url(clear.jpg)";
    clearBGM.play();
    if (timerjunbidesu === 0) {
        console.log(timerjunbidesu);
    }
    if (timerjunbidesu === -2) {
        console.log(timerjunbidesu);
        const clear = document.getElementById('clear');
        clear.style.display = "block";
        clearInterval(timerjunbi);
    }
}