// ✨ typing intro
const introText = "Hey beautiful (Victoria)… I made something just for you 💖";
let i = 0;
const introEl = document.getElementById("introText");

function typeIntro(){
  if(i < introText.length){
    introEl.innerHTML += introText.charAt(i);
    i++;
    setTimeout(typeIntro, 50);
  }
}
typeIntro();

// open card
document.getElementById("openBtn").onclick = () => {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("mainCard").classList.remove("hidden");
  typeMessage();
};

// 💌 love message typing
const message = `Today the world celebrates the day you were born.
But for me… it’s the day my favorite person came into existence.

Aberu Aitwaan!! you make my life brighter,
my days happier,
and my future more exciting.

Happy Birthday my queen 👑`;

let j=0;
function typeMessage(){
  if(j < message.length){
    document.getElementById("loveMessage").innerHTML += message.charAt(j);
    j++;
    setTimeout(typeMessage,40);
  }
}

// 🎉 confetti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti(){
  for(let i=0;i<150;i++){
    confetti.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      size: Math.random()*5+2,
      speed: Math.random()*3+1
    });
  }
}

function drawConfetti(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  confetti.forEach(c=>{
    ctx.fillRect(c.x,c.y,c.size,c.size);
    c.y += c.speed;
    if(c.y > canvas.height) c.y = 0;
  });
  requestAnimationFrame(drawConfetti);
}

document.getElementById("finalBtn").onclick = () => {
  document.getElementById("mainCard").classList.add("hidden");
  document.getElementById("finalMessage").classList.remove("hidden");
  createConfetti();
  drawConfetti();
};
