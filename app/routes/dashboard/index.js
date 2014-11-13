import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate: function() {
        console.log('dashboard/index route()');
        this.render();
    }
/*
    actions: {
        didTransition: function() {
            var header = this.controllerFor('header');
            header.setPageName('Dashboard');
            header.setMessage2Left('12/12/14'); //set today's date
            header.setMessage2Right('Welcome {{username}}, {{teamname}}');
            return true; // Bubble the didTransition event
        }
    }
    */
});
