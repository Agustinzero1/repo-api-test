//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(LIST_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            console.log(resultObj.data); //debug

            //muestro los resultados en una tabla formateada
            MostrarResultado(resultObj.data)
        }
    });
});

/** - esta funcion mostrara los datos en el html, en un widget de clima
 * @summary - texto
 * @param {{}} JSONData - el objeto data del `Resultado` _del_ **JSON** 
 */
function MostrarResultado(JSONData){
    
    //los datos de la ubicacion
    document.getElementById("city").textContent = JSONData.location.name  + ",";
    document.getElementById("estate").textContent = JSONData.location.region  + ",";
    document.getElementById("Country").textContent = JSONData.location.country  + ".";

    //los datos de la temperatura
    document.getElementById("Text_Temp").textContent = JSONData.current.temperature  + "°c";

    //los datos extra (viento, precipitaciones y presion)
    document.getElementById("viento").textContent = "Viento: " + JSONData.current.wind_speed + " kmph";
    document.getElementById("precip").textContent = "Precip.: " + JSONData.current.precip  + " mm";
    document.getElementById("presion").textContent = "Presión: " + JSONData.current.pressure  + " mb";
    
    //los datos del tipo de clima y su icono
    document.getElementById("curren_weather_img").src = JSONData.current.weather_icons[0];
    document.getElementById("current_weather_desc").textContent = JSONData.current.weather_descriptions[0];

}