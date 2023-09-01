window.addEventListener("load", function(){
	var delay = 0.3;
	var nodes = document.querySelectorAll
(".animate");
	for(var i=0; i<nodes.length; i++){
		var words = nodes[i].innerText.split(" ");
		nodes[i].innerHTML = "";
for(var i2=0; i2<words.length; i2++){
			var item = document.createElement("span");
			item.innerText = words[i2];
			var calc = (delay+((nodes.length + i2)/3));
	item.style.animationDelay = calc+"s";
			nodes[i].appendChild(item);
}
	}
});