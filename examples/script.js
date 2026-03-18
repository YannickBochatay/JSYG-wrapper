import jQuery from "jquery"
import $ from "../JSYG-wrapper.js"
		
const svg = $('<svg>')
    .width(400).height(400)
    .css({
        position:"absolute",
    left:80,
    top:80,
    "background-color":"gray"
})
    .appendTo('body');
            
const rect = $('<rect>')
    .attr({x:100,y:100})
    .width(100).height(50)
    .css("fill","pink")
    .appendTo(svg);
    
const text = $("<text>").attr({x:20,y:20}).text("Cliquez ici");
    
const a = $("<svg:a>")
    .attr("href","#")
    .append(text)
    .appendTo(svg)
    .on("click",function(e) {
        
        e.preventDefault();
        
        $.when(rect.fadeOut())
        .then(() => rect.fadeIn())            
    });

const div = jQuery("<div>").appendTo("body");
div.css({
    height:"50px",
    "background-color":"pink",
    "position":"absolute",
    "left":"10%"
});
    
rect.css("x","10%");

console.log(rect.css("x"),rect.position(),rect.offset(),rect.width());
