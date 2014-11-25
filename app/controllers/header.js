import Ember from 'ember';

export default Ember.ObjectController.extend({
    pageName:'pagename',
    message_1center:'center',
    message_2left:'2left',
    message_2right:'2right',
    linkTo:'dashboard',
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
    }
});
