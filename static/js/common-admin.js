
	function log(item, context )
	{
		if( typeof(context) == 'undefined' )
		{
			window.console && console.log && console.log(item);
		}
		else
		{
			window.console && console.log && console.log(context, item);
		}
	}
