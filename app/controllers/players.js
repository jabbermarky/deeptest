import Ember from 'ember';

export default Ember.ArrayController.extend({
    caption:'player caption',
    sortProperties: ['overallGrade'],
    sortAscending: true,

    allPlayers: function() {
        return this.get('arrangedContent');
    }.property('arrangedContent.[]')
});
