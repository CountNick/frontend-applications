# :palm_tree:Tropen instrumenten:palm_tree:

![Tropen Instrumenten](https://i.imgur.com/nDx1jd5.png)

## Contents

* ### [Concept](#Concept)
* ### [How does it work?](#"How-does-it-work?")
* ### [Fetching data](#"Fetching-data")
* ### [Installation](#Installation)
* ### [Check out live version here](https://tropeninstrumenten.herokuapp.com/continenten)
* ### [Read about my process in the project wiki](https://github.com/CountNick/frontend-applications/wiki)

## Concept:palm_tree:

This app is about music instruments in het Tropenmuseum in Amsterdam. The app focuses on musicians in search of inspiration. When users enter the website they are greeted with a worldmap where they can choose a continent they find interesting. 

*_Continents page_*
![HomePage](https://i.imgur.com/xcYUbTS.png)

After clicking on the continent the user is able to click on one of the regions in this continent.

#### *_Africa page_*
![Africa](https://i.imgur.com/FKjxO2v.png)

After clicking on the region the places in this specific region are shown.

#### *_Uganda page_*
![Uganda](https://i.imgur.com/N2Y4zbd.png)

Now the images will load with an reference to the place the instrument originates from.

#### *_Instruments page_*
![Instrumenten](https://i.imgur.com/AbxVDjg.png)

Upon licking on one of the images the instrument image expands with additional information about the specific instrument. Here users can find information about the instrument like the name, place of origin, a image and it's even possible to listen to the sounds the instruments make. Which makes it gret for artists looking for inspiration.

#### *_Instrumetens detail page_*
![Detail](https://i.imgur.com/fFrlfrR.png)

## How does it work?:palm_tree:

When you land on the homepage of the application you can choose a continent which you find interesting. When clicking on the continent you get a list of countries in that continent which you can click on. After clicking on a country you see instruments that originate from this country. When clicking on one of the images get the detailpage of that instrument with a picture description etc.

### Fetching data:palm_tree:

The app fetches queries for each continent, the region the object comes from, the placename, type of instrument, and the imagelink of an object.

```
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX dc: <http://purl.org/dc/elements/1.1/>
PREFIX dct: <http://purl.org/dc/terms/>
PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
PREFIX edm: <http://www.europeana.eu/schemas/edm/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?cho ?title ?type (SAMPLE(?description) AS ?firstDescription) (SAMPLE(?img) AS ?instrumentImg) ?continent (SAMPLE(?region) As ?firstRegion) ?placeName WHERE {
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

```



## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation:cd:

* `git clone <repository-url>` this repository
* `cd tropenmuseum`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
