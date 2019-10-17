import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return [{
            title: "Amerika"
        }, {
            title: "Azië"
        }, {
            title: "Afrika"
        }, {
            title: "Eurazië"
        }]
    }

});
