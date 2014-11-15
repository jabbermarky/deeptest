import Ember from 'ember';

export default Ember.ObjectController.extend({
    index: function() {
        return 1 + this.parentController.get('filteredContent').indexOf(this.model);
    }.property('parentController.filteredContent')
});