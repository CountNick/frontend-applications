import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    cho: DS.attr('uri'),
    placeName: DS.attr('string'),
    title: DS.attr('string'),
    type: DS.attr('string'),
    picture: DS.attr('string')
});
