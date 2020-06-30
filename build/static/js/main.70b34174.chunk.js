(this.webpackJsonpshowlocalweather=this.webpackJsonpshowlocalweather||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(2),c=a.n(s),o=(a(12),a(3)),r=a(4),l=a(6),u=a(5),m=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{name:"degree-type",id:"celsius",value:"celsius",onClick:e.Click},"\xb0C"),i.a.createElement("button",{name:"degree-type",id:"fahrenheit",value:"fahrenheit",onClick:e.Click},"\xb0F"))};var h=function(e){var t,a,n=Math.round(e.temp),s=Math.round(1.8*n+32);return console.log(e),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"cards pt-4"},i.a.createElement("h1",null,e.city,", ",e.country),i.a.createElement(m,{Click:e.Clicked}),i.a.createElement("h5",{className:"py-4"},i.a.createElement("i",{className:"wi ".concat(e.icon," display-1")})),i.a.createElement("h1",{className:"py-2"},"Now: ","celsius"===e.degreeType?n+"\xb0C":s+"\xb0F"),(t=e.temp_min,a=e.temp_max,i.a.createElement("h3",null,i.a.createElement("span",{className:"px-4"},"Min: ",t,"\xb0"),i.a.createElement("span",{className:"px-4"},"Max: ",a,"\xb0"))),i.a.createElement("h4",{className:"py-2"},"Feels like: ",e.feels_like),i.a.createElement("h4",{className:"py-4"},e.description)))},p=(a(13),a(14),a(15),"eb1bf46af9d73715c31e3645e772dd3c"),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).updateForecastDegree=function(e){n.setState({degreeType:e.target.value})},n.state={isLoading:!1,degreeType:"celsius",city:null,icon:null,country:null,temp:null,temp_min:null,temp_max:null,feelslike:null,description:null,error:""},n.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},n}return Object(r.a)(a,[{key:"getWeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<=232:this.setState({icon:e.Thunderstorm});break;case t>=300&&t<=321:this.setState({icon:e.Drizzle});break;case t>=500&&t<=531:this.setState({icon:e.Rain});break;case t>=600&&t<=622:this.setState({icon:e.Snow});break;case t>=701&&t<=781:this.setState({icon:e.Atmosphere});break;case 800===t:this.setState({icon:e.Clear});break;case t>=801&&t<=804:this.setState({icon:e.Clouds});break;default:this.setState({icon:e.Clouds})}}},{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.fetchWeather(t.coords.latitude,t.coords.longitude)}),(function(t){e.setState({error:"Error Getting Weather Conditions"})}))}},{key:"fetchWeather",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:25,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25;fetch("http://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(a,"&APPID=").concat(p,"&units=metric")).then((function(e){return e.json()})).then((function(t){e.setState({city:t.name,country:t.sys.country,temp:e.calCelsius(t.main.temp),temp_min:e.calCelsius(t.main.temp_min),temp_max:e.calCelsius(t.main.temp_max),feelslike:e.calCelsius(t.main.feels_like),description:t.weather[0].description,isLoading:!1}),e.getWeatherIcon(e.weatherIcon,t.weather[0].id),console.log(t)}))}},{key:"calCelsius",value:function(e){return Math.floor(e)}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(h,{Clicked:this.updateForecastDegree,city:this.state.city,country:this.state.country,temp:this.state.temp,temp_min:this.state.temp_min,temp_max:this.state.temp_max,feels_like:this.state.feelslike,description:this.state.description,icon:this.state.icon,degreeType:this.state.degreeType}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,a){e.exports=a(16)}},[[7,1,2]]]);
//# sourceMappingURL=main.70b34174.chunk.js.map