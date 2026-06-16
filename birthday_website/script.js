// ============================
// CANVAS STARS
// ============================

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

const stars = [];

for (let i = 0; i < 250; i++) {

    stars.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        r: Math.random() * 2,

        speed: Math.random() * 0.4 + 0.1

    });

}

function animateStars() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";

    stars.forEach(star => {

        ctx.beginPath();

        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);

        ctx.fill();

        star.y += star.speed;

        if (star.y > canvas.height) {

            star.y = 0;
            star.x = Math.random() * canvas.width;

        }

    });

    requestAnimationFrame(animateStars);

}

animateStars();


// ============================
// TYPING EFFECT
// ============================

const message = `

happy birthday ke-19 ya, Saskiyahhhh🤍
enggaa kerasa yaaa sekarang kamu udah 19 tahun. 
yangg awalnyaa kitaa gaa sengajaa ketemuu di tempatt pkl tapii bisaa sejauhh inii. 
semogaa di umur yang baru ini semuaaa doa dan impian kamu satu-satu bisa terwujud, 
sehatt terus, rezekinya makin lancar, dan selalu dikelilingi orang-orang yang sayanggg sama kamuuu. 
makasihhh yaaa udah hadir di hidup aku dan jadi salah satu alasann aku bisaa senyumm setiap hariii. 
Tetapp jadi Saskiyahhh yang baik, kuat, lucuu, dan apa adanya, karena itu yang bikin kamu spesial di mata akuuuu. 
semogaaa tahun ini isinya lebih banyakkk bahagiaaa daripada sedih, lebih banyak tawa daripada air mata, dan semogaaa akuuu masih bisa nemenin kamu bikin banyak kenangann baruuu. 
once again, happy 19th birthday, Saskiyahhhh 🎂🤍
jangannn lupaa bahagiaaa hari ini, karena ini hari kamuuu. i love you so much!

`;

const typing = document.getElementById("typing");

let index = 0;

function typeLetter() {

    if (index < message.length) {

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter, 35);

    }

}


// ============================
// BUTTON
// ============================

const btn = document.getElementById("open");

btn.addEventListener("click", () => {

    document.getElementById("letter").scrollIntoView({

        behavior: "smooth"

    });

    if (typing.innerHTML === "") {

        typeLetter();

    }

    createConfetti();

});


// ============================
// FLOATING HEARTS
// ============================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize = Math.random() * 20 + 20 + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let y = window.innerHeight;

    let x = parseFloat(heart.style.left);

    const move = setInterval(() => {

        y -= 2;

        x += Math.sin(y / 30);

        heart.style.top = y + "px";

        heart.style.left = x + "px";

        if (y < -50) {

            clearInterval(move);

            heart.remove();

        }

    }, 16);

}

setInterval(createHeart, 800);


// ============================
// CONFETTI
// ============================

function createConfetti() {

    for (let i = 0; i < 180; i++) {

        const conf = document.createElement("div");

        conf.style.position = "fixed";

        conf.style.width = "8px";

        conf.style.height = "16px";

        conf.style.left = Math.random() * 100 + "vw";

        conf.style.top = "-20px";

        conf.style.background = `hsl(${Math.random()*80+180},100%,60%)`;

        conf.style.zIndex = "9999";

        document.body.appendChild(conf);

        let y = -20;

        let rotate = 0;

        const speed = Math.random() * 4 + 2;

        const anim = setInterval(() => {

            y += speed;

            rotate += 8;

            conf.style.top = y + "px";

            conf.style.transform = `rotate(${rotate}deg)`;

            if (y > window.innerHeight + 30) {

                clearInterval(anim);

                conf.remove();

            }

        }, 16);

    }

}


// ============================
// AUTO SLIDER
// ============================

const slider = document.querySelector(".slider");

let scrollPos = 0;

function autoSlide() {

    if (!slider) return;

    scrollPos += 1;

    slider.scrollLeft = scrollPos;

    if (scrollPos >= slider.scrollWidth - slider.clientWidth) {

        scrollPos = 0;

    }

}

