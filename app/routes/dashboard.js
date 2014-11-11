import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate: function() {
        this.render();
        this.render('dashboard/index', {                 // the template to render
            into: 'dashboard',                          // the template to render into
            outlet: 'main',                  // the name of the outlet in that template
            controller:'dashboard/top-ten-overall-performers',
            model:this.store.find('player')
        });
        this.render('dashboard/top5', {                 // the template to render
            into: 'dashboard',                          // the template to render into
            outlet: 'top-new-players',                  // the name of the outlet in that template
            controller:'dashboard/top-new-players',
            model:this.store.find('player')

    });
        this.render('dashboard/top5', {                 // the template to render
            into: 'dashboard',                          // the template to render into
            outlet: 'best-unit-impact',                 // the name of the outlet in that template
            controller: 'dashboard/best-unit-impact',    // the name of the outlet in that template
            model:this.store.find('player')
        });
        this.render('dashboard/top5', {                 // the template to render
            into: 'dashboard',                          // the template to render into
            outlet: 'veteran-watch-list',               // the name of the outlet in that template
            controller: 'dashboard/veteran-watch-list',  // the name of the outlet in that template
            model:this.store.find('player')
        });
    },

    actions: {
        didTransition: function() {
            var header = this.controllerFor('header');
            header.setPageName('Dashboard');
            header.setMessage2Left('12/12/14'); //set today's date
            header.setMessage2Right('Welcome {{username}}, {{teamname}}');
            return true; // Bubble the didTransition event
        }
    }
});
