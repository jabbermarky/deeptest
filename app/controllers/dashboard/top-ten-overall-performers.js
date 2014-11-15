import Ember from 'ember';

export default Ember.ArrayController.extend({
    sortProperties: ['seasonAvgGrade'],
    sortAscending: false,
    caption:'Top Ten Overall Performers',

    seasonStats:function() {
        return this.store.find('seasonStat');
    }.property(),

    seasonTopPerformers :function() {
        var season;
        this.store.find('seasonStat'/*, filter*/).then(function(stats) {
            console.log(this);
            season = Ember.ArrayProxy.extend(Ember.SortableMixin).create(stats);
            season.set('sortAscending', false);
            return season.set('sortProperties', ['overallGrade']);
        }).bind(this);
    }.property(),

    filteredContent : function() {
        //var x = this.get('seasonTopPerformers');
        //console.log('seasonTopPerformers returned ');
        //console.log(x);
        return this.get('arrangedContent').slice(0,10);
    }.property('arrangedContent.[]')
});
/*
 "Last Game" = overall game average in last game
 "Season Avg" = overall game average in current season

 sorted by "Season Avg" descending


 fact table
 {{player}} {{event=game}} {{organization}} {{num_plays}} {{cat1_grade}} {{cat2_grade}} {{cat3_grade}} {{bonus_grade}} {{game_grade}}

 aggregations
 number of games played by player = count of rows where player = player_id
 season average = average of game_grade where player=player_id


 */
