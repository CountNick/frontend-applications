import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        console.log('dynamic route: ' + params.placeName)
        
    }
});
