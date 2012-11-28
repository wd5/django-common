(function(w, $){
	"use strict";

	var self = this;
	w.uploadImages = Class.extend({
		_default:{
			url:{
				'upload'	: '/ajax/upload/image',
				'primary'	: '',
				'delete'	: '',
				'images'	: '',
				'image'		: ''
			}
		}
		, init: function(options){

			self = this;
			this.settings = $.extend({}, this._default, options);

			this.dialog = new dialog();

//			log('dialog', this.dialog);

			this.bindActions();
		}
		, bindActions:function(){

			$('.uploaded-image', '#images-list').live('click', function(){
				$('#tinymce')
					.tinymce()
					.execCommand('mceInsertContent', false, '<img src="'+$(this).attr('src')+'" alt="" class="post-image" />');

				self.dialog.close();

				return false;
			});

			$('.insert-image', '#tab-gallery').live('click', function(){

				var $this = $(this);

				var url = $this.data('url');

				$('#tinymce')
					.tinymce()
					.execCommand('mceInsertContent', false, '<img src="'+url+'" alt="" class="post-image" />');

				self.dialog.close();

				return false;
			});

			$('.prim').live('click', function(){
				$.post(self.settings.url.primary, {
					id:$(this).data('id'),
					filename:$(this).data('filename'),
					post_id:$('#edit-post-id').val()
				}, function( json ){
					self.dialog.close();
				});

				return false;
			});

			$('#add-image').click(function(e){
				e.preventDefault();

				self.dialog.open();

				var conteiner = self.dialog.container;

				var html = ''
					+'<div id="tab-content">'
						+'<div id="tab-form">'
							+'<form accept-charset="UTF-8" action="'+ self.settings.url.upload +'" method="post" enctype="multipart/form-data" id="upload-image-form" class="well form-horizontal">'
								+'<div class="text-center">'
									+'<input class="input-file" type="file" name="upload_file" />&nbsp;&nbsp;&nbsp;'
									+'<input type="submit" name="upload" value="upload" class="btn" />'
									+'<input type="hidden" name="post_id" value="'+$('#edit-post-id').val()+'"  />'
								+'</div>'

							+'</form>'
						+'</div>'
						+'<div id="tab-gallery"></div>'
					+'</div>';

				var tf = $(html).appendTo(conteiner);

				$('#upload-image-form').ajaxForm({
//					dataType:'jsonp',
//					iframe:true,
////					type:'post',
//					url:self.settings.url.upload,
					success:function(json){

						if( typeof json == 'string' )
						{
							json = $.parseJSON(json);
						}

						log(json)
						log('success json - ', json);
						self.showImage(json.result);
					}
				});

				$.getJSON( self.settings.url.images, {
					post_id:$('#edit-post-id').val()
				}, function(json){
					$.each(json.images, function(i, item){
						log('item-',item);
						self.showImage(item);
					});
				});
			});


		}

		, showImage: function(item){

			log('showImage item', item);

			var html = ''
				+'<div class="dialog-image-blog">'
					+'<img class="uploaded-image" src="'+item.url_thumb+'" alt="" />'
					+'<a href="#" class="insert-image" data-id="'+item.id+'" data-filename="'+item.filename+'" data-url="'+item.url['150']+'" data-size="150">150x150</a> | '
					+'<a href="#" class="insert-image" data-id="'+item.id+'" data-filename="'+item.filename+'" data-url="'+item.url['250']+'" data-size="250">250x250</a> | '
					+'<a href="#" class="insert-image" data-id="'+item.id+'" data-filename="'+item.filename+'" data-url="'+item.url['450']+'" data-size="450">450x450</a> | '
					+'<a href="#" class="prim" data-id="'+item.id+'" data-filename="'+item.filename+'">as primary</a> | '
					+'<a href="#" class="del">delete</a>'
				+'</div>';

			$(html).prependTo($('#tab-gallery', self.dialog.container));
		}
	});
})(window, jQuery);
