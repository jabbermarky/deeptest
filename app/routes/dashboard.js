import Ember from 'ember';

export default Ember.Route.extend({
    sortProperties : ['seasonAvgGrade:desc'],
    allPlayers : function() {
        return this.store.find('player');
    }.property(),
    newPlayers:function() {
        return this.store.filter('player', function(player) {
                return player.get('isNewPlayer');
            }
        );
    }.property(),

    allStats:function() {
        return this.store.find('seasonStat');
    }.property(),

    newStats: Ember.computed.filterBy('allStats', 'player.isNewPlayer', true),
    vetStats: Ember.computed.filterBy('allStats', 'player.isNewPlayer', false),

    renderTemplate: function() {
        var newPlayerFilter = this.store.filter('player', function(player){
            return player.get('isNewPlayer');
        });
        this.render();
        this.render('dashboard/index', { // template to render
            into: 'dashboard',           // template to render into
            outlet: 'main',              // name of the outlet in that template
            controller:'dashboard/top-ten-overall-performers',
            model:this.get('allPlayers')
        });
        this.render('dashboard/top5stats', {  // template to render
            into: 'dashboard',           // template to render into
            outlet: 'top-new-players',   // name of the outlet in that template
            controller:'dashboard/top-new-players',
            model:this.get('newStats')

        });
        this.render('dashboard/top5impactstats', {  // template to render
            into: 'dashboard',           // template to render into
            outlet: 'best-unit-impact',  // name of the outlet in that template
            controller: 'dashboard/best-unit-impact',
            model:this.get('allStats')
        });
        this.render('dashboard/top5stats', {  // template to render
            into: 'dashboard',                // template to render into
            outlet: 'veteran-watch-list',     // name of outlet in template
            controller: 'dashboard/veteran-watch-list',
            model:this.get('vetStats')
        });
    },

    actions: {
        didTransition: function() {
            var header = this.controllerFor('header');
            header.setPageName('Dashboard');
            header.setMessage2Left('12/12/14'); //set today's date
            header.setMessage2Right('Welcome {{username}}, {{teamname}}');
            return true; // Bubble the didTransition event
        },
        toggleMenu: function() {
            console.log('toggleMenu');
            this.controller.toggleProperty('menuVisible');
        }
    },
    events: {
    }
});
