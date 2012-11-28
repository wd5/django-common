(function(w, $){
	"use strict";

	var self = this;
	w.uploadImages = Class.extend({
	    debugLevel:1
		, _default:{
			url:{
				'upload'	: '/ajax/upload/image',
				'primary'	: '',
				'delete'	: '',
				'images'	: '',
				'image'		: ''
			}
		}
		, settings:{}
		, init: function(options){

			self = this;
			this.settings = $.extend({}, this._default, options);
			
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
            $('#post-images li')
                    .live('mouseenter', function(){
                        var self = $(this);
                        $(this)                            
                            .append(function(){
                                if( ! $('.image-link-block', $(this)).size())                                    
                                {
                                    var d = $('<div class="image-link-block" />')
                                        .append(function(){
                                            return $('<a class="btn" />')
                                                .text('insert')
                                                .on('click', function(){
                                                    tinymce.execCommand('mceInsertContent', false, '<a href="'+self.data('x650')+'" rel="single"  class="pirobox" title="' + self.data('title') + '"><img src="'+self.data('x250')+'" alt="" /></a>&nbsp;&nbsp;&nbsp;');
                                                });
                                        })
                                        .append(function(){
                                            return $('<a class="btn" />')
                                                .text('primary')
                                                .on('click', function(){
                                                    $.post('{% url catalog-ajax-primary %}', {
                                                        post_id:'{{ post.id }}',
                                                        image_id:self.data('id'),
                                                        csrfmiddlewaretoken: '{{ csrf_token }}'
                                                    }, function(data){
                                                        
                                                    });
                                                });
                                        })
                                        .append(function(){
                                            return $('<a class="btn" />')
                                                .text('delete')
                                        });
                                        
                                    return d;
                                }
                            });
                    })
                    .live('mouseleave', function(){                        
                        if( $('.image-link-block', $(this)).size() )
                        {
                            $('.image-link-block', $(this)).remove();
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
