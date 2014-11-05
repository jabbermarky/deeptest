import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        didTransition: function() {
            //console.log('playerView didTransition');
            var header = this.controllerFor('header');
            //console.log('header controller is '+header);
            header.setPageName('Sign In');
            //header.setMessage('player route');
            return true; // Bubble the didTransition event
        }
    }
});
