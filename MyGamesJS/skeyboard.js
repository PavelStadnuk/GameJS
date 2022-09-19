let keys = document.querySelectorAll('.keys')
let space = document.querySelector('.space')
let shifr_left = document.querySelector('.shifr_left')
let shifr_right = document.querySelector('.shifr_right')
let caps_lock_key = document.querySelector('.caps_lock_key')
let toggle_circle = document.querySelector('.toggle_circle')
let night_mode = document.querySelector('.night_mode')
let body = document.querySelector('body')
let text_input = document.querySelector('.text')
let change_color = document.querySelector('.change_light_color')
let colors_input = document.querySelector('.colors_input')
let keyboard_lights = document.querySelector('.keyboard_lights')
let keyboard_wrapp = document.querySelector('.keyboard_wrapp')
for (let i = 0; i < keys.length; i++) {
	keys[i].setAttribute('keyname', keys[i].innerText)
	keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase())
}
window.addEventListener('keydown', function (e) {
	for (let i = 0; i < keys.length; i++) {
		if (
			e.key == keys[i].getAttribute('keyname') ||
			e.key == keys[i].getAttribute('lowerCaseName')
		) {
			keys[i].classList.add('active')
		}
		if (e.ccde == 'Space') {
			space.classList.add('active')
		}
		if (e.code == 'ShiftLeft') {
			shifr_right.classList.remove('active')
		}
		if (e.code == 'ShiftRight') {
			shifr_left.classList.remove('active')
		}
		if (e.code == 'CapsLock') {
			caps_lock_key.classList.toggle('active')
		}
	}
})
window.addEventListener('keyup', function (e) {
	for (let i = 0; i < keys.length; i++) {
		if (
			e.key == keys[i].getAttribute('keyname') ||
			e.key == keys[i].getAttribute('lowerCaseName')
		) {
			keys[i].classList.remove('active')
			keys[i].classList.add('remove')
		}
		if (e.code == 'Space') {
			space.classList.remove('active')
			space.classList.add('remove')
		}
		if (e.code == 'ShiftLeft') {
			shifr_right.classList.remove('active')
			shifr_right.classList.remove('remove')
		}
		if (e.code == 'ShiftRight') {
			shifr_left.classList.remove('active')
			shifr_left.classList.remove('remove')
		}
		setTimeout(() => {
			keys[i].classList.remove('remove')
		}, 200)
	}
})

night_mode.addEventListener('click', function () {
	toggle_circle.classList.toggle('active')
	body.classList.toggle('active')
	night_mode.classList.toggle('active')
	keyboard_wrapp.classList.toggle('active')
	text_input.classList.toggle('active')
	change_color.classList.toggle('active')
	for (let i = 0; i < keys.length; i++) {
		keys[i].classList.toggle('keys_night')
	}
})
colors_input.addEventListener('input', function () {
	for (let i = 0; i < keys.length; i++) {
		keys[i].style.color = colors_input.value
	}
	keyboard_lights.style.background = colors_input.value
})
