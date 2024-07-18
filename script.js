const can = document.getElementById("canvas");
const ctx = can.getContext("2d");
const myau = document.getElementById("myAudio");
const myau1 = document.getElementById("myAudio1");
const myau2 = document.getElementById("myAudio2");
var chak = false;
let y = 20;
var zzz;
var myintervhhhal;
var myintervhhhal2;
var rScore = 0;
var lScore = 0;
var fflshingb;
var fivetimes = 0;
var x;
var whatsideprestfrist = true;
var c = false;
var isthereaneedforachangeinthelosingside = false;
var isthereaneedforachangeinthewiningside = false;

const gameeeover = document.getElementById('gameover');
const closeButton = document.getElementById('closetButton');


document.addEventListener('DOMContentLoaded', () => {
    const infoButton = document.getElementById('infoButton');
    const modal = document.getElementById('modal');
    const closeButton = document.getElementById('closeButton');

    infoButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});


ctx.font = "50px myFirstFont";
let rR = Math.floor(Math.random() * 9) +1;
let lR = Math.floor(Math.random() * 9) +1;
ctx.fillText(lScore,20,70);
ctx.fillText(rScore,691.7,70);
const rMr = [
    { src: "image/rrpos2.png", x: 420, y: 150, width: 270, height: 300 },
    { src: "image/rnumholdingpos.png", x: 420, y: -30, width: 270, height: 480 },
    { src: "image/rhumeringpos.png", x: 277, y: 167.9, width: 291.8, height: 283.1 },
    { src: "image/rdugepos.png", x: 579.6, y: 260, width: 174.7, height:207 },
    { src: "image/rgetinghitorwhithingpos.png", x: 420, y: 150, width: 270, height: 270.4 },
    { src: "image/rgetingandhetingpos.png", x: 277, y: 167.9, width: 311.8, height: 256.6 },
    { src: "image/rgetinghit.png", x: 420, y: -30, width: 284.550275229357798, height: 453.30 }
]
const lMr = [
    { src: "image/lrpos.png", x: 75.7, y: 150, width: 270, height: 300 },
    { src: "image/lnumholdingpos.png", x: 75.7, y: -30, width: 270, height: 480 },
    { src: "image/lhumeringpos.png", x: 195, y: 167.9, width: 291.8, height: 283.1 },
    { src: "image/ldugepos.png", x: 11.39, y: 260, width: 174.7, height:207 },
    { src: "image/lgetinghitorwhithingpos.png", x: 75.7, y: 150, width: 270, height: 270.4 },
    { src: "image/lgetingandhetingpos.png", x: 168, y: 167.9, width: 311.8, height: 256.6 },
    { src: "image/lgetinghit.png", x: 75.7, y: -30, width: 284.550275229357798, height: 453.30 }
]
let rpospreviasnum = 1;
let lpospreviasnum = 1;

