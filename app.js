const cityName = document.querySelector('#cityName')
const form = document.querySelector('form')
const weatherContainer = document.querySelector('.weather-container')

let arrayList = []
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!arrayList.includes(cityName.value)) {
        const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=0301cc378063fc27ad4bdca1fd57b13b&units=metric`

    fetch(api_url)
    .then((data) => {
        return data.json()
        })
        .then((newData) => {
        showWeather(newData)    
        })
    arrayList.push(cityName.value)
    console.log(arrayList)
    } else {
        alert('You have card like this!!!')
    }
    
    cityName.value = ''
})



function showWeather(data) {
    let card = document.createElement('div')
    card.setAttribute('class', 'card mb-2')
    card.innerHTML = `
        <h5 class="card-title text-center mt-4">${data.name}, ${data.sys.country}</h5>
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
            <img src="./img/${data.weather[0].main}.png" class="card-img-top mb-2" alt="${data.weather[0].main} img">
            <p class="card-text">${data.weather[0].main}</p>
            <p class="card-text">${data.main.temp} ℃</p>
            <a href="#" class="btn btn-primary">DELETE THE CARD</a>
        </div>
    `
    weatherContainer.prepend(card)
    // document.body.style.background = `url('https://source.unsplash.com/1920x1280/?${data.weather[0].main}')`
}

weatherContainer.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'btn') {
        e.target.parentElement.parentElement.remove()
    }
})