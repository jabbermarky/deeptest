import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        didTransition: function() {
            var header = this.controllerFor('header');
            header.setPageName('Dashboard');
            return true; // Bubble the didTransition event
        }
    }
});
