


import {rand} from '../../_common/js/common.js'


// import {rand} from '../../_common/js/common.js'


function a_(list, x){
	const tl = new TimelineMax()
	tl.from(".a0", .3,  {x:200, opacity:0, ease:Power3.easeOut}, 0)
	list.map((item, index)=>{
		tl.from(item, (index*.1)+.2,  { x, y:`+=${rand(0, 30)}`, ease:Power3.easeOut}, 0)
		
	})

	return tl
}




function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})


	TweenLite.from(".player_shooter", 1.8, {x:"+=40", y:"+=25", ease:Power2.easeOut})
	TweenLite.from(".player_defender", 1.5, {x:"-=2", ease:Power3.easeOut})
	TweenLite.from(".puck", 2, {x:"+=60", y:"+=32", ease:Power3.easeOut})
	

	tl.from([".t1_a"], .01, {opacity:0}, "+=.1")
	tl.to([".t1_a", ".logo"], .01, {opacity:0}, "+=2")
	const a = [		
		".a1",
		".a2",
		".a3"		
	]


	tl.from(".t1_b", .3, {opacity:0})
	tl.add(a_(a, 320), "+=.1")
	


	
	
	
	

	tl.add("f2", 4.3)
	tl.to(".frame1", .3, {opacity:0}, "f2")
	tl.set(".frame2", {opacity:1}, "f2")

	tl.add("phone_move")
	tl.from('.phone', .3, {y:"+=500", ease:Power3.easeOut}, "phone_move")
	tl.from('.illust', .3, {scale:0}, "phone_move+=.3")

	tl.from(['.t2', '.legal'], .01, {opacity:0}, "+=.3")
	tl.from('.cta', .1, {opacity:0}, "+=1.4")
	tl.to('.cta', .2, {opacity:0}, "+=2.6")
	tl.from('.cta2', .3, {opacity:0})
	

	// tl.from('.legal', .3, {opacity:0}, "+=.1")

	// tl.gotoAndPlay("f2")
}

start()

module.exports = {};

