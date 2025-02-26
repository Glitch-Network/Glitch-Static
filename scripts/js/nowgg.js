// Fix to NOW.GG Roblox to work with Glitch

if (localStorage.getItem("url").includes("now.gg")) {
    // Retrieve the current value and convert it to a number
        
    var reloadCount = parseInt(localStorage.getItem("reload_gg"), 10);
    
    // If there is no value set yet, initialize it to 0 and refresh
    if (isNaN(reloadCount)) {
        localStorage.setItem("reload_gg", 0);
        window.location.reload();
    }
    if (!localStorage.getItem("reload_gg") == "true") {
    
    
    // Check if the reload limit has been reached
    if (reloadCount < 5) {
        // Increment the reload counter
        localStorage.setItem("reload_gg", reloadCount + 1);
        window.location.reload();
    } else {
        // Set the flag to stop further reloads
        localStorage.setItem("reload_gg", "true");
    }
    
    }
    }