import Ember from 'ember';

export default Ember.View.extend({
    init: function() {
        this._super();
        console.log('bigHeaderController:header view called');
    }
});
