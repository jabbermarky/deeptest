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
    veteranPlayers:function() {
        return this.store.filter('player', function(player) {
                return !player.get('isNewPlayer');
            }
        );
    }.property(),

    renderTemplate: function() {
        var newPlayerFilter = this.store.filter('player', function(player){
            return player.get('isNewPlayer');
        });
        var veteranPlayerFilter = this.store.filter('player', function(player){
            return !player.get('isNewPlayer');
        });


/*
        this.store.find('player', filter).then(function(players) {
            players = Ember.ArrayProxy.extend(Ember.SortableMixin).create(players);
            return players.set('sortProperties', ['seasonAvgGrade']);
        });
*/



        this.render();
        this.render('dashboard/index', {                 // the template to render
            into: 'dashboard',                          // the template to render into
            outlet: 'main',                  // the name of the outlet in that template
            controller:'dashboard/top-ten-overall-performers',
            model:this.get('allPlayers')
        });
        this.render('dashboard/top5', {                 // the template to render
            into: 'dashboard',                          // the template to render into
            outlet: 'top-new-players',                  // the name of the outlet in that template
            controller:'dashboard/top-new-players',
            //model:this.get('newPlayers')
            model:newPlayerFilter

        });
        this.render('dashboard/top5', {                 // the template to render
            into: 'dashboard',                          // the template to render into
            outlet: 'best-unit-impact',                 // the name of the outlet in that template
            controller: 'dashboard/best-unit-impact',    // the name of the outlet in that template
            model:this.get('allPlayers')
        });
        this.render('dashboard/top5', {                 // the template to render
            into: 'dashboard',                          // the template to render into
            outlet: 'veteran-watch-list',               // the name of the outlet in that template
            controller: 'dashboard/veteran-watch-list',  // the name of the outlet in that template
//            model:this.get('veteranPlayers')
            model:veteranPlayerFilter
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
