import Ember from 'ember';

export default Ember.ArrayController.extend({
    sortProperties: ['seasonAvgGrade'],
    sortAscending: false,
    caption:'Top Ten Overall Performers',

    //<<< this works
    sortedSeasonStats: function() {
        var self = this;
        var resp = Ember.ArrayProxy.extend(Ember.SortableMixin).create({
            content: Ember.A([])
        });
        resp.set('sortAscending',false);
        resp.set('sortProperties', ['overallGrade']);
        self.get('seasonStats').then(function (stats){
            resp.set('content', stats);
        });
        return resp;
    }.property('seasonStats', 'seasonStats.[]'),
    //>>>

    //<<< this works
    seasonStats:function() {
        return this.store.find('seasonStat');
    }.property(),
    //>>>

    //<<< this works
    seasonTop10Performers :function() {
        var self = this;
        var resp = Ember.ArrayProxy.extend(Ember.SortableMixin).create({
            content: self.get('seasonStats')
        });
        resp.set('sortAscending',false);
        resp.set('sortProperties', ['overallGrade']);
        return resp.slice(0,10);
    }.property('seasonStats', 'seasonStats.[]'),
    //>>>

    //<<< this works
    filteredContent : function() {
        return this.get('arrangedContent').slice(0,10);
    }.property('arrangedContent.[]')
    //>>>
});
/*
 "Last Game" = overall game average in last game
 "Season Avg" = overall game average in current season

 sorted by "Season Avg" descending

 aggregations
 number of games played by player = count of rows where player = player_id
 season average = average of game_grade where player=player_id


 */
