function convert() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
    document.querySelector(".calculation textarea").value = celsius + "°C * (9/5) + 32 = " + fahrenheit + "°F";
  }
  
  function reset() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.querySelector(".calculation textarea").value = "";
  }
  
  function reverse() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;
    document.getElementById("celsius").value = fahrenheit;
    document.getElementById("fahrenheit").value = celsius;
    document.querySelector(".calculation textarea").value = "";
  }