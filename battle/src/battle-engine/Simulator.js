
define(function(require) {
	"use strict";

	//INCLUDES
	var CoreLoop = require('battle-engine/CoreLoop');
	var Model = require('battle-engine/Model');
	var EventManager = require('battle-engine/EventManager');

	
	function Simulator() {
		this.TIME_INTERVAL = 300;
		this._on = false;
		this._interval = {};
		
		this.coreLoop = new CoreLoop();
		this.model = new Model();
	};
	
	Simulator.prototype.initialize = function () {
		this._interval = setInterval(this.step.bind(this), this.TIME_INTERVAL);
		this.coreLoop.initialize(this.model);
	};
	
	Simulator.prototype.start = function () {
		this._on = true;
	};
	
	Simulator.prototype.stop = function () {
		this._on = false;	
	};
	
	Simulator.prototype.oneStep = function () {
		this._on = true;
  	this.step();
  	this._on = false;
	};
	
	Simulator.prototype.step = function () {
		if (this._on) {
			if (!this.model.deadFaction()){
				this._on = this.coreLoop.step();
				console.log(this.model.characters.infoWait());
			}
			else{
				clearInterval(this._interval);
				console.log("---- END OF COMBAT ----");
			}
		}
	};
	
	Simulator.prototype.newCharacter = function (characterData) {
		this.model.newCharacter(characterData);
	};
	
	return Simulator;

});