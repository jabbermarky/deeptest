import Ember from 'ember';

export default Ember.ArrayController.extend({
    caption:'Top New Players',
    sortProperties: ['seasonAvgGrade'],
    sortAscending: false,
    newPlayers:function() {
        return this.get('arrangedContent').filter(function(player) {
                return player.get('isNewPlayer');
            }
        );
    },
    top5: function() {
        return this.newPlayers().toArray().slice(0,5);
    }.property('arrangedContent.[]')
});
/*
 "gr" = overall game average in current season
 "gm" = total number of games played in current season

 sorted by "gr" descending
 first year or minimal play time last year

*/


/*
filteredContent: function(){
    var filter = this.get('filter');
    var rx = new RegExp(filter, 'gi');
    var countries = this.get('arrangedContent');

    return countries.filter(function(country) {
        return country.get('name').match(rx) || country.get('continent').match(rx);
    });

}.property('arrangedContent', 'filter'),
*/