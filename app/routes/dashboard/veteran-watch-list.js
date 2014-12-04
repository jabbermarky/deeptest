import Ember from 'ember';

export default Ember.Route.extend({
    allStats:function() {
        return this.store.find('seasonStat');
    }.property(),

    vetStats: Ember.computed.filterBy('allStats', 'player.isNewPlayer', false),

    renderTemplate: function() {
        console.log('dashboard/veteran-watch-list route()');
        this.render('dashboard/top-players', {  // template to render
            controller:'dashboard/veteran-watch-list',
            model:this.get('vetStats')

        });
    },
    actions: {
        didTransition: function() {
            var header = this.controllerFor('header');
            header.setPageName('Dashboard');
            header.setMessage('');
            header.setMessage2Left('');
            header.setMessage2Right('last updated: mm/dd/yyyy');
            return true; // Bubble the didTransition event
        }
     }
});
