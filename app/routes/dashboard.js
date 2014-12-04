import Ember from 'ember';

export default Ember.Route.extend({
    sortProperties : ['seasonAvgGrade:desc'],
    allPlayers : function() {
        return this.store.find('player');
    }.property(),
/*    newPlayers:function() {
        return this.store.filter('player', function(player) {
                return player.get('isNewPlayer');
            }
        );
    }.property(),*/

    allStats:function() {
        return this.store.find('seasonStat');
    }.property(),

    newStats: Ember.computed.filterBy('allStats', 'player.isNewPlayer', true),
    vetStats: Ember.computed.filterBy('allStats', 'player.isNewPlayer', false),

    renderTemplate: function() {
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
            header.setMessage('');
            header.setMessage2Left('12/12/14'); //set today's date
            header.setMessage2Right('Welcome {{username}}, {{teamname}}');
            return true; // Bubble the didTransition event
        },
        playerViewPlayerInformation: function() {
            console.log('playerViewPlayerInformation');
            this.controller.toggleProperty('menuVisible');
            this.transitionTo('players');
        },
        playerCreateScoutingReport: function() {
            console.log('playerCreateScoutingReport');
            this.controller.toggleProperty('menuVisible');
            this.transitionTo('players');
        },
        playerManageRoster: function() {
            console.log('playerManageRoster');
            this.controller.toggleProperty('menuVisible');
            this.transitionTo('players');
        },

        gameViewGameList: function() {
            console.log('gameViewGameList');
            this.controller.toggleProperty('menuVisible');
            this.transitionTo('games');
        },
        gameSetUpGame: function() {
            console.log('gameSetUpGame');
            this.controller.toggleProperty('menuVisible');
            this.transitionTo('games');
        },
        gameGradePlayers: function() {
            console.log('gameGradePlayers');
            this.controller.toggleProperty('menuVisible');
            this.transitionTo('games');
        },

        reportGamePerformance: function() {
            console.log('reportGamePerformance');
            this.controller.toggleProperty('menuVisible');
            this.transitionTo('reports');
        },
        reportThirdDownPerformance: function() {
            console.log('reportThirdDownPerformance');
            this.controller.toggleProperty('menuVisible');
            this.transitionTo('reports');
        },
        reportRedZonePerformance: function() {
            console.log('reportRedZonePerformance');
            this.controller.toggleProperty('menuVisible');
            this.transitionTo('reports');
        },
        reportScoutingReportSummary: function() {
            console.log('reportScoutingReportSummary');
            this.controller.toggleProperty('menuVisible');
            this.transitionTo('reports');
        },

        adminManageAccountInformation: function() {
            console.log('adminManageAccountInformation');
            this.controller.toggleProperty('menuVisible');
            this.transitionTo('admin');
        },
        adminSetUpPositionGroups: function() {
            console.log('adminSetUpPositionGroups');
            this.controller.toggleProperty('menuVisible');
            this.transitionTo('admin');
        },
        adminManageUserSecurityGroups: function() {
            console.log('adminManageUserSecurityGroups');
            this.controller.toggleProperty('menuVisible');
            this.transitionTo('admin');
        },
        adminSetReportDistributionPreferences: function() {
            console.log('adminSetReportDistributionPreferences');
            this.controller.toggleProperty('menuVisible');
            this.transitionTo('admin');
        },

        toggleMenu: function(menuName) {
            var curMenuName = this.controller.get("menuName");
            var isMenuVisible = this.controller.get("menuVisible");
            var match = (curMenuName === menuName);
            if(!isMenuVisible || !match) {
                // change menu template
                // if there is no menu visible
                // if the current menu is not the requested menu
                this.controller.set("menuName",menuName);
                if (menuName) {
                    this.render('dashboard/'+menuName, {  // template to render
                        into: 'dashboard',                // template to render into
                        outlet: 'menu'     // name of outlet in template
                    });
                }
            }
            if(menuName ==="") {
                // hide menu
                this.controller.toggleProperty('menuVisible');
                return;
            }
            if (!isMenuVisible || match) {
                // toggle menu visibility
                // if match then hide
                // if menu is not visible then show
                this.controller.toggleProperty('menuVisible');
            }
        }
    },
    events: {
    }
});
