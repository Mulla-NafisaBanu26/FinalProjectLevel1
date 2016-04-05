// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _playLabel: objects.Label;
        private _playImage: createjs.Bitmap;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {

            this._playImage = new createjs.Bitmap(assets.getResult("PlayImage"));
            this.addChild(this._playImage);
            //Add Play Label
            this._playLabel = new objects.Label(
                "Inatruction \n\n To move the Car right please use right arrow key \n\n To move Left use left arrow key \n\n If car colloids game over \n\n if car get $ sign get the point \n\n Game have 3 Level \n\n Start Now","23px Consolas", 
                "#2E9AFE", 
                config.Screen.CENTER_X,config.Screen.CENTER_Y);
            this.addChild(this._playLabel);


            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
    }
}