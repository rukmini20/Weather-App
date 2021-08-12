interface CoordI {
  lon: number
  lat: number
}
interface MainI {
  temp: number
  feels_like: number
  temp_min:number
  temp_max:number
  pressure:number
  humidity: number
  sea_level:number
  grnd_level: number
}
interface WindI {  
  speed: number
  deg:number
  gust: number
}
interface CloudsI {  
  speed: number
  deg:number
  gust: number
}
interface SysI {
  country: string
  sunrise:number
  sunset: number
}
interface WeatherI{
  id: number
  main: string
  description:string
  icon:string
}

interface CityI {
  coord: CoordI
  weather: Array<WeatherI>
  base: string
  main: MainI
  visibility: number
  wind: WindI
  clouds: CloudsI
  dt: number
  sys: SysI
  timezone: number
  id: number
  name: string
  cod: number
}
export default CityI