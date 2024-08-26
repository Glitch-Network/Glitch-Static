
let country_codes = {
'US': 'United States 🇺🇸',
'CA': 'Canada 🇨🇦',
'MX': 'Mexico 🇲🇽',
'BR': 'Brazil 🇧🇷',
'AR': 'Argentina 🇦🇷',
'GB': 'United Kingdom 🇬🇧',
'FR': 'France 🇫🇷',
'DE': 'Germany 🇩🇪',
'IT': 'Italy 🇮🇹',
'ES': 'Spain 🇪🇸',
'CN': 'China 🇨🇳',
'JP': 'Japan 🇯🇵',
'IN': 'India 🇮🇳',
'RU': 'Russia 🇷🇺',
'AU': 'Australia 🇦🇺',
'ZA': 'South Africa 🇿🇦',
'NG': 'Nigeria 🇳🇬',
'EG': 'Egypt 🇪🇬',
'KE': 'Kenya 🇰🇪',
'SA': 'Saudi Arabia 🇸🇦',
'AE': 'United Arab Emirates 🇦🇪',
'KR': 'South Korea 🇰🇷',
'TR': 'Turkey 🇹🇷',
'IR': 'Iran 🇮🇷',
'PK': 'Pakistan 🇵🇰',
'ID': 'Indonesia 🇮🇩',
'TH': 'Thailand 🇹🇭',
'MY': 'Malaysia 🇲🇾',
'SG': 'Singapore 🇸🇬',
'PH': 'Philippines 🇵🇭',
'VN': 'Vietnam 🇻🇳',
'BD': 'Bangladesh 🇧🇩',
'UA': 'Ukraine 🇺🇦',
'PL': 'Poland 🇵🇱',
'NL': 'Netherlands 🇳🇱',
'BE': 'Belgium 🇧🇪',
'CH': 'Switzerland 🇨🇭',
'SE': 'Sweden 🇸🇪',
'NO': 'Norway 🇳🇴',
'DK': 'Denmark 🇩🇰',
'FI': 'Finland 🇫🇮',
'IE': 'Ireland 🇮🇪',
'NZ': 'New Zealand 🇳🇿',
'CL': 'Chile 🇨🇱',
'CO': 'Colombia 🇨🇴',
'VE': 'Venezuela 🇻🇪',
'PE': 'Peru 🇵🇪',
'CU': 'Cuba 🇨🇺',
'HT': 'Haiti 🇭🇹',
'JM': 'Jamaica 🇯🇲',
'TW': 'Taiwan 🇹🇼',
'HK': 'Hong Kong 🇭🇰',
'MO': 'Macau 🇲🇴',
'IL': 'Israel 🇮🇱',
'PS': 'Palestine 🇵🇸',
'JO': 'Jordan 🇯🇴',
'LB': 'Lebanon 🇱🇧',
'SY': 'Syria 🇸🇾',
'IQ': 'Iraq 🇮🇶',
'KW': 'Kuwait 🇰🇼',
'OM': 'Oman 🇴🇲',
'QA': 'Qatar 🇶🇦',
'BH': 'Bahrain 🇧🇭',
'YE': 'Yemen 🇾🇪',
'AM': 'Armenia 🇦🇲',
'AZ': 'Azerbaijan 🇦🇿',
'GE': 'Georgia 🇬🇪',
'AF': 'Afghanistan 🇦🇫',
'KZ': 'Kazakhstan 🇰🇿',
'UZ': 'Uzbekistan 🇺🇿',
'TM': 'Turkmenistan 🇹🇲',
'TJ': 'Tajikistan 🇹🇯',
'KG': 'Kyrgyzstan 🇰🇬',
'MN': 'Mongolia 🇲🇳',
'NP': 'Nepal 🇳🇵',
'LK': 'Sri Lanka 🇱🇰',
'MM': 'Myanmar 🇲🇲',
'KH': 'Cambodia 🇰🇭',
'LA': 'Laos 🇱🇦',
'BN': 'Brunei 🇧🇳',
'BT': 'Bhutan 🇧🇹',
'MV': 'Maldives 🇲🇻',
'BY': 'Belarus 🇧🇾',
'MD': 'Moldova 🇲🇩',
'RO': 'Romania 🇷🇴',
'BG': 'Bulgaria 🇧🇬',
'HU': 'Hungary 🇭🇺',
'CZ': 'Czech Republic 🇨🇿',
'SK': 'Slovakia 🇸🇰',
'SI': 'Slovenia 🇸🇮',
'HR': 'Croatia 🇭🇷',
'BA': 'Bosnia and Herzegovina 🇧🇦',
'ME': 'Montenegro 🇲🇪',
'RS': 'Serbia 🇷🇸',
'AL': 'Albania 🇦🇱',
'MK': 'North Macedonia 🇲🇰',
'GR': 'Greece 🇬🇷',
'CY': 'Cyprus 🇨🇾',
'MT': 'Malta 🇲🇹',
'IS': 'Iceland 🇮🇸',
'PT': 'Portugal 🇵🇹',
'LU': 'Luxembourg 🇱🇺',
'LI': 'Liechtenstein 🇱🇮',
'MC': 'Monaco 🇲🇨',
'SM': 'San Marino 🇸🇲',
'VA': 'Vatican City 🇻🇦',
}



