import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    instrumentName: DS.attr('string'),
    instrumentDescription: DS.attr('string')
});
