// Write your code here!

// Test # 1 - solution code
const mainElement = document.querySelector('main#main')
mainElement.remove()

// Test # 2 - solution code
const newHeader = document.createElement('h1')

// Test # 3 - solution code
newHeader.id = 'victory'
// newHeader.setAttribute('id', 'victory')

// Test # 4 - solution code
newHeader.textContent = "Drew is the champion"

// Bonus: Append the newHeader h1 element to document.body
document.body.appendChild(newHeader)