setInterval(autoSlide, 25);


// ============================
// HERO FADE
// ============================

window.addEventListener("load", () => {

    document.querySelector(".hero").style.opacity = "0";

    setTimeout(() => {

        document.querySelector(".hero").style.transition = "1.5s";

        document.querySelector(".hero").style.opacity = "1";

    }, 300);

});


// ============================
// PARALLAX
// ============================

window.addEventListener("mousemove", e => {

    const x = (e.clientX / window.innerWidth - 0.5) * 20;

    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    document.querySelector(".glass").style.transform =
        `translate(${x}px,${y}px)`;

});


// ============================
// ENDING GLOW
// ============================

setInterval(() => {

    const end = document.querySelector(".ending h1");

    if (!end) return;

    end.style.textShadow =
        `0 0 ${20 + Math.random()*30}px gold`;

}, 500);
//======================
// LOADER
//======================

window.onload = function(){

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

document.getElementById("giftBox").style.display="flex";

},1000);

},3500);

}



//======================
// GIFT
//======================

document.addEventListener("click",function(e){

if(e.target.classList.contains("gift")){

document.getElementById("giftBox").style.display="none";

document.querySelector(".hero").scrollIntoView({

behavior:"smooth"

});

createConfetti();

}

});
//=========================

// MUSIC

//=========================

const music=document.getElementById("bgmusic");

const musicBtn=document.getElementById("musicBtn");

let play=false;

musicBtn.onclick=()=>{

if(!play){

music.play();

musicBtn.innerHTML="🎵";

play=true;

}

else{

music.pause();

musicBtn.innerHTML="🔇";

play=false;

}

}



//=========================

// FLOATING HEARTS

//=========================

function floatingHeart(){

const h=document.createElement("div");

h.className="heart";

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(20+Math.random()*35)+"px";

h.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},8000);

}

setInterval(floatingHeart,400);



//=========================

// FIREWORKS

//=========================

const fw=document.getElementById("fireworks");

const fctx=fw.getContext("2d");

fw.width=window.innerWidth;

fw.height=window.innerHeight;

let particles=[];

function explode(x,y){

for(let i=0;i<80;i++){

particles.push({

x:x,

y:y,

vx:(Math.random()-0.5)*8,

vy:(Math.random()-0.5)*8,

life:100,

size:Math.random()*4+2

});

}

}

function animateFire(){

fctx.clearRect(0,0,fw.width,fw.height);

particles.forEach((p,index)=>{

p.x+=p.vx;

p.y+=p.vy;

p.life--;

fctx.beginPath();

fctx.arc(p.x,p.y,p.size,0,Math.PI*2);

fctx.fillStyle=

`hsl(${Math.random()*360},100%,60%)`;

fctx.fill();

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animateFire);

}

animateFire();

setInterval(()=>{

explode(

Math.random()*fw.width,

Math.random()*fw.height/2

);

},1200);



//=========================

// CURSOR GLOW

//=========================

const glow=document.createElement("div");

glow.style.position="fixed";

glow.style.width="20px";

glow.style.height="20px";

glow.style.borderRadius="50%";

glow.style.background="#60a5fa";
glow.style.boxShadow="0 0 25px #ec4899";

glow.style.pointerEvents="none";

glow.style.filter="blur(10px)";

glow.style.zIndex="99999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-10+"px";

glow.style.top=e.clientY-10+"px";

});
//==========================

// PREMIUM INTRO

//==========================

const intro=document.getElementById("intro");

const startBtn=document.getElementById("startBtn");

const book=document.getElementById("book");

const premiumText=`

Happy Birthday ❤️

Semoga hari ini menjadi awal dari

kebahagiaan yang luar biasa.

Semoga semua impianmu

menjadi kenyataan.

Terima kasih telah menjadi

seseorang yang sangat berarti.

Keep smiling 😊

`;

startBtn.onclick=()=>{

intro.style.opacity="0";

setTimeout(()=>{

intro.style.display="none";

book.style.display="block";

setTimeout(()=>{

book.classList.add("open");

typePremium();

},500);

},1200);

}



