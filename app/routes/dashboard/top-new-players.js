import Ember from 'ember';

export default Ember.Route.extend({
    allStats:function() {
        return this.store.find('seasonStat');
    }.property(),

    newStats: Ember.computed.filterBy('allStats', 'player.isNewPlayer', true),

    renderTemplate: function() {
        console.log('dashboard/top-new-players route()');
        this.render('dashboard/top-players', {  // template to render
            controller:'dashboard/top-new-players',
            model:this.get('newStats')

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
