import Ember from 'ember';

export default Ember.View.extend({
    actions: {
        didInsertElement: function() {
            console.log('headerController:header view inserted');
        }
    }
});
