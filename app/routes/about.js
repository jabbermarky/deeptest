import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function(){
console.log('route=about');
    this.render();
    this.render("about/product", {into:"about", outlet: "aboutproduct"});
    this.render("about/location", {into:"about", outlet: "aboutlocation"});
  }
});
