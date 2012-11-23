"use strict";

var dialog = Class.extend({
	_default: {
		width: 	'',
		height: ''
	},
	init:		function(options){

		var self = this;

		this.settings = $.extend({}, this._default, options);

		var dWidth = $(document).width();
		var dHeight = $(document).height();

		if( ! this.settings.width )
		{
			this.settings.width = (dWidth/2);
		}

		if( ! this.settings.height )
		{
			this.settings.height = ($(window).height()-40);
		}

		log('doc', dHeight, $(window).height(), this.settings.height, $(document).scrollTop());

//		log('win');

		this._overlay = $('<div/>')
			.attr('id', 'dialog-overlay')
            .animate({
                'opacity' : '.7'
            }, 1000)
            .css({
                'width' : dWidth,
                'height' : dHeight
            });

		var h = ''+
			'<div id="dialog">'+
				'<div id="dialog-header"></div>'+
				'<div id="dialog-content"></div>'+
				'<div id="dialog-close">X</div>'+
				'<div id="dialog-loader"></div>'+
			'</div>';

		this._dialog = $(h)
			.css({
                'left': (dWidth/2 - (this.settings.width)/2),
                'top' : $(document).scrollTop() + (this.settings.height-20),
                'z-index':8
            })
			.width(this.settings.width)
			.height(this.settings.height);

		$('#dialog-close').live('click', function(){
			log(' - dialog close click');
			self.close();
		});
	},
	open:		function(){
		this._overlay
			.appendTo('body')
			.show();

		this._dialog
			.css({
                'left': ($(document).width()/2 - (this.settings.width)/2),
                'top' : $(document).scrollTop() + 40,
                'z-index':8
            })
			.width(this.settings.width)
			.appendTo('body')
			.show();

		this.container = $('#dialog-content', this._dialog).html('');

//		log('_dialog', this._dialog);

		return this;
	},
	content:	function( html ){

		$('#dialog-content', this._dialog)
			.html(html);

	},
	close:		function(){
		log(' -------- dialog close ---------- ');
		this._overlay.remove();
		this._dialog.remove();
	}
});
