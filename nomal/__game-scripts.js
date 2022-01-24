// init.js
var Init = pc.createScript('init');

// initialize code called once per entity
Init.prototype.initialize = function() {
    this.app.fire("WebGLLoadComplete");
    this.app.fire("WebGLReady");
};

// update code called every frame
Init.prototype.update = function(dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// Init.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

// init.js
var Init = pc.createScript('init');

// initialize code called once per entity
Init.prototype.initialize = function() {

};

// update code called every frame
Init.prototype.update = function(dt) {

};

// swap method called for script hot-reloading
// inherit your script state here
// Init.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// https://developer.playcanvas.com/en/user-manual/scripting/

