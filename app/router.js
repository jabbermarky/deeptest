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
    this.route('index',    { path: '/' });
    this.route('login',    { path: '/login'});
    this.route('signup',   { path: '/signup'});
    this.route('forgotpassword');
	this.route('dashboard', { path: '/dashboard'});
	this.route("players",   { path: '/players' });
	this.resource('player', { path: '/player/:player_id' });
	this.route("games",     { path: '/games' });
	this.route("reports",   { path: '/reports' });
	this.route("admin",     { path: '/admin' });
  this.route('dashboard/topNewPlayers');
});

export default Router;
