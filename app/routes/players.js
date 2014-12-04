import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        didTransition: function() {
            //console.log('playerView didTransition');
            var header = this.controllerFor('header');
            //console.log('header controller is '+header);
            header.setPageName('Roster and Depth Chart');
            header.setMessage('');
            header.setMessage2Left('');
            header.setMessage2Right('Last Updated: mm-dd-yy hh:mmpm');
            //header.setMessage('player route');
            return true; // Bubble the didTransition event
        }
    },
    model: function() {
        return this.store.find('player');
    }
});
