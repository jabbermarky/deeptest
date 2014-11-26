import Ember from 'ember';

export default Ember.Route.extend({
    afterModel: function(game) {
        var header = this.controllerFor('header');
        var message = game.get('visitorTeam') + ' ' +
                      game.get('visitorScore') + ' @ ' +
                      game.get('homeTeam') + ' ' +
                      game.get('homeScore') + ' (' +
                      game.get('date') + ')';
        header.setMessage(message);
    },
    actions: {
        didTransition: function() {
            var header = this.controllerFor('header');
            header.setPageName('Grade Players');
            header.setMessage2Left('');
            header.setMessage2Right('');
            return true; // Bubble the didTransition event
        }
    }
});

/*
player order starts with order from previous page, i.e. selected players from last play are automatically
first in current play

play data is not needed to start grading.

game grading can be paused and resumed

need logged in user to determine position group, i.e. which players / positions this user normally grades.

need change play type menu; highlight [play type] in yellow when play is changed from default

need player selection screen in order to "add player"

need player depth chart menu

need notes text area overlays

need grades for multiple players per play

need current game information

need toggle button

need player component that allows position from depth chart
 */
