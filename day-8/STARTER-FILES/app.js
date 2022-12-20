const daysOfWeekMap = {
    0: 'SUN', 
    1: 'MON', 
    2: 'TUES', 
    3: 'WED', 
    4: 'THUR', 
    5: 'FRI', 
    6: 'SAT'
}

const iconNameToSizeMap = {
    cloudy: { width: 264, height: 166},
    sunny: { width: 208, height: 213},
    stormy: { width: 246, height: 187},
    snowy: { width: 230, height: 196},
    'partly-cloudy': {width: 230, height:209},
    rainy: { width: 160, height: 222},
}

const fetchWeatherData = async() => {
  const data = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=40.7484&lon=73.9857&exclude=current,minutely,hourly,alerts&appid=9b1dbcb0b7785ec91e3ae7b6d0a239d0&units=imperial`);

  const response = await data.json();
  console.log(response)
}

document.addEventListener('DOMContentLoaded', () => {
  fetchWeatherData();
})
