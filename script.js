const terminalMessages = [
  "> BIRTHDAY HACKED!!!",
  "",
  "> Initializing birthday system...",
  "> Connecting to happiness database...",
  "> Searching for birthday person...",
  "",
  "> PERSON FOUND: MARIAN NICOLE",
  "> Birthday verification: CONFIRMED",
  "",
  "> Checking happiness level...",
  "> WARNING: More happiness required!",
  "",
  "> Preparing something special...",
  "> Loading birthday_surprise.exe..."
];

const letter = `dear marian nicole,

happy birthdayyy! 🎀

i hope today reminds you kung gaano ka ka special and how much happiness you deserve. sana this new chapter of your life gives you more reasons to smile, more memories na pwede mong balikan, and more moments that make you genuinely happy.

so ayunnn hehe, medyo mahirap gumawa ng program na ’to BWAHAHAHA, but i really wanted to give you something different po. something na hindi lang basta another “happy birthday” message na ise send lang, but something i actually took my time making, especially for you and for you only, nikol nikol. 🤭

and since it’s your day, i’ll admit one tiny thing...

your smile is kinda unfair.

kasi somehow, kapag nakikita kitang nakangiti, parang nadadamay din ako BWAHAHAHA. you have this way of making an ordinary day feel a little better without even trying. and honestly, getting to know you was something i didn’t expect, but i’m really glad it happened.

stay being the marian nicole mangaser that you are, the independent, beautiful, funny, and amazing person that makes you, you. never feel like you have to change yourself just to impress or please anyone. just continue being yourself, kasi that version of you is already more than enough.

sana ma achieve mo lahat ng mga bagay na tahimik mong hinihiling and everything you’ve been working hard for. and whenever life gets tiring or things become too much, i hope you remember na may mga taong naniniwala sa’yo, proud sa’yo, at silently cheering for you...

and maybeeee, there’s one person cheering just a little louder than the others. 🤭 hehe

enjoy your day, birthday girl. kain ka marami, smile ka marami, and sulitin mo yung araw na para sa’yo. you deserve all the happiness, love, and good things coming your way. 💗

happy birthday again, nics. ♡

someone who spent way too much time coding this just to make you smile 💻💗`;

const vaultTitles = [
  "SOMETHING I NOTICED ABOUT YOU",
  "A TINY CONFESSION",
  "A BIRTHDAY WISH",
  "ONE LAST THING..."
];

const vaultMessages = [
`you have this way of making yourself noticeable without even trying. siguro it’s your smile, your laugh, or simply the way you are. pero habang mas nakikilala kita, mas napapansin ko rin yung little things about you.

kahit pagod na pagod ka na sa mga personal na nangyayari sa life mo, sabayan pa ng schoolworks, you still choose to smile, laugh, and enjoy the little moments. kahit may mga problems kang hindi palaging sinasabi, you still manage to bring such a warm and happy energy sa mga taong nasa paligid mo.

kaya ngayong birthday mo, i hope you get to enjoy the same happiness and comfort that you naturally give to others. sana kahit for today, makalimutan mo muna yung stress, pagod, at problems and just enjoy your day. you deserve moments where you can simply smile, laugh, and feel genuinely happy without having to worry about anything. ♡`,

`ayunnn, may pa tiny tiny confession pang nalalaman si koyah WHAHAHAHA. honestly, first time kong gumawa ng ganitong eme eme na work BWAHAHAHA, but it’s okayyy, ginawa ko naman ’to para sa isang taong nagpapasaya sakin eh. kaya naisipan ko, “why not make something super special and unique for her birthday instead of a simple message na ise send ko lang?” hehe. at least may konting effort and something na pwede mong balikan whenever you want. sana kahit papaano, napangiti kita habang nagpipindot dyan. ♡`,

`my wish for you is simple: i hope you become genuinely happy with wherever life takes you. i hope you achieve all the things you’ve been working so hard for and continue becoming the person you’ve always wanted to be. and most of all, i hope you win all the silent battles you don’t always talk about. you deserve to feel proud of yourself, to have peace in your heart, and to experience all the good things life has waiting for you. ♡`,

`if this program managed to make you smile even just once, then every error, every missing semicolon, and every minute i spent making this was completely worth it. ay wow, panis! full english si koyah BWAHAHAHAHAHA ♡`
];

