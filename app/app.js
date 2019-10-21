import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const query = `

  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
  PREFIX dc: <http://purl.org/dc/elements/1.1/>
  PREFIX dct: <http://purl.org/dc/terms/>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  PREFIX edm: <http://www.europeana.eu/schemas/edm/>
  PREFIX foaf: <http://xmlns.com/foaf/0.1/>

    SELECT ?cho ?placeName ?title ?type ?description ?picture WHERE {
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


const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

