import Route from '@ember/routing/route';



export default Route.extend({

   model() {
       return this.store.findRecord(`
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
  	dc:description ?description.
 
}
`);
        
        /*return [{
            title: "instrument 1",
            description: "Description here",
            image:"image link"
        }, {
            title: "instrument 2",
            description: "Description here",
            image:"image link"
        }, {
            title: "instrument 3",
            description: "Description here",
            image:"image link"
        }, {
            title: "instrument 4",
            description: "Description here",
            image:"image link"
        }]*/
    }

    

});
