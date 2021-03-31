function loadWeather() {
  let city = document.getElementById("cityId").value;
  if(city == ""){
    alert('Please enter a city to check the weather')
  }else{
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET",`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a12e009fe0ae061ecac351eb2dcb7dcd`);
    xmlHttp.send();
  
    xmlHttp.onreadystatechange = (event) => {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        let res = xmlHttp.response;
        let weatherUpdate = JSON.parse(res);
        let country = weatherUpdate.sys.country;
        let temp = weatherUpdate.main.temp;
        let name = weatherUpdate.name
        let weatherMain = weatherUpdate.weather[0].main;
        let weatherDescription = weatherUpdate.weather[0].description;
        document.getElementById("country").innerHTML = "country : " + country;
        document.getElementById('temp').innerHTML =  "temp : " + temp; 
        document.getElementById('name').innerHTML = "city name : " + name;
        document.getElementById('weather').innerHTML = "Weather : " + weatherMain;
        document.getElementById('description').innerHTML = "weatherDescription : " + weatherDescription;
      } 
    };
  }

 
}

//api.weatherstack.com/forecast?access_key=d5c3af57a0bdb995552d6c1c673c34db&query=Nigeria
