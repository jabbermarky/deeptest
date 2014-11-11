import Ember from 'ember';

export default Ember.ArrayController.extend({
    caption:'Veteran Watch List',
    sortProperties: ['seasonAvgGrade'],
    sortAscending: true,
    veteranPlayers:function() {
        return this.get('arrangedContent').filter(function(player) {
                return !player.get('isNewPlayer');
            }
        );
    },
    top5: function() {
        return this.veteranPlayers().toArray().slice(0,5);
    }.property('arrangedContent.[]')
});
