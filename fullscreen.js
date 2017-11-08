function _requestFullscreen(element)
{
	if     (element.requestFullscreen)       element.requestFullscreen();
	else if(element.mozRequestFullScreen)    element.mozRequestFullScreen();
	else if(element.webkitRequestFullscreen) element.webkitRequestFullscreen();
}

function _exitFullscreen()
{
	if     (document.exitFullscreen)       document.exitFullscreen();
	else if(document.mozCancelFullScreen)  document.mozCancelFullScreen();
	else if(document.webkitExitFullscreen) document.webkitExitFullscreen();
}

function _fullscreenEnabled()
{
	return document.fullscreenEnabled ||
		document.mozFullScreenEnabled ||
		document.webkitFullscreenEnabled;
}

function _fullscreenEnabled()
{
	return document.fullscreenElement ||
		document.mozFullScreenElement ||
		document.webkitFullscreenElement;
}

function _onfullscreenchange()
{
	if     (document.exitFullscreen)       return "onfullscreenchange";
	else if(document.mozCancelFullScreen)    return "onmozfullscreenchange";
	else if(document.webkitExitFullscreen) return "onwebkitfullscreenchange";
}

function _fullscreenchange()
{
	if     (document.exitFullscreen)       return "fullscreenchange";
	else if(document.mozCancelFullScreen)    return "mozfullscreenchange";
	else if(document.webkitExitFullscreen) return "webkitfullscreenchange";
}

function _onfullscreenerror()
{
	if     (document.exitFullscreen)       return "onfullscreenerror";
	else if(document.mozCancelFullScreen)    return "onmozfullscreenerror";
	else if(document.webkitExitFullscreen) return "onwebkitfullscreenerror";
}

function _fullscreenerror()
{
	if     (document.exitFullscreen)       return "fullscreenerror";
	else if(document.mozCancelFullScreen)    return "mozfullscreenerror";
	else if(document.webkitExitFullscreen) return "webkitfullscreenerror";
}