document.addEventListener("DOMContentLoaded", function() {
    const engine = document.getElementById("engine");
    const adsBtn = document.getElementById("ads");
    const secondProxy = document.getElementById("proxy-settings");
    const premium = localStorage.getItem("premium") === "true";
    const hideAd = localStorage.getItem("hide_ad") === "1";




    document.getElementById("useKey").addEventListener("click", function() { useKey(); });

    if (premium) {
        engine.innerHTML += `<option value="Torry">Torry</option>
                             <option value="Startpage">Startpage</option>
                             <option value="Qwant">Qwant</option>
                             <option value="Brave">Brave Search</option>
                             <option value="Google Scholar">Google Scholar</option>`;
        secondProxy.style.display = "block";
    }

    adsBtn.textContent = hideAd ? "Show ADs" : "Hide ADs";
    adsBtn.addEventListener("click", function() {
        const hideAd = localStorage.getItem("hide_ad") === "1";
        localStorage.setItem("hide_ad", hideAd ? "0" : "1");
        adsBtn.textContent = hideAd ? "Show ADs" : "Hide ADs";
    });


    if (localStorage.getItem("themes") != null) {
        document.getElementById("theme").value = localStorage.getItem("themes");
    }
    if (localStorage.getItem("search_engine") != null) {
        document.getElementById("engine").value = localStorage.getItem("search_engine");
    }

    setInterval(function() {
        let env = document.getElementById("engine").value;
        localStorage.setItem("search_engine", env);
    }, 10000);

    if (localStorage.getItem("themes") === "true") {
        document.getElementById("theme").style.display = "block";
        document.getElementById("theme_div").style.display = "block";
    }
    if (localStorage.getItem("ai_teacher_detection") === "true") {
        document.getElementById("ai").style.display = "block";
        document.getElementById("ai_div").style.display = "block";
    }

    createCountryDropdown();

    updateTheme();
    const engineSelect = document.getElementById("engine");
    const proxySelect = document.getElementById("proxy");
    const aiToggle = document.getElementById("ai");

    if (localStorage.getItem("search_engine")) {
        engineSelect.value = localStorage.getItem("search_engine");
    }
    if (localStorage.getItem("proxy")) {
        proxySelect.value = localStorage.getItem("proxy");
    }

    engineSelect.addEventListener("change", function() {
        localStorage.setItem("search_engine", this.value);
    });
    proxySelect.addEventListener("change", function() {
        localStorage.setItem("proxy", this.value);
    });

    updateProxy();

    // ????????????? aiToggle.style.display = localStorage.getItem("ai_teacher_detection") === "true" ? "block" : "none";

    if (localStorage.getItem("key") != null) {
        const token = localStorage.getItem("key");
        if (!validateToken(token)) {
            localStorage.setItem("key", "");
            localStorage.setItem("premium", "false");
            alert("Your key is expired! Please use a new key!");
        }
    }

    if (localStorage.getItem("premium") === "true") {
        document.getElementById("keyDiv").style.display = "none";
        document.getElementById("useKey").style.display = "none";
        document.getElementById("options").style.display = "block";
    }
});

