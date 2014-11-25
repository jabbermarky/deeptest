import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        didTransition: function() {
            var header = this.controllerFor('header');
            header.setPageName('Grade Players');
            return true; // Bubble the didTransition event
        },
        changePlayType: function() {
            console.log('changePlayType');
        }
    }
});
