import Ember from 'ember';

export default Ember.ArrayController.extend({
    sortProperties: ['seasonAvgGrade'],
    sortAscending: false,

    caption:'Top Ten Overall Performers',
    top10: function() {
        return this.get('arrangedContent').toArray().slice(0,10);
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
