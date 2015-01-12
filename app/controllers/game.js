import Ember from 'ember';

export default Ember.ObjectController.extend({
    playNumber: 1,
    menuVisible:false,
    playType: '',
    playChanged: false,
    mentalGrade: -1,
    techniqueGrade: 0,
    effortGrade: 2,
    actions: {
        appShowScreenTips: function() {
            console.log('game.appShowScreenTips');
            this.send('appHideHamburgerMenu');
        },
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
        gameAddPlayer: function() {
            console.log('gameAddPlayer');
        },
        gameGradeDec2: function(m) {
            console.log('gameGradeDec2 %s', m);
            switch (m) {
                case 'mentalGrade': this.set(m,-2);break;
                case 'techniqueGrade': this.set(m,-2);break;
                case 'effortGrade': this.set(m,-2);break;
            }
        },
        gameGradeDec1: function(m) {
            console.log('gameGradeDec1 %s', m);
            switch (m) {
                case 'mentalGrade': this.set(m,-1);break;
                case 'techniqueGrade': this.set(m,-1);break;
                case 'effortGrade': this.set(m,-1);break;
            }
        },
        gameGradeReset: function(m) {
            console.log('gameGradeReset %s', m);
            switch (m) {
                case 'mentalGrade': this.set(m,0);break;
                case 'techniqueGrade': this.set(m,0);break;
                case 'effortGrade': this.set(m,0);break;
            }
        },
        gameGradeInc1: function(m) {
            console.log('gameGradeInc1 %s', m);
            switch (m) {
                case 'mentalGrade': this.set(m,1);break;
                case 'techniqueGrade': this.set(m,1);break;
                case 'effortGrade': this.set(m,1);break;
            }
        },
        gameGradeInc2: function(m) {
            console.log('gameGradeInc2 %s', m);
            switch (m) {
                case 'mentalGrade': this.set(m,2);break;
                case 'techniqueGrade': this.set(m,2);break;
                case 'effortGrade': this.set(m,2);break;
            }
        },
        gameChangePlayTo: function(newType) {
            console.log('change play type to '+newType);
            this.set('playType',newType);
            this.toggleProperty('menuVisible');
            this.set('playChanged', true);
        }
    }
});
