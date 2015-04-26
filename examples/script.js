require.config({
	paths: {
		"jsyg" : "../JSYG",
		"jquery": '../bower_components/jquery/dist/jquery'
	},
	urlArgs: "bust=" + new Date()
});

(function() {
	
	require(["jsyg"],function($) {
		
		var svg = $('<svg>')
		.width(400).height(400)
		.css({
			position:"absolute",
			left:80,
			top:80,
			"background-color":"gray"
		})
		.appendTo('body');
				
		var rect = $('<rect>')
		.attr({x:100,y:100})
		.width(100).height(50)
		.css("fill","pink")
		.appendTo(svg);
		
		var text = $("<text>").attr({x:20,y:20}).text("Cliquez ici");
		
		var a = $("<svg:a>")
		.attr("href","#")
		.append(text)
		.appendTo(svg)
		.on("click",function(e) {
			
			e.preventDefault();
						
			$.when(rect.slideUp())
			.then(function() { return rect.slideDown(); })
			.then(function() { return rect.fadeOut(); })
			.then(function() { return rect.fadeIn(); });
		});
			
	});
	
}());