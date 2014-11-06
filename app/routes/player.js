import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        didTransition: function() {
            var header = this.controllerFor('header');
            header.setPageName('Player Information');
            return true; // Bubble the didTransition event
        }
    }
});