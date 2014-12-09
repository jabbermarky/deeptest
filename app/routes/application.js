import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        appShowScreenTips: function() {
            console.log('application.appShowScreenTips');
            var header = this.controllerFor('header');
            header.hideHamburgerMenu();
        },
        appHideHamburgerMenu: function() {
            console.log('application.appHideHamburgerMenu');
            var header = this.controllerFor('header');
            header.hideHamburgerMenu();
        },
        goBack: function () {
            console.log('goBack');
            window.history.back();
        }
    }
});
