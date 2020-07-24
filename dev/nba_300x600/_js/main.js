
import {rand} from '../../_common/js/common.js'






function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})


	TweenLite.from(".player_shooter", 1.7, {x:"+=15", y:"+=3", ease:Power2.easeOut})
	TweenLite.from(".player_defender", 1.8, {x:"-=20", ease:Power3.easeOut})
	
	tl.from(".t1_a", .01, {opacity:0}, "+=.1")
	tl.from([".t1_b", ".t1_c"], .01, {opacity:0}, "+=.5")
	// tl.from(".t1_c", .01, {opacity:0}, "+=.4")
	
	
	



	tl.add("f2", 4)
	tl.to(".frame1", .3, {opacity:0}, "f2")
	tl.set(".frame2", {opacity:1}, "f2")

	tl.add("phone_move")
	tl.from('.phone', .5, {y:"+=330", ease:Power3.easeOut}, "phone_move")
	tl.from('.illust', .3, {scale:0}, "phone_move+=.3")

	tl.from(['.t2', '.legal'], .01, {opacity:0}, "+=.3")
	tl.from('.cta', .1, {opacity:0}, "+=1.4")
	tl.to('.cta', .2, {opacity:0}, "+=2.3")
	tl.from('.cta2', .3, {opacity:0})
	

	// tl.from('.legal', .3, {opacity:0}, "+=.1")

	// tl.gotoAndPlay("f2")
}

// batter()

start()

module.exports = {};

