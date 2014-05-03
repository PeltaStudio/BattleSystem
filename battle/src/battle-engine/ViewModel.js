
define(function(require) {
  "use strict";
	// INCLUDES
	var Model = require('battle-engine/Model');
	
	/**
	 * Constructor
	 */
	function ViewModel() {
		this.model = new Model();
	}
	
	/********************************
	 *       PUBLIC FUNCTIONS       *
	 ********************************/
	/*ViewModel.prototype.step = function(){
		this.model.step();
		console.log("ViewModel - STEP!");
	};*/
		ViewModel.prototype.newCharacterPrompt = function(){
			this.model.newCharacterPrompt();
		};
		
		ViewModel.prototype.modifyAttributes = function(){
			this.model.modifyAttributes();
		};
		
		ViewModel.prototype.saveCharacters = function(){
			this.model.saveCharacters();
		};
		
		ViewModel.prototype.loadCharacters = function(){
			this.model.loadCharacters();
		};
		
		ViewModel.prototype.newCharacter = function(){
			this.model.newCharacter();
		};
		
		ViewModel.prototype.newCharacterPromptReset = function(){
			this.model.newCharacterPromptReset();
		};
		
		ViewModel.prototype.test = function(){
			this.model.test();
		}
		
	/**
	 * End class
	 */
	return ViewModel;
});
