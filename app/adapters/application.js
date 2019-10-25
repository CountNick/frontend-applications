import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-36/sparql',

}
);
