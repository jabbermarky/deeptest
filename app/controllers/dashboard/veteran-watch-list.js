import Ember from 'ember';

export default Ember.ArrayController.extend({
    caption:'Veteran Watch List',
    sortProperties: ['overallGrade'],
    sortAscending: true,

    filteredContent: function() {
        return this.get('arrangedContent').slice(0,5);
    }.property('arrangedContent.[]')

});
