"use strict";

document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("uv-form");
  const address = document.getElementById("uv-address");
  const searchEngine = document.getElementById("uv-search-engine");
  const error = document.getElementById("uv-error");
  const errorCode = document.getElementById("uv-error-code");

  let add = getURLParameter("url"); // Assuming getURLParameter is defined elsewhere
  address.value = add; // Change form URL value

  try {
    await registerSW(); // Assuming registerSW is defined elsewhere
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    console.error(err); // Using console.error to log the error as well
  }

  // Assuming search function is defined elsewhere and returns a URL
  const url = search(address.value, searchEngine.value); 

  let frame = document.getElementById("uv-frame");
  frame.style.display = "block";
  // Ensure __uv$config is correctly defined and accessible
  frame.src = __uv$config.prefix + __uv$config.encodeUrl(url); 
});
