const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut



function rand(min, max){
	const diff = max-min
	return (Math.random()*diff) + min
}

export {size, rand}