import Ember from 'ember';

export default Ember.ArrayController.extend({
    caption:'Top New Players',
    linkToUrl: 'dashboard/topNewPlayers',
    sortProperties: ['overallGrade'],
    sortAscending: false,
    top5Players: function() {
        return this.get('arrangedContent').slice(0,5);
    }.property('arrangedContent.[]'),
    allPlayers: function() {
        return this.get('arrangedContent');
    }.property('arrangedContent.[]'),
    top10Players: function() {
        return this.get('arrangedContent').slice(0,10);
    }.property('arrangedContent.[]')
});
/*
 "gr" = overall game average in current season
 "gm" = total number of games played in current season

 sorted by "gr" descending
 first year or minimal play time last year

*/
