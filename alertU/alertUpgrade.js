(function(){

var classname = document.getElementsByClassName("alertU");

var alertU = function() {
	
	var body = document.body;
    var html = document.documentElement;

	var opacity = document.createElement('div');
	opacity.id = 'alertUbody';
	    
	var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	opacity.setAttribute("style","height:"+height+"px");
	body.appendChild(opacity);

	var dialog = document.createElement('div');
	dialog.id = 'alertU';
	var text = document.createTextNode(this.getAttribute("data-text"));
	dialog.appendChild(text);

	var closeButton = document.createElement('div');
	closeButton.id = 'closeButton';
	var closeButtonText = document.createTextNode('Close');
	closeButton.appendChild(closeButtonText);
	closeButton.addEventListener('click', closeU, false);
	dialog.appendChild(closeButton);


	body.appendChild(dialog);

};

var closeU = function() {
	var body = document.body;
	body.removeChild(document.getElementById('alertU'));
	body.removeChild(document.getElementById('alertUbody'));
}

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', alertU, false);
}
})();