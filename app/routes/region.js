import Route from '@ember/routing/route';

//Got this piece of fetch code from Laurens' example at: https://codepen.io/Razpudding/pen/LKMbwZ 
//puts the endpoint in a variable
const url ="https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-36/sparql"
//puts the SPARQL query in a variable
const query = `

PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?cho ?title ?type (SAMPLE(?description) AS ?firstDescription) (SAMPLE(?img) AS ?instrumentImg) ?continent ?region ?placeName WHERE {
  <https://hdl.handle.net/20.500.11840/termmaster3> skos:prefLabel* ?place .
  ?place skos:prefLabel ?continent .

VALUES ?type { "muziekinstrument" "strijkinstrument" "slaginstrument" "blaasinstrumenten"}

?cho dct:spatial ?placeNameLink;
 dc:type ?type;
 dc:title ?title;
 dc:description ?description;
 edm:isShownBy ?img.
?regionLink skos:prefLabel ?region.
?place skos:narrower ?regionLink.
?placeNameLink skos:prefLabel ?placeName.


FILTER langMatches(lang(?title), "ned")
}

`

export default Route.extend({

  //model hook returns the fetched data to the instrument component, resource used: https://guides.emberjs.com/release/routing/specifying-a-routes-model/
   model() {
      
      //Got this piece of fetch code from Laurens' example at: https://codepen.io/Razpudding/pen/LKMbwZ 
      const connectionString = url+"?query="+ encodeURIComponent(query) +"&format=json";

      return fetch(connectionString)
        .then(response => response.json())
        .then(json => {
        //console.log(json)

        //puts the bindings array in a new bindings variable
        let bindings =  json.results.bindings

        //loops through the bindings array
        for (let i=0; i < bindings.length; i++){
         
          //puts every binding in item variable
          let item = bindings[i]
          //console.log(item)
          
          //gives every object value a new name, makes it easier to call upon from template
          item.cho = item.cho.value
          item.continent = item.continent.value
          item.placeName = item.placeName.value
          item.title = item.title.value
          item.type = item.type.value
          item.description = item.firstDescription.value
          item.img = item.instrumentImg.value

        }
        //console.log(bindings)

        //returns the bindings so they can be used in the component
        return bindings
       })
    }
});
