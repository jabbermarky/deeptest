import Ember from 'ember';

export default Ember.ArrayController.extend({
    caption:'Veteran Watch List',
    linkToUrl: 'dashboard/veteranWatchList',
    sortProperties: ['overallGrade'],
    sortAscending: true,

    top5Players: function() {
        return this.get('arrangedContent').slice(0,5);
    }.property('arrangedContent.[]'),
    top10Players: function() {
        return this.get('arrangedContent').slice(0,10);
    }.property('arrangedContent.[]'),
    allPlayers: function() {
        return this.get('arrangedContent');
    }.property('arrangedContent.[]')
});
