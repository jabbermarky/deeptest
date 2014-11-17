import Ember from 'ember';

export default Ember.ObjectController.extend({
    index: function() {
        return 1 + this.parentController.get('seasonTop10Performers').indexOf(this.model);
    }.property('parentController.seasonTop10Performers')
});
