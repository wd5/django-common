// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/

window.log = function f() {
    log.history = log.history || [];
    log.history.push(arguments);
    if (this.console) {
        var args = arguments;
        var newarr;

        try {
            args.callee = f.caller;
        } catch(e) {

        }

        newarr = [].slice.call(args);

        if (typeof console.log === 'object') {
            log.apply.call(console.log, console, newarr);
        } else {
            console.log.apply(console, newarr);
        }
    }
};

// make it safe to use console.log always

(function(a) {
    function b() {}
    var c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn";
    var d;
    for (c = c.split(","); !!(d = c.pop());) {
        a[d] = a[d] || b;
    }
})(function() {
    try {
        console.log();
        return window.console;
    } catch(a) {
        return (window.console = {});
    }
}());

function rand(min, max)
{
	var argc = arguments.length;
	if (argc === 0)
	{
		min = 0;
		max = 2147483647;
	}
	else if (argc === 1)
	{
		throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');
	}

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// if( window.jQuery )
// {
	// jQuery(function(){
		// $('a[href="#"]').live('click', function(event){
			// event.preventDefault();
		// });
	// });
// }
