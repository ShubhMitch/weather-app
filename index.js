// api key f859b5fb24cd005f0c22d5093f36217d
// api - api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let inputValue = document.querySelector('#inputValue')
let submit = document.querySelector('#submit')
let cityName = document.querySelector('.name')
let desc = document.querySelector('.desc')
let temp = document.querySelector('.temp')
let icon = document.querySelector('.icon')
let humidity = document.querySelector('.humidity')
let wind = document.querySelector('.wind')
let nameValue;
let tempValue;
let iconValue;
let descValue;
let humidityValue;
let windValue;
let loader = document.querySelector('.loader')
window.addEventListener('load', vanish)

function vanish(){
    loader.classList.add('vanish');
}
function printValues(){
      //checks whether the pressed key is "Enter"
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.value +'&units=metric&appid=f859b5fb24cd005f0c22d5093f36217d')

        .then(response => response.json())
        .then(data => {
            nameValue = data['name'];
            tempValue = data['main']['temp'];
            humidityValue = data['main']['humidity'];
            iconValue = data['weather'][0]['icon'];
            windValue = data['wind']['speed'];
            descValue = data['weather'][0]['description'];
            cityName.innerHTML = 'Weather in '+ nameValue;
            console.log(iconValue)
            icon.innerHTML = `<img src ="http://openweathermap.org/img/wn/${iconValue}@2x.png"></img>`;
            temp.innerHTML =  tempValue + '°C';
            desc.innerHTML = descValue;
            humidity.innerHTML = "Humidity: " + " " + humidityValue;
            wind.innerHTML = "Wind: " + " " + windValue + "km/hr";

        })
        .catch(err => alert('Wrong City Name'))
    }


inputValue.addEventListener("keypress", (e)=> {
    if (e.code === "Enter") {
    printValues();
    }
});


submit.addEventListener('click', () =>{
    printValues();
})
