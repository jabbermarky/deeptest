import Ember from 'ember';

export default Ember.View.extend({
    init: function() {
        this._super();
        console.log('headerController:header view called');
    }
});
