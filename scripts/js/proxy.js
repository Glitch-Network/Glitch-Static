const prefix = "/uv/service/";

const xor = {
    encode(str) {
        if (!str) return str;
        let result = "";
        for (let i = 0; i < str.length; i++) {
            result += i % 2 ? String.fromCharCode(str.charCodeAt(i) ^ 2) : str[i];
        }
        return encodeURIComponent(result);
    },
    decode(str) {
        if (!str) return str;
        const [input, ...search] = str.split("?");
        let result = "";
        const decoded = decodeURIComponent(input);
        for (let i = 0; i < decoded.length; i++) {
            result += i % 2 ? String.fromCharCode(decoded.charCodeAt(i) ^ 2) : decoded[i];
        }
        return result + (search.length ? "?" + search.join("?") : "");
    },
};

function search(url, search_engine) {
    // Ensure the URL is a string
    url = url.toString();
    if (typeof url !== 'string') {
        throw new TypeError('url must be a string');
    }

    const is_url = url.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
    if (!is_url) {
        // Search query
        return search_engine + encodeURIComponent(url);
    } else {
        // Ensure the URL uses HTTPS
        if (url.startsWith("http://")) {
            url = url.replace("http://", "https://");
        }

        if (!url.startsWith("https://")) {
            url = "https://" + url;
        }
        return url;
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    const search_engine_preference = localStorage.getItem("search_engine");
    let search_engine = "https://www.google.com/search?q="; // Default search engine
    const proxy_bridge = localStorage.getItem("proxy");
    const premium_status = localStorage.getItem("premium") === "true";
    let bridge = "";

    // Set search engine based on preference
    if (search_engine_preference) {
        switch (search_engine_preference) {
            case "Google":
                search_engine = "https://www.google.com/search?q=";
                break;
            case "DuckDuckGo":
                search_engine = "https://duckduckgo.com/?q=";
                break;
            case "Bing":
                search_engine = "https://www.bing.com/search?q=";
                break;
            case "Yahoo":
                search_engine = "https://search.yahoo.com/search?p=";
                break;
            case "Torry":
                search_engine = premium_status ? "https://www.torry.io/search/?type=oniontab&searchby_type=1&page=1&q=" : "https://www.google.com/search?q=";
                break;
            case "Startpage":
                search_engine = premium_status ? "https://www.startpage.com/do/search?query=" : "https://www.google.com/search?q=";
                break;
            case "Qwant":
                search_engine = premium_status ? "https://www.qwant.com/?t=web&q=" : "https://www.google.com/search?q=";
                break;
            case "Brave":
                search_engine = premium_status ? "https://search.brave.com/search?q=" : "https://www.google.com/search?q=";
                break;
            default:
                search_engine = "https://www.google.com/search?q=";
                break;
        }
    }

    // Set proxy bridge based on preference and premium status
    if (premium_status && proxy_bridge) {
        switch (proxy_bridge) {
            case "Glitch EU Proxy":
                bridge = "https://v6-out.onrender.com/llaunch.html?url=";
                break;
            case "12FT":
                bridge = "https://12ft.io/";
                break;
            case "Archive.org/Wayback Machine":
                bridge = "https://web.archive.org/";
                break;
            case "Google Cache":
                bridge = "https://webcache.googleusercontent.com/search?q=cache:";
                break;
            default:
                bridge = "";
                break;
        }
    } else {
        console.log("No bridge available");
    }

    const address = localStorage.getItem("url");
    if (address) {
        // Assuming getURLParameter is defined elsewhere
        const add = getURLParameter("url");
        const url = search(add || address, search_engine);

        const frame = document.getElementById("uv-frame");
        frame.style.display = "block";
        frame.src = prefix + xor.encode(bridge ? bridge + url : url);
    }
});
