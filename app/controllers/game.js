import Ember from 'ember';

export default Ember.ObjectController.extend({
    playNumber: 1,
    menuVisible:false,
    playType: '',
    playChanged: false,
    actions: {
        gameNextPlay: function() {
            console.log('nextPlay');
            var playNumber = this.get('playNumber');
            this.set('playNumber',playNumber + 1);
        },
        gamePreviousPlay: function() {
            var playNumber = this.get('playNumber');
            if (playNumber > 1) {
                this.set('playNumber', playNumber - 1);
            }
            console.log('previousPlay');
        },
        gameChangePlayType: function() {
            console.log('changePlayType');
            this.toggleProperty('menuVisible');
        },
        gameGoBack: function() {
            console.log('gameGoBack');
        },
        gameContinue: function() {
            console.log('gameContinue');
        },
        gameNotes: function() {
            console.log('gameNotes');
        },
        gamePauseGrading: function() {
            console.log('gamePauseGrading');
        },
        gameChangePlayTo: function(newType) {
            console.log('change play type to '+newType);
            this.set('playType',newType);
            this.toggleProperty('menuVisible');
            this.set('playChanged', true);
        }
    }
});
