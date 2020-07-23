
import {rand} from '../../_common/js/common.js'




function elements(list){
	const tl = new TimelineMax()

	tl.from(".a_0", .8,  {x:-250, opacity:.2}, 0)
	list.map((item, index)=>{
				
		tl.from(item, (index*.08)+.1,  { x:-190, y:`+=${rand(20, 40)}`, ease:Power3.easeOut}, 0.3)
		
	})
}

function start(){
	TweenLite.defaultEase = Power3.easeInOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	const list = [
		".a_1",
		".a_2",
		".a_3",		
		".a_4",
		".a_5",
		".a_6",
		".a_7",
		
		".a_8",
		".a_9",		
		
	]


	elements(list)


	
	tl.from(".t1_a", .01, {opacity:0}, "+=.8")
	tl.from([".t1_b", ".t1_c"], .01, {opacity:0}, "+=.7")
	

	

	tl.add("f2", 3.3)
	tl.to(".frame1", .3, {opacity:0}, "f2")
	tl.set(".frame2", {opacity:1}, "f2")

	tl.add("phone_move")
	tl.from('.phone', .4, {y:"+=100", ease:Power3.easeOut}, "phone_move")
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

