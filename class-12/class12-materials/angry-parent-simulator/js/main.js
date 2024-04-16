document.querySelector("#yell").addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const fMiddle = document.querySelector('#firstMiddle').value
  const lMiddle = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  document.querySelector('#placeToYell').innerText = fName + ' ' + fMiddle + ' ' + lMiddle + ' ' + lName
}