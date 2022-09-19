'use strict'
let buton = document.getElementById('buton')
let user = document.getElementById('input')
let result = document.getElementById('result')
let comp = Math.floor(Math.random() * (100 - 1 + 1) + 1)
console.log()
const guessthenumber = (user, comp, result) => {
	return function () {
		if (Number(user.value) > 100 || Number(user.value) < 1) {
			result.innerHTML = 'Введіть число від 1 до 100!'
		} else {
			if (Number(user.value) < comp) {
				result.innerHTML = 'больше'
			}
			if (Number(user.value) == comp) {
				result.innerHTML = 'победа'
			}
			if (Number(user.value) > comp) {
				result.innerHTML = 'менше'
			}
		}
	}
}
console.log(guessthenumber)
buton.addEventListener('click', guessthenumber(user, comp, result))
