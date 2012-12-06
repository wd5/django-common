(function(w, $){
	"use strict";

	w.uploadImages = Class.extend({
	    debugLevel:1
		, _default:{
			url:{
				'upload'	: '',
				'primary'	: '',
				'delete'	: '',
				'images'	: '',
				'image'		: ''
			}
			, lang:{}
		}
		, settings:{}
		, init: function(options){

			self = this;
			this.settings = $.extend({}, this._default, options);
			self.log(self.settings);
			this.bindFormActions();
			this.bindImageActions();
		}
		, bindFormActions: function(){
			$('#image-upload-form').ajaxForm({
				success:function(data){
                	$('#post-images .thumbnails').prepend(function(){
                		return $('<li/>')
                			.data('id', data.image.id)
                			.data('post_id', data.post.id)
                			.data('title', data.image.description)
                			.data('x250', data.image.x250)
                			.data('x450', data.image.x450)
                			.data('x650', data.image.x650)
                			.append(function(){
                				return $('<a href="#" class="thumbnail"/>')
                					.append(function(){
                						return $('<img/>')
                							.attr('src', data.image.x138);
                						});
                				});
                        });
                    }
            });
		}
		, bindImageActions: function(){
			var self = this;
			
            $('#post-images li')
            	.live('mouseenter', function(){
            		var $this = $(this);
            		$this
            			.append(function(){
            				if( ! $('.image-link-block', $this).size())
            				{
            					var d = $('<div class="image-link-block" />')
            						.append(function(){
            							return $('<a class="btn" />')
            								.text(self.settings.lang.insert)
            								.on('click', function(){
            									tinymce.execCommand('mceInsertContent', false, '<a href="'+$this.data('x650')+'" rel="single" class="pirobox" title="' + $this.data('title') + '"><img src="'+$this.data('x250')+'" alt="" /></a>&nbsp;&nbsp;&nbsp;');
            								});
            						})
            						.append(function(){
            							return $('<a class="btn" />')
            								.text(self.settings.lang.primary)
            								.on('click', function(){
            									$.post( self.settings.url.primary, {
            										post_id: self.settings.post_id
            										, image_id: self.data('id')
            										, csrfmiddlewaretoken: self.settings.csrf_token
            									}, function(data){});
            								});
            						})
            						.append(function(){
            							return $('<a class="btn" />')
            								.text(self.settings.lang.delete);
            							});
            						
                                    return d;
            				}
            			});
            	})
            	.live('mouseleave', function(){
            		if( $('.image-link-block', $this).size() )
            		{
            			$('.image-link-block', $this).remove();
            		}
            	});
		}
        , log: function(){
            if( this.debugLevel > 0 )
            {
                window.console && console.log && console.log(Array.prototype.slice.call(arguments));
            }
        }
	});
})(window, jQuery || django.jQuery);
