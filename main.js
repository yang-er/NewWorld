$(document).ready(function() {
	
	//$('table>form').each(function(){
	//	var form=$(this).clone();
	//	var table=$(this).parent();
	//	$(this).remove();
	//	table.wrap(form);
	//});
	
	$(".item .label")
		.popup()
	;
	
	$(".ui.info.message")
		.fadeOut(10000)
	;
	
	//$("select").dropdown();
	
	$(".right.menus").click(function() {
		$(".right.menu").before("<div class='clearfix'></div>");
		$(".right.menu").slideToggle("5000");
	});
	
	$(".select-language").dropdown({
		on: 'hover',
	    onChange: function (val) {
			if(val!=''){
				$.ajax({
					url:'/CMD_API_CHANGE_INFO',
					dataType: "html",
					data:'language=1&lvalue='+val,
					type:'POST',
					success: function(data) {
						location.reload();
					}
				});
			}
	    }
	});
	
	$(".fixed.launch.button").click(function(){
		$(".wide.right.aside")
			.sidebar("toggle")
		;
	});
	
});