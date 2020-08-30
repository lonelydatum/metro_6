function start(){
	TweenLite.defaultEase = Power2.easeOut
	const tl = new TimelineMax()
	const read = "+=1"
	const time = .5
	tl.set(".frame1", {opacity:1})
	
	tl.from(".t1a", time, {opacity:0}, "+=.5")
	tl.to(".t1a", time, {opacity:0}, read)

	tl.from(".t1b", time, {opacity:0})
	tl.to(".t1b", time, {opacity:0}, read)

	tl.from(".t1c", time, {opacity:0})
	tl.to(".t1c", time, {opacity:0}, read)

	tl.from(".t1d", time, {opacity:0})
	tl.to(".t1d", time, {opacity:0}, read)

	
	tl.from(".end", time, {opacity:0})
	// tl.to(".end", .7, {opacity:0}, read)
	
	
	
}

start()

module.exports = {};

