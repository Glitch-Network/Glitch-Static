const presets = {
  "Google Slides": "/assets/favicons/slides_favicon.png",
  "Google": "/assets/favicons/google_favicon.png",
  "I-Ready": "/assets/favicons/iready_favicon.png",
  "Clever": "/assets/favicons/clever_favicon.png",
  "FBI" : "https://www.fbi.gov/++theme++fbigov.theme/images/fbi_seal_new.png",
  "Google Classroom" : "/assets/favicons/classroom_favicon.png",
  "Github": "/assets/favicons/github_favicon.jpg",
  "Wikipedia": "/assets/favicons/wiki_favicon.png"
};

document.addEventListener("DOMContentLoaded", function() {
  const code = `
  <style>
  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .flex { /*Flexbox for containers*/
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1; /* Ensure this flex container takes up the remaining space */
  }
  
  .waves {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: -15;
    height: 15vh;
    min-height: 100px;
    max-height: 150px;
  }
  
  .content {
    text-align: center;
    background-color: white;
  }
  
  /* Animation */
  .parallax > use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
  /*Shrinking for mobile*/
  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }
  }
</style>

<div class="flex">
  <div class="content">
  </div>
</div>

<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
  <defs>
    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
  </defs>
  <g class="parallax">
    <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
    <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
  </g>
</svg>

<!-- credit to https://codepen.io/goodkatz/pen/LYPGxQz just in case i forget to add a credits page later -->`;

  const div = document.createElement("div");
  div.innerHTML = code;
  document.body.appendChild(div);

  const script = document.createElement('script');
  script.src = "scripts/js/ai.js";
  document.head.appendChild(script);
  console.log("Loaded AI.js");

  const custom_css = localStorage.getItem("custom_css");

  if (custom_css) {
    const css = document.createElement("style");
    css.innerHTML = custom_css;
    document.body.appendChild(css);
    console.log("Loaded custom CSS");
  }
});

// Store the original document title and favicon hrefs
const originalName = document.title;
const originalFavicons = [];

document.querySelectorAll('link[rel="icon"]').forEach(function(favicon) {
  originalFavicons.push(favicon.href);
});

window.addEventListener("blur", function() {
  if (localStorage.getItem("autohide") === "1") {
    document.title = localStorage.getItem("autohide_preset") || "Google Classroom";
    const preset = localStorage.getItem("autohide_preset") || "Google Classroom";

    const favicons = document.querySelectorAll('link[rel="icon"]');
    favicons.forEach(function(favicon) {
      favicon.href = presets[preset];
    });
  }
});

window.addEventListener("focus", function() {
  if (localStorage.getItem("autohide") === "1") {
    document.title = originalName;

    const favicons = document.querySelectorAll('link[rel="icon"]');
    favicons.forEach(function(favicon, index) {
      favicon.href = originalFavicons[index];
    });
  }
});

// Panic key
if (localStorage.getItem("pkkey") != null) {
  document.addEventListener("keydown", function(event) {
    const pkkey = localStorage.getItem("pkkey");
    if (event.key === pkkey) {
      window.location = localStorage.getItem("destination_pk");
    }
  });
}

if (sessionStorage.getItem("logged_in") != "1" && localStorage.getItem("password") != null){
  x = prompt("Enter the instance password?")
  if (x != localStorage.getItem("password")){ alert("Incorrect password."); window.location="https://google.com"}else{alert("Correct!"); sessionStorage.setItem("logged_in","1")}
}

console.log("Loaded global.js!");
