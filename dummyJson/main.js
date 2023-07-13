const axios=require('axios')

const fetchWeather=async()=>{
    const { data, status } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Pokhara&units=metric&appid=06ce344a70cddd88228d608a37707d38`)

    console.log(data);
}


fetchWeather()


