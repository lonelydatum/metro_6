function start(){
	TweenLite.defaultEase = Power2.easeOut
	const tl = new TimelineMax({repeat:1, repeatDelay:2})
	const read = "+=1"
	const time = .5
	tl.to(".frame1", .5, {opacity:1})
	
	tl.from(".t1a", time, {opacity:0}, "+=.8")
	tl.to(".t1a", time*.7, {opacity:0}, read)

	tl.from(".t1b", time, {opacity:0})
	tl.to(".t1b", time*.7, {opacity:0}, read)

	tl.from(".t1c", time, {opacity:0})
	tl.to(".t1c", time*.7, {opacity:0}, read)

	tl.from(".t1d", time, {opacity:0})
	// tl.to(".t1d", time*.7, {opacity:0}, read)

	tl.to(".frame1", time*.7, {opacity:0}, read)
	tl.to(".frame2", time, {opacity:1})
	// tl.to(".end", .7, {opacity:0}, read)
	
	
	
}

start()

module.exports = {};

