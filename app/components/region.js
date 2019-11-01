import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
// Source: https://guides.emberjs.com/release/components/handling-events/
    router: service(),
        //transitions to the places-list route, source: https://api.emberjs.com/ember/release/classes/RouterService    
        click(){
            this.router.transitionTo('places-list')

            if(this.region.region === "Zuidelijk Afrika"){
                //console.log(this.region)
            }

            else if(this.region.region === "Centraal-Afrika"){
                //console.log(this.region.placeName)
            }

            else if(this.region.region === "West-Afrika"){
                //console.log(this.region.placeName)
            }
        }
    
});
