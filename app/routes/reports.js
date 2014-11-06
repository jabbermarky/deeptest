import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        didTransition: function() {
            //console.log('playerView didTransition');
            var header = this.controllerFor('header');
            //console.log('header controller is '+header);
            header.setPageName('Reports');
            //header.setMessage('player route');
            return true; // Bubble the didTransition event
        }
    },
    model: function() {
        return this.store.find('report');
    }
});
