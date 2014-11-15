import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(){
console.log('route=about/product');
    this.render();
    this.render('player', { into:'about/product', controller: this.controllerFor('player'), outlet:'players'});
  }
});
