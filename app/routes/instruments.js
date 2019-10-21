import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return [{
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
        }]
    }

});
