(function(){
	"use strict";
	var g = window;
    var c = function(){};


	// private methods and vars

	// configuration
	c.settings = {
		debug:true
	};

	// use for debug log
	c.prototype.log = function( item, context  ){
		if( typeof(context) == 'undefined' )
		{
			g.console && console.log && console.log(item);
		}
		else
		{
			g.console && console.log && console.log(context, item);
		}
	};

	// fire class run
	// change [class_name] to public class name
    g.utils = new c();
})();
