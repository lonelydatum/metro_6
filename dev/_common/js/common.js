const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut

function batter(obj, speed=.3){
	console.log(obj);
	const tl = new TimelineMax()
	TweenLite.to(".hero_batter_bg", .3, {opacity:1})
	TweenLite.from([".batter_all"], 2, {x:obj.bat, ease:Power2.easeOut})
	TweenLite.from([".ball"], 2, {x:obj.ball, ease:Power2.easeOut})
	const list = [".hero_batter_1", ".hero_batter_3", ".hero_batter_5", ".hero_batter_7", ".hero_batter_9"]
	list.map((item, index)=>{

		const time = `-=${index*.01}`
		const notIt = list.filter(f=>f!==item)
		tl.add("frame", time)
		tl.to(notIt, speed, {opacity:0}, "frame")
		tl.set(item, {opacity:1}, "frame")
	})

	return tl
}

export {size, batter}