import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        didTransition: function() {
            var header = this.controllerFor('header');
            header.setPageName('Grade Players');
            header.setMessage('');
            header.setMessage2Left('');
            header.setMessage2Right('');
            return true; // Bubble the didTransition event
        },
        createGame: function() {
            console.log('createGame ');
        },
        gradeGame: function(game) {
            console.log('gradeGame '+game);
            this.transitionTo('game',game);
        }
    },
    model: function() {
        return this.store.find('game');
    }
});