function createCountryDropdown() {
    const select = document.getElementById("proxy");

    // Fetch the proxy list
    fetch("plist")
        .then(response => response.json())  // Assuming the plist is in JSON format
        .then(data => {
            console.log("Fetched data:", data);  // Log fetched data

            // Extract the list of countries from the proxies
            const countryAvailable = data.map(entry => entry.country);
            console.log("Countries with proxies:", countryAvailable);  // Log available countries

            // Assuming country_codes is a predefined object
            for (const key in country_codes) {
                if (!countryAvailable.includes(key)) {
                    country_codes[key] = "";
                }
            }

            console.log("Updated country_codes:", country_codes);  // Log updated country_codes

            // Populate the dropdown menu
            for (const [code, name] of Object.entries(country_codes)) {
                if (name) {
                    const option = document.createElement('option');
                    option.value = code;
                    option.textContent = name;
                    select.appendChild(option);
                }
            }
        })
        .catch(error => {
            console.warn("Unable to fetch proxies:", error);
        });

    console.log("Loaded proxies!");
}


function updateProxy() {
    const currentProxy = localStorage.getItem("proxy");
    if (currentProxy) {
        document.getElementById("proxy").value = currentProxy;
    }
}

function save() {
    let data = "";
    for (const [key, value] of Object.entries(localStorage)) {
        if (key.includes("data")) {
            data += key + "=" + value + "\n";
        }
    }

    const blob = new Blob([btoa(data)], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.glitch";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function toggle(target) {
    const current = localStorage.getItem(target) === "true";
    localStorage.setItem(target, current ? "false" : "true");
}

function validateToken(token) {
    const invalidNumbers = ["1", "3", "5", "7", "9", "0"];
    for (let number of invalidNumbers) {
        if (token.split("tkn_exp")[0].includes(number)) {
            return false;
        }
    }

    const validLengths = [25, 28, 35];
    if (!validLengths.includes(token.split("tkn_exp")[0].length)) {
        return false;
    }

    if (token.includes("cyn") && token.includes("tkn")) {
        if (token.includes("tkn_exp")) {
            const currentYear = new Date().getFullYear();
            const decadePrefix = currentYear.toString().substring(0, 3);

            let tokenDatePart = token.split("tkn_exp")[1];
            let day, month, year;

            if (tokenDatePart.startsWith("d2")) {
                day = tokenDatePart.substring(2, 4);
                month = tokenDatePart.substring(4, 6);
                year = tokenDatePart.substring(6, 7);
            } else {
                day = tokenDatePart.substring(0, 2);
                month = tokenDatePart.substring(2, 4);
                year = tokenDatePart.substring(4, 5);
            }

            const fullYear = decadePrefix + year;
            const date = new Date(`${fullYear}-${month}-${day}`);
            const currentDate = new Date();

            if (currentDate > date) {
                return false;
            }
            return true;
        }
        alert("It appears this deployment of Glitch is using a V1 token! Refer to the Discord to get a new key!");
        return false;
    } else {
        return false;
    }
}

function verify_dat_sheet() {
    const token = document.getElementById("key").value;
    if (validateToken(token)) {
        localStorage.setItem("key", token);
        localStorage.setItem("premium", "true");

        document.getElementById("keyDiv").style.display = "none";
        document.getElementById("useKey").style.display = "none";
        document.getElementById("options").style.display = "block";
    } else {
        if (token != "") {
            alert("Invalid premium key");
        }
        localStorage.setItem("premium", "false");
    }
}


function useKey() {
    token = document.getElementById("key").value

    verify_dat_sheet();
   
}

function updateTheme() {
    let savedTheme = localStorage.getItem("themes");
    
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
    }
}

function toggle_autohide() {
    const autohide = localStorage.getItem("autohide") === "1";
    
    localStorage.setItem("autohide", autohide ? "0" : "1");
    alert("Set!");
}

console.log("Loaded settings.js!");