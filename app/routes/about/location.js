import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(){
console.log('route=about/location');
    this.render();
    this.render('player', { into:'about/location', controller: this.controllerFor('player'), outlet:'players'});
  }
});
