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
        viewPlayerInformation: function() {
            console.log('viewPlayerInformation')
            this.controller.toggleProperty('menuVisible');
            this.transitionTo('players');
        },
        createScoutingReport: function() {
            console.log('createScoutingReport')
            this.controller.toggleProperty('menuVisible');
        },
        manageRoster: function() {
            console.log('manageRoster')
            this.controller.toggleProperty('menuVisible');
        },
        toggleMenu: function(menuName) {
            //console.log('toggleMenu to '+menuName);
            var curMenuName = this.controller.get("menuName");
            var isMenuVisible = this.controller.get("menuVisible");
            var match = (curMenuName === menuName);
            //console.log('isMenuVisible = ' + isMenuVisible);
            //console.log('match = ' + match);
            //console.log('curMenuName = '+curMenuName);
            if(!isMenuVisible || !match) {
                // change menu template
                //console.log('change menu template');
                this.controller.set("menuName",menuName);
                if(menuName === "players") {
                    this.render('dashboard/menuplayers', {  // template to render
                        into: 'dashboard',                // template to render into
                        outlet: 'menu'     // name of outlet in template
                    });
                }
                if(menuName === "games") {
                    this.render('dashboard/menugames', {  // template to render
                        into: 'dashboard',                // template to render into
                        outlet: 'menu'     // name of outlet in template
                    });
                }
            }
            if(menuName ==="") {
                // hide menu
                //console.log('blank menuName')
                this.controller.toggleProperty('menuVisible');
                return;
            }
            if (!isMenuVisible || match) {
                // toggle menu visibility
                // if match then hide
                // if menu is not visible then show
                //console.log('toggle visibility');
                this.controller.toggleProperty('menuVisible');
            }
        }
    },
    events: {
    }
});
