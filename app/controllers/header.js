import Ember from 'ember';

export default Ember.ObjectController.extend({
    pageName:'',
    message_1center:'',
    message_2left:'',
    message_2right:'',
    linkTo:'dashboard',
    setLinkTo: function(m) {
        console.log('headerController:setLinkTo to '+m);
        this.set('linkTo', m);
    },
    setMessage: function(m) {
        console.log('headerController:setMessage to '+m);
        this.set('message_1center', m);
    },
    setMessage2Left: function(m) {
        console.log('headerController:setMessage2Left to '+m);
        this.set('message_2left', m);
    },
    setMessage2Right: function(m) {
        console.log('headerController:setMessage2Right to '+m);
        this.set('message_2right', m);
    },
    setPageName: function(pn) {
        console.log('headerController:setPageName to '+pn);
        this.set('pageName', pn);
    }
});
