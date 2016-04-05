var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            this._playImage = new createjs.Bitmap(assets.getResult("PlayImage"));
            this.addChild(this._playImage);
            //Add Play Label
            this._playLabel = new objects.Label("Inatruction \n\n To move the Car right please use right arrow key \n\n To move Left use left arrow key \n\n If car colloids game over \n\n if car get $ sign get the point \n\n Game have 3 Level \n\n Start Now", "23px Consolas", "#2E9AFE", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._playLabel);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map