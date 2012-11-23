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
	c.log = function( item, context  ){
		if( c.settings.debug )
		{
			if( typeof(context) == 'undefined' )
			{
				g.console && console.log && console.log(item);
			}
			else
			{
				g.console && console.log && console.log(context, item);
			}
		}
	};

	// privat method
	// available only
	c.method_name = function(o){};

	// public methods
    c.prototype.init = function( options ){
		// if jquery
		// c.settings = $.extend(c.settings, options, true);
	};

	// fire class run
	// change [class_name] to public class name
    g.class_name = new c();
})();