import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        goBack: function () {
            console.log('goBack');
            window.history.back();
        }
    }
});
