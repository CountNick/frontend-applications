import Route from '@ember/routing/route';

const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-36/sparql"
//Note that the query is wrapped in es6 template strings to allow for easy copy pasting
const query = `
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?cho ?placeName ?title ?type ?description WHERE {
   	<https://hdl.handle.net/20.500.11840/termmaster2> skos:narrower* ?place .
   	?place skos:prefLabel ?placeName .
  
  	VALUES ?type { "muziekinstrument" "strijkinstrument"}
  
  	?cho dct:spatial ?place;
    dc:type ?type;
    dc:title ?title;
    dc:description ?description;
    edm:isShownBy ?picture.
 
}
`
/*runQuery(url, query)

function runQuery(url, query){
  //Test if the endpoint is up and print result to page 
  // (you can improve this script by making the next part of this function wait for a succesful result)
  fetch(url)
    .then(res => console.log("Status of API: " + res.status))
	// Call the url with the query attached, output data
	fetch(url+"?query="+ encodeURIComponent(query) +"&format=json")
	.then(res => res.json())
	.then(json => {
  console.log(json.results.bindings)
	})
}*/


export default Route.extend({

   model() {
      //console.log("het werkt!")

      const connectionString = url+"?query="+ encodeURIComponent(query) +"&format=json";

      //console.log(connectionString)


      return fetch(connectionString)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        //let dataArray = [];

        let bindings =  json.results.bindings

        //console.log(bindings)

        for (var i=0; i < bindings.length; i++){
          let item = bindings[i]
          //console.log(item)
          
          item.cho = item.cho.value
          item.placeName = item.placeName.value
          item.title = item.title.value
          item.type = item.type.value
          item.description = item.description.value
          item.picture = "picture"
          /*let newItemObject = {
            item.cho: item.cho.value,
            item.placeName: item.placeName.value,
            item.title: item.title.value,
            item.type: item.type.value,
            item.description: item.description.value,
            item.picture: item.picture.value
          }*/
          
          
          //dataArray.push(item);
          //console.log(newArray);
        }
        console.log(bindings)
        return bindings

         //console.log(newArray);
       
       })
    }

    

});
