import Ember from 'ember';

export default Ember.ObjectController.extend({
    pageName:'',
    message:'',
    setMessage: function(m) {
        console.log('headerController:setMessage to '+m);
        this.set('message', m);
    },
    setPageName: function(pn) {
        console.log('headerController:setPageName to '+pn);
        this.set('pageName', pn);
    }
});