function therrforsecund(){
    if(chak){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        d = new Date();
        thishoer = d.getHours();
        thismin = d.getMinutes();
        ctx.fillText(thismin,691.7,70);
        ctx.fillText(thishoer,20,70);

        let rposn = Math.floor(Math.random() * rMr.length);
        while(rpospreviasnum == rposn || rposn == 0 || rposn == 1 || rposn == 6){
            rposn = Math.floor(Math.random() * rMr.length);
        }
        if(rposn == 2){
            lposn = Math.floor(Math.random() * 2) + 3;
        }
        if(rposn == 3){
            lposn = Math.floor(Math.random() * 2) + 2;
        }
        if(rposn == 4){
            lposn = 2;
        }
        if(rposn == 5){
            lposn = 5;
        }

        const rpos = new Image();
        const lpos = new Image();
        lpospreviasnum = lposn;
        rpospreviasnum = rposn;
        rpos.src = rMr[rposn].src;
        lpos.src = lMr[lposn].src;

        rpos.onload = function() {
                
            ctx.drawImage(rpos, rMr[rposn].x, rMr[rposn].y, rMr[rposn].width, rMr[rposn].height);
        } 
        lpos.onload = function() {
                
            ctx.drawImage(lpos, lMr[lposn].x, lMr[lposn].y, lMr[lposn].width, lMr[lposn].height);
        } 
        chak = false;          

    }

    else{
        const rpos = new Image();
        const lpos = new Image();
        rpos.src = rMr[0].src;
        lpos.src = lMr[0].src;
        rpos.onload = function() {
                
            ctx.drawImage(rpos, rMr[0].x, rMr[0].y, rMr[0].width, rMr[0].height);
        } 
        lpos.onload = function() {
                
            ctx.drawImage(lpos, lMr[0].x, lMr[0].y, lMr[0].width, lMr[0].height);
        } 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        d = new Date();
        thishoer = d.getHours();
        thismin = d.getMinutes();
        ctx.fillText(thismin,691.7,70);
        ctx.fillText(thishoer,20,70);
        chak = true;
    } 
}
const mdjfln = setInterval(therrforsecund, 1250);
document.addEventListener("keydown",Start);
function Start(event){
    var rScore = 0;
    var lScore = 0;
    if(event.key == " "){
        xp();   
    } 
}
myau.playbackRate = 1.2;
myau1.playbackRate = 1.5;
myau.volum = 0.5;
myau1.volum = 0.5;
function xp(){
    document.removeEventListener("keydown",Start);
        clearInterval(mdjfln);
        ctx.font = "50px myFirstFont";

        ctx.clearRect(20,20,55,55);
        ctx.clearRect(724,20,55,55);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillText(rScore,691.7,70);
        ctx.fillText(lScore,20,70);

        const rRegularPuse = new Image();
        rRegularPuse.src = "image/rrpos2.png";

        const lRegularPuse = new Image();
        lRegularPuse.src = "image/lrpos.png";

        lRegularPuse.onload = function() {
            // יחס בין הגובהה לרוחב 0.9 פחות או יותר
            ctx.drawImage(lRegularPuse, lMr[0].x, lMr[0].y, lMr[0].width, lMr[0].height);
        }
        rRegularPuse.onload = function() {
            // יחס בין הגובהה לרוחב 0.9 פחות או יותר
            ctx.drawImage(rRegularPuse,rMr[0].x, rMr[0].y, rMr[0].width, rMr[0].height);
        }
        const arrows = new Image();
        arrows.src = "image/3arrows.png";
        arrows.onload = function(){
            ctx.drawImage(arrows,355.85,35,54,120)
        }
        y = 20;
        myau.play();
        zzz = setInterval(delitarrowandcontenuegame, 700);
}

