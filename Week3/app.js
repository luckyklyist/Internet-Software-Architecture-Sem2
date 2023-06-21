import logJSONData from './fetchingWeather.js'

const weatherApp = async () => {
    try {
        const weatherData = await logJSONData();
        document.querySelector("#weather_value").innerText = `${weatherData.main.temp}`
    } catch (error) {
        console.log(error)
    }
}

weatherApp();


