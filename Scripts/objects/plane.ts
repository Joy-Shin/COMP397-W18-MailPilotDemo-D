module objects {
  export class Plane extends objects.GameObject {
    // private instance variables

    // public properties

    // Constructor
    constructor() {
      super("plane");
      this.Start();
    }

    // private methods

    // public methods

    // Initializes variables and creates new objects
    public Start():void {
      this.x = 320;
      this.y = 430;
    }

    // updates the game object every frame
    public Update():void {
      this.Move();
      this.CheckBounds();
    }

    // reset the objects location to some value
    public Reset():void {

    }

    // move the object to some new location
    public Move():void {
     // mouse controls
     // this.x = objects.Game.stage.mouseX;

     // keyboard controls
     if(managers.Game.keyboardManager.moveLeft) {
       this.x -= 5;
     }

     if(managers.Game.keyboardManager.moveRight) {
       this.x += 5;
     }

    }

    // check to see if some boundary has been passed
    public CheckBounds():void {
      // right boundary
      if(this.x >= 640 - this.halfWidth) {
        this.x = 640 - this.halfWidth;
      }

      // left boundary
      if(this.x <= this.halfWidth) {
        this.x = this.halfWidth;
      }
    }
  }
}
