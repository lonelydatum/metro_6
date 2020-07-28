
import {rand} from '../../_common/js/common.js'



function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})


	TweenLite.from(".player_shooter", 1.5, {x:"+=50", y:"-=10", ease:Power3.easeOut})
	TweenLite.from(".player_defender", 2, {x:"-=80", y:"-=10", ease:Power3.easeOut})
	TweenLite.from(".puck", 1, {x:"+=22", y:"+=20", ease:Power3.easeOut})
	
	tl.from(".t1_a", .01, {opacity:0}, "+=.7")
	tl.from(".t1_b", .01, {opacity:0}, "+=.5")
	

	tl.add("f2", 3.5)
	tl.to(".frame1", .3, {opacity:0}, "f2")
	tl.set(".frame2", {opacity:1}, "f2")

	tl.add("phone_move")
	tl.from('.phone', .4, {y:"+=100", ease:Power3.easeOut}, "phone_move")
	tl.from('.illust', .3, {scale:0}, "phone_move+=.3")

	tl.from(['.t2', '.legal'], .01, {opacity:0}, "+=.3")
	tl.from('.cta', .1, {opacity:0}, "+=1.4")
	tl.to('.cta', .2, {opacity:0}, "+=2.6")
	tl.from('.cta2', .3, {opacity:0})
	

	// tl.from('.legal', .3, {opacity:0}, "+=.1")

	// tl.gotoAndPlay("f2")
}

// batter()

start()

module.exports = {};

