var time = new Date()
console.log(time.getHours())
const timenow = time.getHours()
var timePeriod = (timenow >= 6 && timenow<8) ? 'sunrise' : 
(timenow >= 8 && timenow<12) ? 'morning' :
(timenow >= 12 && timenow<14) ? 'noon' :
(timenow >= 14 && timenow<16) ? 'afternoon' : 
(timenow >= 17 && timenow<20) ? 'evening' : 
'night sky';
console.log(timePeriod)
fetch('http://api.openweathermap.org/data/2.5/weather?q=Nairobi,ke&units=metric&APPID=d541bfdf8ce45768abcebeac0bfdc560')
.then(res => res.json())
.then(data => 
    {console.log(data)
        let icon = "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        document.querySelector('.icon').src = icon
        document.querySelector('.city').innerText = data.name
        document.querySelector('.weather').innerText= data.weather[0].main
        document.querySelector('.description').innerText = data.weather[0].description
        document.querySelector('.temp').innerHTML = Math.floor(data.main.temp ) + `<sup>o</sup> `+" C"

       const search_item = data.weather[0].description + '' + timePeriod 
       fetch("https://api.unsplash.com/search/photos?query="+search_item+"&client_id=MIeSZoYX0NPInrjXJDli7Hq4dsOIqdha8h1JRImL__4")
       .then(response => response.json())
       .then(
           result => {console.log(result)
           const img_src =  result.results[2].urls.regular
       document.querySelector('.container').setAttribute("style","background-image:url("+img_src+")")
       })
       .catch(error => console.log('error', error));
   
    })

const access_key = 'MIeSZoYX0NPInrjXJDli7Hq4dsOIqdha8h1JRImL__4'


// const pexels_key = '563492ad6f91700001000001a792cd3656b34154bee3d8f774ed12aa'
// fetch('https://api.pexels.com/v1/search/?query=hills',{
//     headers:{
//         Authorization:pexels_key
//     }
// })
// .then(response =>{
//     return response.json()
// })
// .then(data=>
//     {
//         console.log(data)
//         console.log(data.photos[1].url)
//         // document.querySelector('.description').innerText = data.photos[0].url
//        const img_src =  data.photos[0].url
//        document.querySelector('.weather-container').setAttribute("style","background-image:url("+img_src+")")
     
//     })



var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    authorization:'MIeSZoYX0NPInrjXJDli7Hq4dsOIqdha8h1JRImL__4'
  };
  
 