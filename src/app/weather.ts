export class Weather {
  country: string;
  name: string;
  icon: string;
  temp: number;
  description: string;
  humidity: number;
  speed: number;

  constructor(weatherApi) {
    let temp: any;
    if (temp = weatherApi['weather'][0]) {
      if (temp['icon']) {
        this.icon = `https://openweathermap.org/img/w/${weatherApi['weather'][0]['icon']}.png`;
      }
      if (temp['description']) {
        this.description = weatherApi['weather'][0]['description'];
      }
    }
    if (temp = weatherApi['main']) {
      if (temp['temp']) {
        this.temp = weatherApi['main']['temp'];
      }
      if (temp['humidity']) {
        this.humidity = weatherApi['main']['humidity'];
      }
    }
    if (weatherApi['sys']['country']) {
      this.country = weatherApi['sys']['country'];
    }
    if (weatherApi['name']) {
      this.name = weatherApi['name'];
    }
    if (weatherApi['wind']['speed']) {
      this.speed = weatherApi['wind']['speed'];
    }
  }
}
