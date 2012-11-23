jQuery(function() {
	$('textarea.tinymce').tinymce({
		// Location of TinyMCE script
		script_url : '/media/js/tiny_mce.js',


		// General options
		theme : "advanced",
//		plugins : "advimage,advlink,advlist,autolink,contextmenu,inlinepopups,insertdatetime,lists,pagebreak,paste,safari,style,tabfocus,xhtmlxtras,template",
		plugins : "advimage,advlink,advlist,autolink,contextmenu,inlinepopups,lists,pagebreak,paste,safari,style,tabfocus,xhtmlxtras,syntaxhl",

		// Theme options
		theme_advanced_buttons1 : "bold,italic,underline,strikethrough,|,justifyleft,justifycenter,justifyright,justifyfull,|,forecolor,backcolor,|,cleanup,code,syntaxhl",
	    theme_advanced_buttons2 : "pastetext,pasteword,|,bullist,numlist,|,outdent,indent,blockquote,|,undo,redo,|,link,unlink,anchor,|,image,pagebreak",
	    theme_advanced_buttons3 : "",
	    theme_advanced_toolbar_location : "top",
		theme_advanced_toolbar_align : "left",
		theme_advanced_statusbar_location : "bottom",
		theme_advanced_resizing : true,
		height:"500px",
//		width:"600px",

//		gecko_spellcheck : true,

		// Cleanup/Output
		fix_list_elements : true,
		force_p_newlines : false,
		force_br_newlines: false,
		forced_root_block: '',
		keep_styles:true,
		remove_linebreaks : false,   // Make sure you add this
		extended_valid_elements: "textarea[cols|rows|disabled|name|readonly|class]" ,
		paste_auto_cleanup_on_paste : true,

		// URL
		relative_urls : false,
		remove_script_host: false,
		convert_urls : false,

		// Example content CSS (should be your site CSS)
		content_css : "/media/css/tiny_mce.css"
	});
});
