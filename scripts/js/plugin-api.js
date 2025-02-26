// Plugin API - Glitch Network 2024
// Don't remove this credit, please.

window.glitch_api = {
    plugin_list: {},
    importCss: function(url) {
        const link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        document.head.appendChild(link);
    },
    loadScript: function(url) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        document.head.appendChild(script);
    },
    clean_plugins: function(text) {
        const restricted_points = ["loadPluginSafe", "loadPlugin"];
        restricted_points.forEach(restricted => {
            text = text.replace(new RegExp(restricted, 'g'), "empty");
        });
        return text;
    },
    empty: function() {
        return "Plugin attempted to call a restricted Glitch Plugin API endpoint";
    },
    loadPluginSafe: function(url, name, strict) {
        fetch(url)
            .then(response => response.text())
            .then(scriptContent => {
                scriptContent = this.clean_plugins(scriptContent);
                scriptContent = `
                    ${strict ? '"use strict";' : ''}
                    try {
                        ${scriptContent}
                        console.log("[GLITCH PLUGIN API] Loaded Glitch plugin: " + "${name}");
                    } catch(e) {
                        console.warn("[GLITCH PLUGIN API] Failure in Glitch plugin: " + "${name}" + " - " + e);
                    }
                `;
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.innerHTML = scriptContent;
                document.head.appendChild(script);
                this.plugin_list[name] = url;
            });
    },
    loadPlugin: function(url, name) {
        fetch(url)
            .then(response => response.text())
            .then(scriptContent => {
                scriptContent = this.clean_plugins(scriptContent);
                scriptContent = `
                    ${scriptContent}
                    console.log("[GLITCH PLUGIN API] Loaded Glitch plugin: " + "${name}");
                `;
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.innerHTML = scriptContent;
                document.head.appendChild(script);
            });
    },
    removePlugin: function(name) {
        if (this.plugin_list[name]) {
            delete this.plugin_list[name];
            console.log("[GLITCH PLUGIN API] Removed Glitch plugin: " + name);
        } else {
            console.warn("[GLITCH PLUGIN API] Attempted to remove non-existing plugin: " + name);
        }
    }
};



// Load plugins

plugins = localStorage.getItem("glitch_plugins")

if (plugins) {
    plugins = JSON.parse(plugins);

    