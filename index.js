// Write your code here!

const mainElement = document.getElementById('main')
mainElement.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = "Bob is the champion"

document.body.appendChild(newHeader)

// Extra stuff

const divElement = document.createElement('div')
divElement.id = "container"
document.body.appendChild(divElement)

divElement.innerHTML = "Hello\nWorld"