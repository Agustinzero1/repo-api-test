//este documento js tiene las funciones necesarias para conectarse a la api

const api_key = "e682c9b0e1029e31f1c62d30e246fa82";
const QUERY_DATA = "&query=montevideo&units=m";
const LIST_URL = "http://api.weatherstack.com/current?access_key=" + api_key + QUERY_DATA;

/** - Consulto el **JSON** y lo retruno como un Objeto {}, *este codigo es identico al del ejercicio en grupo 4.6*
 * @param {string} url - URL donde se obtendra el **JSON** `EJ: http://www.test.com/file.json`
*/
var getJSONData = function(url){
    var result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;

          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}