import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

/*
You can use resource to take in a param in order to get a specific record.
You can nest things under resource.

You use route to specify some new UI that doesn’t need a specific record.
route is a dead end – you cannot nest things under it. It can not take in params.

'.'  is simply an alternative to using camel case.
user.new could just as well be userNew.
Both of these will look for a series of objects who’s names start with UserNew.
*/

Router.map(function() {
    // splash / entry point
    this.route('index',    { path: '/' });

    // for user/account management
    this.route('login',    { path: '/login'});
    this.route('signup',   { path: '/signup'});
    this.route('forgotpassword');

    // for dashboards
    this.route('dashboard', { path: '/dashboard'});
    this.route('dashboard/topNewPlayers');

    // for player management
    this.route("players",   { path: '/players' });
    this.resource('player', { path: '/player/:player_id' });

    // for games and grading
    this.route("games",     { path: '/games' });
    this.resource('game',   { path: '/game/:game_id' });

    // for reports
    this.route("reports",   { path: '/reports' });

    // for administrative
    this.route("admin",     { path: '/admin' });

    // for testing only
    this.resource('about', function() {
    this.route('location');
    this.route('product');
  });
});

export default Router;
