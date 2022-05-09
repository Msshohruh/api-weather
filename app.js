const cityName = document.querySelector('#cityName')
const form = document.querySelector('form')
const weatherContainer = document.querySelector('.weather-container')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=a8b8a5d59c1304572cc2a4dc565dc830&units=metric`

    fetch(api_url)
    .then((data) => {
        return data.json()
    })
    .then((newData) => {
        showWeather(newData)
    })
    cityName.value = ''
})



function showWeather(data) {
    console.log(data.name)
    console.log(data.main.temp)
    console.log(data)
    console.log(data.weather[0].main)


    weatherContainer.innerHTML += `
    <div class="card mb-2" style="border-radius: 14px;">
        <h5 class="card-title text-center mt-4">${data.name}, ${data.sys.country}</h5>
        <div class="card-body d-flex flex-column justify-content-center align-items-center">
            <img src="./img/${data.weather[0].main}.png" class="card-img-top mb-2" alt="${data.weather[0].main} img">
            <p class="card-text">${data.weather[0].main}</p>
            <p class="card-text">${data.main.temp} ℃</p>
            <a href="#" class="btn btn-primary">DELETE THE CARD</a>
        </div>
    </div>
    `
}

weatherContainer.addEventListener('click', (e) => {
    if (e.target.classList[0] == 'btn') {
        e.target.parentElement.parentElement.remove()
    }
})