function delitarrowandcontenuegame(){
    if(y!=120){
        myau.play();
    }

    ctx.clearRect(355.85,y,55,55);
    y+=50;
    console.log(y);
    if(y >= 170) {
        myau1.play();
        clearInterval(zzz);
        ctx.clearRect(77, 77, canvas.width, canvas.height);
        const rnumpos = new Image();
        rnumpos.src = "image/rnumholdingpos.png"
        const lnumpos = new Image();
        lnumpos.src = "image/lnumholdingpos.png"
        
        ctx.font = "170px myFirstFont";

        rR = Math.floor(Math.random() * 9) +1;
        lR = Math.floor(Math.random() * 9) +1;  
        rnumpos.onload = function(){
            ctx.drawImage(rnumpos,rMr[1].x, rMr[1].y, rMr[1].width, rMr[1].height);
            ctx.fillText(rR, 490, 120);
        }
        lnumpos.onload = function(){
            ctx.drawImage(lnumpos,lMr[1].x, lMr[1].y, lMr[1].width, lMr[1].height);
            ctx.fillText(lR, 220, 120);
        }
        document.addEventListener("keydown",firstbuttendawn);  
    }
}
function firstbuttendawn(event){
    if(event.key == "a"){
        document.removeEventListener("keydown",firstbuttendawn);
        
        if(lR<rR){
            lScore += 2;
            fivetimes = 0;
            fflshingb = true;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "50px myFirstFont";
            ctx.fillText(rScore,691.7,70);
            ctx.fillText(lScore,20,70);
            const rnumpos = new Image();
            ctx.font = "170px myFirstFont";

            rnumpos.src = "image/rnumholdingpos.png"
            rnumpos.onload = function(){
                ctx.drawImage(rnumpos,rMr[1].x, rMr[1].y, rMr[1].width, rMr[1].height);
                ctx.fillText(rR, 490, 120);
            }
            const ldogpos = new Image();
            ldogpos.src = "image/ldugepos.png"
            
            ldogpos.onload = function(){
                ctx.drawImage(ldogpos,lMr[3].x, lMr[3].y, lMr[3].width, lMr[3].height);
                ctx.fillText(lR, 220, 120);
                x = 1;
                y = 3;
                c = false;
                isthereaneedforachangeinthelosingside = false;
                functionsArray[0]();
                
                //document.addEventListener("keydown", fstor["emvelop1"]);
                //myintervhhhal = setTimeout(function() { flashing(3, true); }, 250);
                //document.addEventListener("keydown", () => flashing(3, true)); 
            }
        }
        else{
            rScore += 2;
            fivetimes = 0;
            fflshingb = true;
            ctx.clearRect(lMr[1].x, lMr[1].y, lMr[1].width, lMr[1].height);
            ctx.font = "50px myFirstFont";
            ctx.fillText(rScore,691.7,70);
            ctx.fillText(lScore,20,70);
            ctx.font = "170px myFirstFont";

            const ldogpos = new Image();
            ldogpos.src = "image/ldugepos.png"
            
            ldogpos.onload = function(){
                ctx.drawImage(ldogpos,lMr[3].x, lMr[3].y, lMr[3].width, lMr[3].height);
                ctx.fillText(lR, 220, 120);
                x = 3;
                y = 1;
                c = false;
                isthereaneedforachangeinthelosingside = false;
                functionsArray[4]();
            }
        }
    }

    else if(event.key == "l"){
        document.removeEventListener("keydown",firstbuttendawn);
        if(rR<lR){
            rScore += 2;
            fivetimes = 0;
            fflshingb = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "50px myFirstFont";
            ctx.fillText(rScore,691.7,70);
            ctx.fillText(lScore,20,70);
            ctx.font = "170px myFirstFont";
            const rnumpos = new Image();
            rnumpos.src = rMr[3].src;
            rnumpos.onload = function(){
                ctx.drawImage(rnumpos,rMr[3].x, rMr[3].y, rMr[3].width, rMr[3].height);
                ctx.fillText(rR, 490, 120);
            }
            const ldogpos = new Image();
            ldogpos.src = lMr[1].src;   
            ldogpos.onload = function(){
                ctx.drawImage(ldogpos,lMr[1].x, lMr[1].y, lMr[1].width, lMr[1].height);
                ctx.fillText(lR, 220, 120);
                x = 1;
                y = 3;
                c = false;
                isthereaneedforachangeinthelosingside = false;
                functionsArray[1]();
                //document.addEventListener("keydown", fstor["emvelop2"]);
                //myintervhhhal = setTimeout(function() { flashing(3, false); }, 250);
                //document.addEventListener("keydown", () => flashing(3, false)); 
            }
        }
        else{
            lScore += 2;
            fivetimes = 0;
            fflshingb = true;
            ctx.clearRect(rMr[1].x, rMr[1].y, rMr[1].width, rMr[1].height);
            ctx.font = "50px myFirstFont";
            ctx.fillText(rScore,691.7,70);
            ctx.fillText(lScore,20,70);
            ctx.font = "170px myFirstFont";

            const ldogpos = new Image();
            ldogpos.src = "image/rdugepos.png"
            
            ldogpos.onload = function(){
                ctx.drawImage(ldogpos,rMr[3].x, rMr[3].y, rMr[3].width, rMr[3].height);
                ctx.fillText(lR, 220, 120);
                x = 3;
                y = 1;
                c = false;
                isthereaneedforachangeinthelosingside = false;
                functionsArray[5]();
            }
        }
    }
    else if(event.key == "s"){
        document.removeEventListener("keydown",firstbuttendawn);
        if(rR<lR){
            
            lScore += 3;
            fivetimes = 0;
            fflshingb = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "50px myFirstFont";
            ctx.fillText(rScore,691.7,70);
            ctx.fillText(lScore,20,70);
            ctx.font = "170px myFirstFont";
            const rnumpos = new Image();
            rnumpos.src = rMr[6].src;
            rnumpos.onload = function(){
                ctx.drawImage(rnumpos,rMr[6].x, rMr[6].y, rMr[6].width, rMr[6].height);
                ctx.fillText(rR, 490, 120);
            }
            const ldogpos = new Image();
            ldogpos.src = lMr[2].src;   
            ldogpos.onload = function(){
                ctx.drawImage(ldogpos,lMr[2].x, lMr[2].y, lMr[2].width, lMr[2].height);
                ctx.fillText(lR, 220, 120);
                x = 6;
                y = 2;
                c = false;
                isthereaneedforachangeinthelosingside = false;
                functionsArray[2]();
                
                //document.addEventListener("keydown", fstor["emvelop3"]);
                //document.addEventListener("keydown", () => flashing(2, true));
                //myintervhhhal = setTimeout(function() { flashing(2, true); }, 250);
            }
        } 
        else if(rR == lR){
            whatsideprestfrist = false;
            document.addEventListener("keydown",iseqal); 
        }
        else if(rR>lR){
            rScore += 2;
            fivetimes = 0;
            fflshingb = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "50px myFirstFont";
            ctx.fillText(rScore,691.7,70);
            ctx.fillText(lScore,20,70);
            ctx.font = "170px myFirstFont";
            const rnumpos = new Image();
            rnumpos.src = rMr[1].src;
            rnumpos.onload = function(){
                ctx.drawImage(rnumpos,rMr[1].x, rMr[1].y, rMr[1].width, rMr[1].height);
                ctx.fillText(rR, 490, 120);
            }
            const ldogpos = new Image();
            ldogpos.src = lMr[2].src;   
            ldogpos.onload = function(){
                ctx.drawImage(ldogpos,lMr[2].x, lMr[2].y, lMr[2].width, lMr[2].height);
                ctx.fillText(lR, 220, 120);
                x = 2;
                y = 1;
                c = false;
                isthereaneedforachangeinthelosingside = false;
                functionsArray[6]();
            }
        }
        
    }
    else if(event.key == "k"){
        document.removeEventListener("keydown",firstbuttendawn);
        if(rR>lR){
            
            rScore += 3;
            fivetimes = 0;
            fflshingb = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "50px myFirstFont";
            ctx.fillText(rScore,691.7,70);
            ctx.fillText(lScore,20,70);
            ctx.font = "170px myFirstFont";
            const rnumpos = new Image();
            rnumpos.src = rMr[2].src;
            rnumpos.onload = function(){
                ctx.drawImage(rnumpos,rMr[2].x, rMr[2].y, rMr[2].width, rMr[2].height);
                ctx.fillText(rR, 490, 120);
            }
            const ldogpos = new Image();
            ldogpos.src = lMr[6].src;   
            ldogpos.onload = function(){
                ctx.drawImage(ldogpos,lMr[6].x, lMr[6].y, lMr[6].width, lMr[6].height);
                ctx.fillText(lR, 220, 120);
                x = 6;
                y = 2;
                c = false;
                isthereaneedforachangeinthelosingside = false;
                functionsArray[3]();
                
                //document.addEventListener("keydown", fstor["emvelop4"]);
                //document.addEventListener("keydown", () => flashing(2, false));
                //myintervhhhal = setTimeout(function() { flashing(2, false); }, 250);
            }
        }
        else if(rR == lR){
            whatsideprestfrist = true;
            document.addEventListener("keydown",iseqal); 
        }
        else if(rR<lR){
            lScore += 2;
            fivetimes = 0;
            fflshingb = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "50px myFirstFont";
            ctx.fillText(rScore,691.7,70);
            ctx.fillText(lScore,20,70);
            ctx.font = "170px myFirstFont";
            const rnumpos = new Image();
            rnumpos.src = rMr[2].src;
            rnumpos.onload = function(){
                ctx.drawImage(rnumpos,rMr[2].x, rMr[2].y, rMr[2].width, rMr[2].height);
                ctx.fillText(rR, 490, 120);
            }
            const ldogpos = new Image();
            ldogpos.src = lMr[1].src;   
            ldogpos.onload = function(){
                ctx.drawImage(ldogpos,lMr[1].x, lMr[1].y, lMr[1].width, lMr[1].height);
                ctx.fillText(lR, 220, 120);
                x = 2;
                y = 1;
                c = false;
                isthereaneedforachangeinthelosingside = false;
                functionsArray[7]();
            }
        }
    }
}
function eventfff(event){
    if(event.key == "k" && rR == lR){
        y = 2;
        c = false;
        isthereaneedforachangeinthewiningside = true;
        document.removeEventListener("keydown", eventfff);
    }
    else if(event.key == "l" && lR>rR){
        y = 3;
        c = false;
        isthereaneedforachangeinthewiningside = true;
        document.removeEventListener("keydown", eventfff);
    }
}
function eventffff(event){
    if(event.key == "s" && rR == lR){
        y = 2;
        c = false;
        isthereaneedforachangeinthewiningside = true;
        document.removeEventListener("keydown", eventffff);
    }
    else if(event.key == "a" && lR<rR){
        y = 3;
        c = false;
        isthereaneedforachangeinthewiningside = true;
        document.removeEventListener("keydown", eventffff);
    }
}
function eventf(event){
    if(event.key == "k"){
        x = 2;
        c = true
        isthereaneedforachangeinthelosingside = true;
        document.removeEventListener("keydown", eventf);
    }
}

