import Ember from 'ember';

export default Ember.ArrayController.extend({
    caption:'player caption',
    season:'2014',
    team:'Princeton Tigers',

    sortProperties: ['shortNameInitialLast'],
    sortAscending: true,
    sortOrder: 'alpha',
    sortAlpha: true,
    sortNumerical: false,
    sortPosition: false,

    allPlayers: function() {
        return this.get('arrangedContent');
    }.property('arrangedContent.[]'),
    setFlags: function() {
        var sortOrder = this.get('sortOrder');
        this.set('sortAlpha', false);
        this.set('sortNumerical', false);
        this.set('sortPosition', false);

        if (sortOrder === 'alpha') {
            this.set('sortAlpha', true);
            this.set('sortProperties',['shortNameInitialLast']);
        } else if (sortOrder === 'numerical') {
            this.set('sortNumerical', true);
            this.set('sortProperties',['jerseyNumber']);
        } else if (sortOrder === 'position') {
            this.set('sortPosition', true);
            this.set('sortProperties',['position','shortNameInitialLast']);
        }
    },
    actions: {
        playersAlphabetical: function () {
            console.log('playersAlphabetical');
            this.set('sortOrder', 'alpha');
            this.setFlags();
        },
        playersNumerical: function () {
            console.log('playersNumerical');
            this.set('sortOrder', 'numerical');
            this.setFlags();
        },
        playersGroupByPosition: function () {
            console.log('playersGroupByPosition');
            this.set('sortOrder', 'position');
            this.setFlags();
        }
    }
});
