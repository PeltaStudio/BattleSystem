
define(function(require) {
  "use strict";
  // INCLUDES
    var ViewModel = require('battle-engine/ViewModel');

  /**
   * Constructor
   * @classDescription lalala
   */
  function Engine() {
	  this.TIME_INTERVAL = 1000; // ms
      this._on = false;
      this._viewModel = new ViewModel();
  }
  
  /********************
   * PUBLIC FUNCTIONS *
   ********************/
  /**
   * Initialize the engine
   * @param canvas
   */
  Engine.prototype.initialize = function () {

    this._interval = setInterval(this._step.bind(this), this.TIME_INTERVAL);
	  
  };
  
  Engine.prototype.stop = function () {
    this._on = false;
    this._viewModel.stop();
  };
  
  Engine.prototype.start = function () {
    this._on = true;
    this._viewModel.start();
  };
  
  Engine.prototype.tick = function(){
	  this._on = true;
	  this._step();
	  this._on = false;
  };
  
  Engine.prototype.renderize = function () {
  
  };
  
  /*********************
   * PRIVATE FUNCTIONS *
   *********************/
  Engine.prototype._configureEvents = function () {
  };
  
  
  Engine.prototype._step = function() {
    this._viewModel.model.showInfoFighters();
    this._viewModel.model.turn();
    this._viewModel.model.showInfoFighters();
    if (this._waitCheck()){
      clearInterval(this._interval);
      setTimeout(this._combat, 200);
    }
  }
  
  Engine.prototype._waitCheck = function(){
    return (this._viewModel.model.characters.where({wait: 0}).length > 0)
  }
  
  Engine.prototype._combat = function(){
    console.log("TURN!");
    this._viewModel.model.active = this._viewModel.model.characters.findWhere({wait: 0});
    //TODO this._viewModel.model.showActions(this._viewModel.model.active);
    console.log("What will " + this._viewModel.model.active.get("name") + " do?");
  }
  
  Engine.prototype._executeAction = function(){
    this._viewModel.model.execute();
    if(this._waitCheck()){
      setTimeout(this._combat, 200);
    }
    else{
      this._initialize();
    }
  }
  
  
 /* Engine.prototype._step = function () {
	  this._viewModel.model.showInfoFighters();
   
	  if (this._on) {
    	this._viewModel.model.turn();
    	this._viewModel.model.showInfoFighters();
    	while (this._viewModel.model.characters.where({wait: 0}).length > 0){
    		this.on = true;
    		console.log("combat!");
    		this._viewModel.model.active = this._viewModel.model.characters.findWhere({wait: 0});
    		this._viewModel.model.execute(this._viewModel.model);
    		var deadAllies = this._viewModel.model.characters.where({hp: 0, faction: "ally"}).length;
			var deadEnemies = this._viewModel.model.characters.where({hp: 0, faction: "enemy"}).length;
    		if(this._viewModel.model.contAllies == deadAllies || this._viewModel.model.contEnemies == deadEnemies){
    			this.on = false
    			alert("Combat ended!!");
    			console.log("Combat Ended!");
    			this.stop();
    		}
    	}
    	this.on = false;
    }
	  
  };*/
  
  /**
   * End class
   */
  return Engine;
});