function eventff(event){
    if(event.key == "s"){
        x = 2;
        c = true;
        isthereaneedforachangeinthelosingside = true;
        document.removeEventListener("keydown", eventff);
    }
    
}
const functionsArray = [
    function flashingHandler1() {
        if(!c){
            document.addEventListener("keydown", eventf );//פה זה בודק  האים יש צורך לשנות את הדמות שמפסידה
        }
        else{
            document.removeEventListener("keydown", eventf);
        }
        if(fivetimes < 6){
            y = 3;
            
            myintervhhhal = setTimeout(() => { flashing(true, 0); }, 250);//הפעולה שמוחקת ומחזירה את הדמות של המפסיד
        }
        else{
            document.removeEventListener("keydown", eventf);
            if(rScore < 100 && lScore < 100){
                xp();//פה זה מזמן את כל המשח מחדש
            }
            else{
                gameeeover.style.display = 'flex';
                closeButton.addEventListener('click', () => {
                    gameeeover.style.display = 'none';
                });
                gameeeover.addEventListener('click', (e) => {
                    if (e.target == gameeeover) {
                        gameeeover.style.display = 'none';
                    }
                });
            }
        }
        
    },
    function flashingHandler2() {
        if(!c){
            document.addEventListener("keydown", eventff);
            
        }
        else{
            document.removeEventListener("keydown", eventff);
        }

        if(fivetimes <= 6){
            y = 3;
            
            myintervhhhal = setTimeout(() => { flashing(false, 1); }, 250);
        }
        else{
            document.removeEventListener("keydown", eventff);
            if(rScore < 100 && lScore < 100){
                xp();
            }
            else{
                gameeeover.style.display = 'flex';
closeButton.addEventListener('click', () => {
    gameeeover.style.display = 'none';
});
gameeeover.addEventListener('click', (e) => {
    if (e.target == gameeeover) {
        gameeeover.style.display = 'none';
    }
});
            }
        }
        
    },
    function flashingHandler3() {
        
        if(fivetimes < 6){
            x = 6;

            myintervhhhal = setTimeout(() => { flashing( true,2); }, 250);
        }
        else{
            if(rScore < 100 && lScore < 100){
                xp();
            }
            else{
                gameeeover.style.display = 'flex';
                closeButton.addEventListener('click', () => {
                    gameeeover.style.display = 'none';
                });
                gameeeover.addEventListener('click', (e) => {
                    if (e.target == gameeeover) {
                        gameeeover.style.display = 'none';
                    }
                });
            }
        }
        
    },
    function flashingHandler4() {
        if(fivetimes < 6){
            x = 6;
            myintervhhhal = setTimeout(() => { flashing(false, 3); }, 250);
        }
        else{
            if(rScore < 100 && lScore < 100){
                xp();
            }
            else{
                gameeeover.style.display = 'flex';
                closeButton.addEventListener('click', () => {
                    gameeeover.style.display = 'none';
                });
                gameeeover.addEventListener('click', (e) => {
                    if (e.target == gameeeover) {
                        gameeeover.style.display = 'none';
                    }
                });
            }
        }
        
    },
    function flashingHandler5(){
        if(!c){
            document.addEventListener("keydown", eventfff);
            
        }
        else{
            document.removeEventListener("keydown", eventfff);
        }
        if(fivetimes < 6){
            x = 3;
            myintervhhhal = setTimeout(() => { flashing(false, 4); }, 250);
        }
        else{
            document.removeEventListener("keydown", eventfff);
            if(rScore < 100 && lScore < 100){
                xp();
            }
            else{
                gameeeover.style.display = 'flex';
                closeButton.addEventListener('click', () => {
                    gameeeover.style.display = 'none';
                });
                gameeeover.addEventListener('click', (e) => {
                    if (e.target == gameeeover) {
                        gameeeover.style.display = 'none';
                    }
                });
            }
        }
    },
    function flashingHandler6(){
        if(!c){
            document.addEventListener("keydown", eventffff);
            
        }
        else{
            document.removeEventListener("keydown", eventffff);
        }
        if(fivetimes < 6){
            x = 3;
            myintervhhhal = setTimeout(() => { flashing(true, 5); }, 250);
        }
        else{
            document.removeEventListener("keydown", eventffff);
            if(rScore < 100 && lScore < 100){
                xp();
            }
            else{
                gameeeover.style.display = 'flex';
                closeButton.addEventListener('click', () => {
                    gameeeover.style.display = 'none';
                });
                gameeeover.addEventListener('click', (e) => {
                    if (e.target == gameeeover) {
                        gameeeover.style.display = 'none';
                    }
                });
            }
        }
    },
    function flashingHandler7(){
        if(fivetimes < 6){
            x = 2;
            myintervhhhal = setTimeout(() => { flashing(false, 6); }, 250);
        }
        else{
            if(rScore < 100 && lScore < 100){
                xp();
            }
            else{
            
                gameeeover.style.display = 'flex';

                closeButton.addEventListener('click', () => {
                    gameeeover.style.display = 'none';
                });
            
                gameeeover.addEventListener('click', (e) => {
                    if (e.target == gameeeover) {
                        gameeeover.style.display = 'none';
                    }
                });
                
            }
        }
    },
    function flashingHandler8(){
        if(fivetimes < 6){
            x = 2;
            myintervhhhal = setTimeout(() => { flashing(true, 7); }, 250);
        }
        else{
            if(rScore < 100 && lScore < 100){
                xp();
            }
            else{
                gameeeover.style.display = 'flex';
                closeButton.addEventListener('click', () => {
                    gameeeover.style.display = 'none';
                });
                gameeeover.addEventListener('click', (e) => {
                    if (e.target == gameeeover) {
                        gameeeover.style.display = 'none';
                    }
                });
            }
        }
    }
]
/*var fstor = {
    emvelop1: function(event){
        flashing( 3, true, 1,false)
    },
    emvelop2: function(event){
        flashing( 3, false, 2,false)         
    },
    emvelop3: function(event){
        flashing( 2, true, 3,false)          
    },
    emvelop4: function(event){
        flashing( 2, false, 4, false)       
    }
};*/

