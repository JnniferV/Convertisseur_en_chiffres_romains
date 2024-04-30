const button = document.getElementById('convert-btn')
const input = document.getElementById('number')
const output = document.getElementById('output')
const romanNumerals = [
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
]
const numToRoman = (input) => {
  let result = ''
  for (let i = 0; i < romanNumerals.length; i++) {
    while (input >= romanNumerals[i][1]) {
      result += romanNumerals[i][0]
      input -= romanNumerals[i][1]
    }
  }
  return result
}

button.addEventListener('click', function () {
  if (input.value === '') {
    output.innerText = 'Please enter a valid number'
    return
  } else if (input.value <= 0) {
    output.innerText = 'Please enter a number greater than or equal to 1'
    return
  } else if (input.value >= 4000) {
    output.innerText = 'Please enter a number less than or equal to 3999'
    return
  } else {
    output.innerText = numToRoman(input.value)
  }
})

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    output.innerText = numToRoman(input.value)
  }
})

window.addEventListener(
  'scroll',
  function (e) {
    window.scrollTo(0, 0)
  },
  false
)