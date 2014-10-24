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
	this.resource('home', {path: '/'});
	this.resource("players", {path: '/players'});
	this.resource('player', { path: '/player/:player_id' });
	this.resource("games", {path: '/games'});
	this.resource("reports", {path: '/reports'});
	this.resource("admin", {path: '/admin'});	
});

export default Router;