function flashing(b, numoff){
    
    if(fivetimes == 0){
        fivetimes++;
        var hhh = false;
        myau2.currentTime = 0.1;
        myau2.playbackRate = 2
        myau2.play();
        myau2.addEventListener('timeupdate', checkTime);

        function checkTime(event){
            if(myau2.currentTime >= 0.4){
                myau2.pause();
                myau2.removeEventListener('timeupdate', checkTime);
                if(!hhh){
                    myau2.currentTime = 0.1;
                    myau2.playbackRate = 2
                    myau2.play();
                    hhh = true;
                    myau2.addEventListener('timeupdate', checkTime);
                }
                else{
                    functionsArray[numoff]();
                }

            }
        }
        
    }
    else if(fflshingb){
        if(b){
            if(isthereaneedforachangeinthewiningside){
                ctx.clearRect(lMr[1].x, lMr[1].y, lMr[1].width,lMr[1].height);
                ctx.fillText(lR, 220, 120);
                lScore += 2;
                isthereaneedforachangeinthewiningside = false;
            }
            const xnumpos = new Image();
            xnumpos.src = lMr[y].src;

            xnumpos.onload = function(){
                ctx.clearRect(rMr[x].x, rMr[x].y, rMr[x].width, rMr[x].height);
                ctx.drawImage(xnumpos,lMr[y].x, lMr[y].y, lMr[y].width, lMr[y].height);
                ctx.font = "50px myFirstFont";
                ctx.clearRect(470, 0, 100,185);
                ctx.clearRect(650, 0, 200,100);
                ctx.clearRect(0, 0, 100,100);
                ctx.fillText(lScore,20,70);
                ctx.fillText(rScore,691.7,70);

                
            }
        }
        else{
            if(isthereaneedforachangeinthewiningside){
                ctx.clearRect(rMr[1].x, rMr[1].y, rMr[1].width, rMr[1].height);
                ctx.fillText(rR, 490, 120);
                rScore += 2;
                isthereaneedforachangeinthewiningside = false;
            }
            const lnumpo = new Image();
            lnumpo.src = rMr[y].src;

            lnumpo.onload = function(){
                
                
                
                ctx.clearRect(lMr[x].x, lMr[x].y, lMr[x].width, lMr[x].height);
                ctx.drawImage(lnumpo,rMr[y].x, rMr[y].y, rMr[y].width, rMr[y].height);
                ctx.font = "50px myFirstFont";
                ctx.clearRect(210, 0, 100,180);
                ctx.clearRect(0, 0, 100,100);
                ctx.clearRect(650, 0, 200,100);
                ctx.fillText(lScore,20,70);
                ctx.fillText(rScore,691.7,70);

                
            }
        }
        fflshingb = false;
        functionsArray[numoff]();
        /*ctx.clearRect(0, 0, canvas.width, canvas.height);
        clearInterval(myintervhhhal);*/
        
    }
    else{
        if(b){
            ctx.font = "170px myFirstFont";
            if(isthereaneedforachangeinthelosingside){
                ctx.clearRect(rMr[1].x, rMr[1].y, rMr[1].width, rMr[1].height);
                ctx.fillText(rR, 490, 120);
                isthereaneedforachangeinthelosingside = false;
            }

            const lnumpos = new Image();
            lnumpos.src = rMr[x].src;
            lnumpos.onload = function(){
                ctx.drawImage(lnumpos,rMr[x].x, rMr[x].y, rMr[x].width, rMr[x].height);
                ctx.fillText(rR, 490, 120);
                fivetimes++;
                fflshingb = true;

                functionsArray[numoff]();
            }
        }
        else{
            ctx.font = "170px myFirstFont";
            if(isthereaneedforachangeinthelosingside){
                ctx.clearRect(lMr[1].x, lMr[1].y, lMr[1].width, lMr[1].height);
                ctx.fillText(lR, 220, 120);
                isthereaneedforachangeinthelosingside = false;
            }


            const rnumpos = new Image();
            rnumpos.src = lMr[x].src;
            rnumpos.onload = function(){
                ctx.drawImage(rnumpos,lMr[x].x, lMr[x].y, lMr[x].width, lMr[x].height);
                ctx.fillText(lR, 220, 120);
                fivetimes++;
                fflshingb = true;

                functionsArray[numoff]();
            }
        }
    } 
}
function flashing1(){
    if(fivetimes == 0){
        fivetimes++;
        var hhh = false;
        myau2.currentTime = 0.1;
        myau2.playbackRate = 2
        myau2.play();
        myau2.addEventListener('timeupdate', checkTime);

        function checkTime(event){
            if(myau2.currentTime >= 0.4){
                myau2.pause();
                myau2.removeEventListener('timeupdate', checkTime);
                if(!hhh){
                    myau2.currentTime = 0.1;
                    myau2.playbackRate = 2
                    myau2.play();
                    hhh = true;
                    myau2.addEventListener('timeupdate', checkTime);
                }
                else{
                    functionsArray[numoff]();
                }

            }
        }
    }
    else if(fflshingb){
        
       
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "50px myFirstFont";
        ctx.fillText(lScore,20,70);
        ctx.fillText(rScore,691.7,70);
        fflshingb = false;
        
    }
    else{
        const rnumpos = new Image();
        rnumpos.src = lMr[5].src;
        rnumpos.onload = function(){
            ctx.drawImage(rnumpos,lMr[5].x, lMr[5].y, lMr[5].width, lMr[5].height);
        }
        const rnumpos1 = new Image();
        rnumpos1.src = rMr[5].src;
        rnumpos1.onload = function(){
            ctx.drawImage(rnumpos1,rMr[5].x, rMr[5].y, rMr[5].width, rMr[5].height);
            ctx.font = "170px myFirstFont";
            ctx.fillText(lR, 220, 120);
            ctx.fillText(rR, 490, 120);
            ctx.font = "50px myFirstFont";
            ctx.fillText(lScore,20,70);
            ctx.fillText(rScore,691.7,70);
            fivetimes++;
            if(fivetimes == 6){
                clearInterval(myintervhhhal);
                if(rScore < 100 && lScore < 100){
                    xp();
                }
                else{
                    document.addEventListener('DOMContentLoaded', () => {
                        const gameeeover = document.getElementById('gameover');
                        const closeButton = document.getElementById('closeButton');
                    
                        gameeeover.style.display = 'flex';
                    
                        closeButton.addEventListener('click', () => {
                            gameeeover.style.display = 'none';
                        });
                    
                        gameeeover.addEventListener('click', (e) => {
                            if (e.target === gameeeover) {
                                gameeeover.style.display = 'none';
                            }
                        });
                        
                    })
                }
            }
            fflshingb = true;
        }
    }    
}
function iseqal(event){
    if(whatsideprestfrist){
        document.removeEventListener("keydown",iseqal);
        if(event.key == "s"){
            rScore += 3;
            lScore += 3;
            fivetimes = 0;
            fflshingb = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "50px myFirstFont";
            ctx.fillText(rScore,691.7,70);
            ctx.fillText(lScore,20,70);
            ctx.font = "170px myFirstFont";
            const rnumpos = new Image();
            rnumpos.src = rMr[5].src;
            rnumpos.onload = function(){
                ctx.drawImage(rnumpos,rMr[5].x, rMr[5].y, rMr[5].width, rMr[5].height);
                ctx.fillText(rR, 490, 120);
            }
            const ldogpos = new Image();
            ldogpos.src = lMr[5].src;   
            ldogpos.onload = function(){
                ctx.drawImage(ldogpos,lMr[5].x, lMr[5].y, lMr[5].width, lMr[5].height);
                ctx.fillText(lR, 220, 120);
                myintervhhhal = setInterval(function() { flashing1(); }, 250);

            }

        }
        else if(event.key == "a") {
            document.removeEventListener("keydown",firstbuttendawn);
            rScore += 3;
            fivetimes = 0;
            fflshingb = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "50px myFirstFont";
            ctx.fillText(rScore,691.7,70);
            ctx.fillText(lScore,20,70);
            ctx.font = "170px myFirstFont";
            const rnumpos = new Image();
            rnumpos.src = rMr[2].src;
            rnumpos.onload = function(){
                ctx.drawImage(rnumpos,rMr[2].x, rMr[2].y, rMr[2].width, rMr[2].height);
                ctx.fillText(rR, 490, 120);
            }
            const ldogpos = new Image();
            ldogpos.src = lMr[6].src;   
            ldogpos.onload = function(){
                ctx.drawImage(ldogpos,lMr[6].x, lMr[6].y, lMr[6].width, lMr[6].height);
                ctx.fillText(lR, 220, 120);
                x = 6;
                y = 2;
                c = false;
                isthereaneedforachangeinthelosingside = false;
                functionsArray[3]();
            }
        }
    }
    else{
        document.removeEventListener("keydown",iseqal);
        if(event.key == "k"){
            rScore += 3;
            lScore += 3;
            fivetimes = 0;
            fflshingb = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "50px myFirstFont";
            ctx.fillText(rScore,691.7,70);
            ctx.fillText(lScore,20,70);
            ctx.font = "170px myFirstFont";
            const rnumpos = new Image();
            rnumpos.src = rMr[5].src;
            rnumpos.onload = function(){
                ctx.drawImage(rnumpos,rMr[5].x, rMr[5].y, rMr[5].width, rMr[5].height);
                ctx.fillText(rR, 490, 120);
            }
            const ldogpos = new Image();
            ldogpos.src = lMr[5].src;   
            ldogpos.onload = function(){
                ctx.drawImage(ldogpos,lMr[5].x, lMr[5].y, lMr[5].width, lMr[5].height);
                ctx.fillText(lR, 220, 120);
                myintervhhhal = setInterval(function() { flashing1(); }, 250);

            }

        }
        else if(event.key == "l"){
            document.removeEventListener("keydown",firstbuttendawn);
            lScore += 3;
            fivetimes = 0;
            fflshingb = false;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.font = "50px myFirstFont";
            ctx.fillText(rScore,691.7,70);
            ctx.fillText(lScore,20,70);
            ctx.font = "170px myFirstFont";
            const rnumpos = new Image();
            rnumpos.src = rMr[6].src;
            rnumpos.onload = function(){
                ctx.drawImage(rnumpos,rMr[6].x, rMr[6].y, rMr[6].width, rMr[6].height);
                ctx.fillText(rR, 490, 120);
            }
            const ldogpos = new Image();
            ldogpos.src = lMr[2].src;   
            ldogpos.onload = function(){
                ctx.drawImage(ldogpos,lMr[2].x, lMr[2].y, lMr[2].width, lMr[2].height);
                ctx.fillText(lR, 220, 120);
                x = 6;
                y = 2;
                c = false;
                isthereaneedforachangeinthelosingside = false;
                functionsArray[2]();
            }
        }
    }
}