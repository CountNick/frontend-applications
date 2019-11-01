import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    router: service(),
    //transitions to the places-list route, source: https://api.emberjs.com/ember/release/classes/RouterService    
    click(){
        this.router.transitionTo('instrument-list')
    }
});
