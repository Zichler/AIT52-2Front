async function getWeather() {
    const latitude = 51.3144;
    const longitude = 9.4593;
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const data = await response.json();
    
    const temperature = data.current_weather.temperature;
    const windSpeed = data.current_weather.windspeed;
    const weatherCode = data.current_weather.weathercode;
    const weatherDescription = getWeatherDescription(weatherCode);
    
    document.getElementById('temperature').textContent = `Temperature: ${temperature} ${data.current_weather_units.temperature}`;
    document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed} ${data.current_weather_units.windspeed}`;
    document.getElementById('weather-code').textContent = `Weather Code: ${weatherCode}`;
    document.getElementById('weather-description').textContent = `Weather Description: ${weatherDescription}`;
  }
  
  function getWeatherDescription(code) {
    let description;
    switch (code) {
      case 0:
        description = "Clear sky";
        break;
      case 1:
        description = "Mainly clear";
        break;
      case 2:
        description = "Partly cloudy";
        break;
      case 3:
        description = "Overcast";
        break;
      case 45:
        description = "Fog";
        break;
      case 48:
        description = "Depositing rime fog";
        break;
      case 51:
        description = "Drizzle: Light";
        break;
      case 53:
        description = "Drizzle: Moderate";
        break;
      case 55:
        description = "Drizzle: Dense intensity";
        break;
      case 56:
        description = "Freezing Drizzle: Light";
        break;
      case 57:
        description = "Freezing Drizzle: Dense intensity";
        break;
      case 61:
        description = "Rain: Slight";
        break;
      case 63:
        description = "Rain: Moderate";
        break;
      case 65:
        description = "Rain: Heavy intensity";
        break;
      case 66:
        description = "Freezing Rain: Light";
        break;
      case 67:
        description = "Freezing Rain: Heavy intensity";
        break;
      case 71:
        description = "Snow fall: Slight";
        break;
      case 73:
        description = "Snow fall: Moderate";
        break;
      case 75:
        description = "Snow fall: Heavy intensity";
        break;
      case 77:
        description = "Snow grains";
        break;
      case 80:
        description = "Rain showers: Slight";
        break;
      case 81:
        description = "Rain showers: Moderate";
        break;
      case 82:
        description = "Rain showers: Violent";
        break;
      case 85:
        description = "Snow showers: Slight";
        break;
      case 86:
        description = "Snow showers: Heavy";
        break;
      case 95:
        description = "Thunderstorm: Slight or moderate";
        break;
      case 96:
        description = "Thunderstorm with slight hail";
        break;
      case 99:
        description = "Thunderstorm with heavy hail";
        break;
      default:
        description = "Unknown weather code";
    }
    return description;
  }
  
  // Вызов функции
  getWeather();
  