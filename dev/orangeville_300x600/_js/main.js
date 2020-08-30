function start(){
	TweenLite.defaultEase = Power2.easeOut
	const tl = new TimelineMax({repeat:2, repeatDelay:1})
	tl.set(".frame1", {opacity:1})
	tl.from(".bg1", .7, {opacity:0})
	tl.from(".bg2", .7, {opacity:0}, "+=1.3")
	tl.from(".bg3", .7, {opacity:0}, "+=1.3")
	
	
}

start()

module.exports = {};

