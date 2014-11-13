import Ember from 'ember';

export default Ember.ArrayController.extend({
    caption:'Best Unit Impact',
    filteredContent: function() {
        return this.get('arrangedContent').slice(0,5);
    }.property('arrangedContent.[]')
});
