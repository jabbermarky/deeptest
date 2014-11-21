import Ember from 'ember';

export default Ember.ObjectController.extend({
    username: "",
    password: "",
    errorMessage:"",
    credentialError:false,
    actions: {
        signIn: function () {
            console.log('signIn username '+this.get('username'));
            if (this.username) {
                if (this.password) {
                    this.set('errorMessage','');
                    this.set('credentialError', false);
                    this.transitionToRoute('dashboard');
                } else {
                    this.set('credentialError', true);
                    this.set('errorMessage', 'please enter a valid password');
                }
            } else {
                this.set('credentialError', true);
                this.set('errorMessage', 'please enter a valid username');
            }
        }
    }
});
