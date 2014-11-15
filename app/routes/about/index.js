import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(){
console.log('route=about/index');
    this.render();
    this.render("about/product", {into:'about/index', outlet: "indexproduct"});
    this.render("about/location", {into:'about/index', outlet: "indexlocation"});
  }
});
