import Ember from 'ember';

export default Ember.ArrayController.extend({
    caption:'Best Unit Impact',
    top5: function() {
        return this.get('model').toArray().slice(0,5);
    }.property('model.[]')
});
