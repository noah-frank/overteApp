(function () {
    var AppUi = Script.require('appUi'); // AppUI-Modul laden

    var ui; // Variable für das UI-Objekt

    function onOpened() {
        console.log("App geöffnet");
    }

    function onClosed() {
        console.log("App geschlossen");
    }

    function startup() {
        ui = new AppUi({
            buttonName: "APP-NAME", // Name des App-Buttons
            home: Script.resolvePath("app.html"), // Pfad zu deiner HTML-Datei
            graphicsDirectory: Script.resolvePath("./"), // Pfad zu deinen Button-Icons
            onOpened: onOpened, // App geöffnet Event
            onClosed: onClosed // App geschlossen Event
        });
    }

    startup();
}());
