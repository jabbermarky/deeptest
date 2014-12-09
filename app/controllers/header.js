import Ember from 'ember';

export default Ember.ObjectController.extend({
    pageName:'pagename',
    message_1center:'center',
    message_2left:'2left',
    message_2right:'2right',
    linkTo:'dashboard',
    hamburgerMenuVisible:false,
    setLinkTo: function(m) {
        this.set('linkTo', m);
    },
    setMessage: function(m) {
        this.set('message_1center', m);
    },
    setMessage2Left: function(m) {
        this.set('message_2left', m);
    },
    setMessage2Right: function(m) {
        this.set('message_2right', m);
    },
    setPageName: function(pn) {
        this.set('pageName', pn);
    },
    hideHamburgerMenu: function() {
        console.log('appHideHamburgerMenu');
        this.set('hamburgerMenuVisible', false);
    },
    actions: {
        appHideHamburgerMenu: function() {
            console.log('appHideHamburgerMenu');
            this.hideHamburgerMenu();
        },
        appSignOff: function() {
            console.log('application.appSignOff');
            this.hideHamburgerMenu();
            this.transitionToRoute('/');
        },
        headerHamburgerMenu: function() {
            console.log('headerHamburgerMenu');
            this.toggleProperty('hamburgerMenuVisible');
        }
    }
});
