'use strict'
let table = document.querySelector('.game')
let timer = document.querySelector('#timer')
let result = document.querySelector('#result')
let StartOverButton = document.querySelector('#start-over')
let StartGameButton = document.querySelector('#start-game')
let numerRows = 10
let numerCells = 10
let timerCount
StartGameButton.addEventListener('click', start)
createTable(numerRows, numerCells, table)
let cells = document.querySelectorAll('.cell')
let arrCells = Array.prototype.slice.call(cells)
getrandom(arrCells, numerCells)
userActivity(cells)
StartOverButton.addEventListener('click', startOver)
function createTable(numerRows, numerCells, parent) {
	for (let i = 1; i <= numerRows; i++) {
		let row = document.createElement('tr')
		parent.appendChild(row)
		for (let j = 1; j <= numerCells; j++) {
			let cell = document.createElement('td')
			cell.setAttribute('class', 'cell')
			parent.appendChild(cell)
		}
	}
}
function getrandom(array, n) {
	let shuffled = array.sort(() => 0.5 - Math.random())
	let selected = shuffled.slice(0, n)
	for (let elem of selected) {
		elem.classList.add('selected')
	}
}
function userActivity(elems) {
	for (let elem of elems) {
		elem.addEventListener('click', handler)
	}
	function handler() {
		this.classList.toggle('user-selected')
		if (checkSelected(elems)) {
			this.removeEventListener('click', handler)
		}
	}
}
function checkSelected(elems) {
	for (let elem of elems) {
		if (
			elem.classList.contains('user-selected') &&
			elem.classList.contains('selected')
		) {
			elem.classList.remove('user-selected')
			elem.classList.remove('selected')
			elem.classList.add('winner')
		}
	}
	countwin(elems, numerCells)
}
function countwin(elems, numerCells) {
	let arr = []
	for (let elem of elems) {
		if (elem.classList.contains('winner')) {
			arr.push(elem)
			if (arr.length >= numerCells) {
				result.innerHTML = 'You win'
				result.style.visibility = 'visible'
				clearInterval(timerCount)
			}
		}
	}
}
function startOver() {
	for (let elem of cells) {
		elem.classList.remove('user-selected')
		elem.classList.remove('selected')
		elem.classList.remove('winner')
		result.style.visibility = 'hidden'
	}
	getrandom(arrCells, numerCells)
	clearInterval(timerCount)
	timer.innerHTML = 60
	countDownTimer()
}
function start() {
	let game = document.querySelector('.game-wrapper')
	game.style.display = 'block'
	StartGameButton.style.display = 'none'
	countDownTimer()
}
function countDownTimer() {
	let i = 0
	timer.innerHTML = 60
	timerCount = setInterval(function () {
		i++
		if (i == 61) {
			clearInterval(timerCount)
		} else {
			console.log(i)
			timer.innerHTML--
		}
		if (timer.innerHTML == 0) {
			result.innerHTML = 'you loose...'
			result.style.visibility = 'visible'
		}
	}, 1000)
}
