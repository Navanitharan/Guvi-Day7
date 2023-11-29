var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3/all");

request.send();

request.onload=function(){
    var res=JSON.parse(request.response);

    var asia=res.filter((ele)=>ele.region=='Asia')
    console.log(asia)
  
  	console.log("Countries with population less than 2 lahks...");
  
  var poples2 = res.filter((ele)=>ele.population<200000)
  console.log(poples2)
  
  res.forEach((ele)=>{
    var names=ele.name
    console.log(`Name : ${names.official}; Capital : ${ele.capital}; Flag: ${ele.flag}`)
  })
  
  var poparr =res.map((ele)=>ele.population)
console.log(`Total population is : ${poparr.reduce((acc,ele)=>acc+ele,0)}`)
  
  var usdCountries = res.filter(function(country) {
      if (country.currencies) {
        for (var key in country.currencies) {
          if (key === "USD") {
            return true;
          }
        }
      }
      return false;
    });

  var usdNames = usdCountries.map(function(country) {
    return country.name.official;
  });
  console.log(usdNames);
}