//==========================

// PREMIUM TYPING

//==========================

let premiumIndex=0;

function typePremium(){

if(premiumIndex < premiumText.length){

document.getElementById("premiumLetter").innerHTML +=
premiumText.charAt(premiumIndex);

premiumIndex++;

setTimeout(typePremium,35);

}else{

// Tunggu 3 detik setelah selesai membaca

setTimeout(()=>{

book.style.transition="1s";

book.style.opacity="0";

book.style.transform="translate(-50%,-50%) scale(0.6)";

setTimeout(()=>{

book.style.display="none";

// lanjut ke galeri foto

document.getElementById("cinematic").scrollIntoView({

behavior:"smooth"

});

},1000);

},3000);

}

}
//========================

// PARALLAX EFFECT

//========================

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

document.querySelectorAll(".planet").forEach((p,i)=>{

const speed=(i+1)*12;

p.style.transform=

`translate(${x*speed}px,${y*speed}px)`;

});

});



//========================

// CINEMATIC PHOTO

//========================

const cards=document.querySelectorAll(".photoCard");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0px)";

}

});

});

cards.forEach(card=>{

card.style.opacity=0;

card.style.transform="translateY(120px)";

card.style.transition="1s";

observer.observe(card);

});



//========================

// AUTO ZOOM

//========================

let current=0;

setInterval(()=>{

cards.forEach(c=>{

c.style.transform="scale(1)";

});

cards[current].style.transform="scale(1.08)";

current++;

if(current>=cards.length){

current=0;

}

},2500);



//========================

// GOLD SPARKLES

//========================

function sparkle(){

const s=document.createElement("div");

s.innerHTML="✨";

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.fontSize=(10+Math.random()*25)+"px";

s.style.pointerEvents="none";

s.style.transition="2s";

document.body.appendChild(s);

setTimeout(()=>{

s.style.opacity=0;

s.style.transform="scale(2)";

},100);

setTimeout(()=>{

s.remove();

},2000);

}

setInterval(sparkle,300);
//======================

// GIFT OPEN

//======================

const gift=document.getElementById("gift3d");

if(gift){

gift.onclick=()=>{

document.querySelector(".lid").style.transform=

"rotate(-135deg)";

setTimeout(()=>{

book.style.display="block";

book.classList.add("open");

typePremium();

},1200);

};

}



//======================

// SAKURA

//======================

function sakura(){

const s=document.createElement("div");

s.innerHTML="🌸";

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top="-30px";

s.style.fontSize=(15+Math.random()*20)+"px";

s.style.pointerEvents="none";

document.body.appendChild(s);

let y=-30;

let x=parseFloat(s.style.left);

const move=setInterval(()=>{

y+=2;

x+=Math.sin(y/30);

s.style.top=y+"px";

s.style.left=x+"px";

if(y>window.innerHeight){

clearInterval(move);

s.remove();

}

},16);

}

setInterval(sakura,500);



//======================

// CURSOR GLOW

//======================

const cursor=document.createElement("div");

cursor.style.position="fixed";

cursor.style.width="25px";

cursor.style.height="25px";

cursor.style.borderRadius="50%";

cursor.style.background="rgba(255,215,0,.7)";

cursor.style.filter="blur(10px)";

cursor.style.pointerEvents="none";

cursor.style.zIndex="99999";

document.body.appendChild(cursor);

document.addEventListener("mousemove",e=>{

cursor.style.left=e.clientX-12+"px";

cursor.style.top=e.clientY-12+"px";

});



//======================

// ENDING FIREWORK

//======================

function grandEnding(){

for(let i=0;i<20;i++){

setTimeout(()=>{

explode(

Math.random()*window.innerWidth,

Math.random()*window.innerHeight/2

);

},i*300);

}

}

setTimeout(grandEnding,8000);
document.getElementById("closeBook").onclick=()=>{

book.style.opacity="0";

setTimeout(()=>{

book.style.display="none";

},800);

}