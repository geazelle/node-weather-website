
console.log(`client site javascript created`)

const weatherForm = document.querySelector(`form`)
const search = document.querySelector(`input`)
const messageOne = document.querySelector(`#message-1`)
const messageTwo = document.querySelector(`#message-2`)

weatherForm.addEventListener(`submit`, (event) => {
    event.preventDefault()

    const location = search.value

    messageOne.innerHTML = `<img class="load" src="/img/loading.gif">`
    messageTwo.textContent = ``


    console.log(location)

    fetch(`/weather?address=` + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})