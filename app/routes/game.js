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

/*
need logged in user to determine position group, i.e. which
players / positions this user normally grades.

play data is not needed to start grading.

game grading can be paused and resumed

need change play type menu

need player selection screen in order to "add player"

need player depth chart menu

need notes text area overlays

need grades for multiple players per play

need current game information

need button with 2 lines of text
 */
