/*  
Zdjecia (assety) zostaly nazwne numerycznie od 0 +

1. Po kliknieciu na zdjecie, otworz backdrop z podgladem zdjecia ktore zostalo klikniete, przyciskami oraz x

2. Po kliknieciu w X, chcemy zeby backdrop z pogladem zniknal

3. Po kliknieci w next button, chcemy aby przegladane zdjecia sie inkrementowaly 

4. Po kliknieci w prev button, chcemy aby przegladane zdjecia sie dekremenotowaly
    a) obsluz sytuacje gdy mamy zdjecie zerowe. Jezeli wartosc countera bedzie zero, nie mozemy dekrementowac jej ponizej
    b) obsluz sytuacje na maksymalna liczbe zdjec
*/

const $imageList = document.querySelector('#image-list')
const $closeButton = document.querySelector('#close-button')
const $prevButton = document.querySelector('#prev-button')
const $nextButton = document.querySelector('#next-button')
const $backdrop = document.querySelector('#backdrop')
const $imagePreviewer = document.querySelector('#image-previewer')
let counter = 0

const assignImageSource = imageId => {
  $imagePreviewer.src = `/assets/${imageId}.jpg`
}

$imageList.addEventListener('click', event => {
	if (event.target.localName === 'img') {
		const imageId = event.target.id
		counter = imageId * 1
    assignImageSource(imageId)
		$backdrop.classList.remove('hide')
	}
})

$closeButton.addEventListener('click', () => {
	$backdrop.classList.add('hide')
})

$prevButton.addEventListener('click', () => {
	if (counter > 0) {
		counter = counter - 1
		assignImageSource(counter)
	}
})

$nextButton.addEventListener('click', () => {
	if (counter < 2) {
		counter = counter + 1
		assignImageSource(counter)
	}
})