const finalMessages = [
  "> birthday_surprise.exe",
  "",
  "> Finishing birthday protocol...",
  "",
  "> [OK] gift delivered",
  "> [OK] birthday letter delivered",
  "> [OK] secret messages unlocked",
  "> [OK] birthday wish sent",
  "",
  "> Running final check...",
  "",
  "> FINAL OBJECTIVE:",
  "> make marian nicole smile",
  "",
  "> STATUS:",
  "> hopefully successful ♡",
  "",
  "> and before this program ends...",
  "",
  "> happy birthday, nics. ♡",
  "",
  "> thank you for being one of the",
  "> unexpected good things in my life."
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function show(id) {
  $$(".screen").forEach(screen => screen.classList.remove("active"));
  $("#" + id).classList.add("active");
  window.scrollTo({top: 0, behavior: "instant"});
}

async function typeLines(el, lines, speed = 28) {
  el.textContent = "";
  for (const line of lines) {
    for (const ch of line) {
      el.textContent += ch;
      await sleep(speed);
    }
    el.textContent += "\n";
    await sleep(80);
  }
}

async function boot() {
  await typeLines($("#terminalText"), terminalMessages, 24);
  $("#progressWrap").classList.remove("hidden");
  for (let i = 0; i <= 100; i++) {
    $("#progressBar").style.width = i + "%";
    $("#progressLabel").textContent = i + "%";
    await sleep(18);
  }
  $("#terminalText").textContent += "\n> SURPRISE READY!\n> Click OPEN SURPRISE to continue.\n";
  $("#openSurprise").classList.remove("hidden");
}

function confetti() {
  for (let i = 0; i < 110; i++) {
    const p = document.createElement("i");
    p.className = "confetti-piece";
    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (2 + Math.random() * 3) + "s";
    p.style.animationDelay = Math.random() + "s";
    p.style.opacity = 0.5 + Math.random() * 0.5;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 6000);
  }
}

$("#openSurprise").addEventListener("click", () => show("gift"));
$("#giftButton").addEventListener("click", () => {
  $("#giftBefore").classList.add("hidden");
  $("#giftAfter").classList.remove("hidden");
  confetti();
});
$("#toLetter").addEventListener("click", () => {
  show("letter");
  typeLetter();
});

let letterStarted = false;
async function typeLetter() {
  if (letterStarted) return;
  letterStarted = true;
  $("#letterText").textContent = "";
  for (const ch of letter) {
    $("#letterText").textContent += ch;
    await sleep(12);
  }
  $("#typingStatus").innerHTML = "<em>made with a little code and a lot of thought ♡</em>";
  $("#toVault").classList.remove("hidden");
}

$("#toVault").addEventListener("click", () => show("vault"));

const opened = [false, false, false, false];
const unlocked = [true, false, false, false];
const progressTexts = [
  "message 02 unlocked ♡",
  "message 03 unlocked ♡",
  "final message unlocked ♡",
  "ALL MESSAGES UNLOCKED ♡"
];

$$(".card-open").forEach((button, i) => {
  button.addEventListener("click", () => openCard(i));
});

function openCard(i) {
  if (!unlocked[i]) return;

  const firstOpen = !opened[i];
  opened[i] = true;

  $("#modalTitle").textContent = vaultTitles[i];
  $("#modalMessage").textContent = vaultMessages[i];
  $("#modal").dataset.i = String(i);
  $("#modal").dataset.first = firstOpen ? "1" : "0";
  $("#modal").classList.remove("hidden");
}

$("#closeModal").addEventListener("click", () => {
  const i = Number($("#modal").dataset.i);
  const firstOpen = $("#modal").dataset.first === "1";
  $("#modal").classList.add("hidden");

  const card = $$(".vault-card")[i];
  const button = card.querySelector(".card-open");
  button.disabled = false;
  button.textContent = "OPEN AGAIN ♡";
  card.querySelector(".card-status").textContent = "message received ♡";

  if (firstOpen) {
    if (i < 3) {
      unlocked[i + 1] = true;
      const next = $$(".vault-card")[i + 1];
      const nextButton = next.querySelector(".card-open");
      nextButton.disabled = false;
      nextButton.textContent = "OPEN ♡";
      next.querySelector(".card-status").textContent = "UNLOCKED";
    }

    $("#vaultProgress").textContent = progressTexts[i];

    if (i === 3) {
      $("#toCake").classList.remove("hidden");
    }
  }
});

$("#toCake").addEventListener("click", () => show("cake"));

$("#blow").addEventListener("click", async () => {
  $(".flames").style.opacity = "0";
  $("#blow").classList.add("hidden");
  $("#wish").innerHTML = "<em>wish sent ♡</em>";
  confetti();
  await sleep(1200);
  $("#wish").classList.add("hidden");
  $("#afterWish").textContent = "i hope that whatever you wished for finds its way to you. ♡";
  $("#toFinal").classList.remove("hidden");
});

$("#toFinal").addEventListener("click", () => {
  show("final");
  startFinal();
});

let finalStarted = false;
async function startFinal() {
  if (finalStarted) return;
  finalStarted = true;
  await typeLines($("#finalText"), finalMessages, 28);
  $("#finalStatus").textContent = "birthday_surprise.exe completed successfully ♡";
  await sleep(1400);
  $("#finalStatus").textContent = "thank you for opening this little surprise ♡";
  $("#replay").classList.remove("hidden");
}

$("#replay").addEventListener("click", () => location.reload());

boot();
