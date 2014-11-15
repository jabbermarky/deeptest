import Ember from 'ember';

export default Ember.ArrayController.extend({
    caption:'Top New Players',
    sortProperties: ['seasonAvgGrade'],
    sortAscending: false,
    filteredContent: function() {
        return this.get('arrangedContent').slice(0,5);
    }.property('arrangedContent.[]')
});
/*
 "gr" = overall game average in current season
 "gm" = total number of games played in current season

 sorted by "gr" descending
 first year or minimal play time last year

*/
