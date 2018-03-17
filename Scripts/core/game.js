/// <reference path="_references.ts"/>
// IIFE - Immediately Invoked Function Expression
(function () {
    // Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    var assetManager;
    var assetManifest;
    var currentScene;
    var currentState;
    var keyboardManager;
    var textureAtlasData;
    var textureAtlas;
    textureAtlasData = {
        "images": [
            ""
            //"./Assets/sprites/textureAtlas.png"
        ],
        "frames": [
            [2, 2, 226, 178, 0, 0, 0],
            [2, 182, 39, 40, 0, 0, 0],
            [43, 182, 32, 40, 0, 0, 0],
            [77, 182, 23, 40, 0, 0, 0],
            [102, 182, 15, 40, 0, 0, 0],
            [119, 182, 10, 40, 0, 0, 0],
            [131, 182, 15, 40, 0, 0, 0],
            [148, 182, 24, 40, 0, 0, 0],
            [174, 182, 32, 40, 0, 0, 0],
            [208, 182, 40, 40, 0, 0, 0],
            [2, 224, 41, 40, 0, 0, 0],
            [45, 224, 62, 62, 0, 0, 0],
            [109, 224, 62, 51, 0, 0, 0],
            [173, 224, 62, 51, 0, 0, 0],
            [2, 288, 62, 51, 0, 0, 0],
            [2, 341, 200, 60, 0, 0, 0],
            [2, 403, 200, 60, 0, 0, 0]
        ],
        "animations": {
            "cloud": { "frames": [0] },
            "coin": {
                "frames": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                "speed": 1
            },
            "island": { "frames": [11] },
            "plane": {
                "frames": [12, 13, 14],
                "speed": 0.5
            },
            "restartButton": { "frames": [15] },
            "startButton": { "frames": [16] }
        }
    };
    assetManifest = [
        { id: "textureAtlas", src: "./Assets/sprites/textureAtlas.png" },
        { id: "ocean", src: "./Assets/images/ocean.gif" },
        { id: "engine", src: "./Assets/audio/engine.ogg" },
        { id: "thunder", src: "./Assets/audio/thunder.ogg" },
        { id: "yay", src: "./Assets/audio/yay.ogg" }
    ];
    // preloads assets
    function Init() {
        console.log("Initialization Started...");
        assetManager = new createjs.LoadQueue(); // creates the assetManager object
        assetManager.installPlugin(createjs.Sound); // asset manager can also load sounds
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        textureAtlasData.images = [assetManager.getResult("textureAtlas")];
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // turn this on for buttons
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        keyboardManager = new managers.Keyboard();
        managers.Game.keyboardManager = keyboardManager;
        managers.Game.assetManager = assetManager;
        managers.Game.textureAtlas = textureAtlas;
        Main();
    }
    function Update() {
        // if the scene that is playing returns another current scene
        // then call Main again and switch the scene
        if (currentState != managers.Game.currentScene) {
            Main();
        }
        currentScene.Update();
        stage.update(); // redraws the stage
    }
    function Main() {
        stage.removeAllChildren();
        switch (managers.Game.currentScene) {
            case config.Scene.START:
                currentScene = new scenes.StartScene();
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.PlayScene();
                break;
            case config.Scene.OVER:
                currentScene = new scenes.OverScene();
                break;
        }
        currentState = managers.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map