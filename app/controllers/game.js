import Ember from 'ember';

export default Ember.ObjectController.extend({
    playNumber: 1,
    actions: {
        nextPlay: function() {
            console.log('nextPlay');
            var playNumber = this.get('playNumber');
            this.set('playNumber',playNumber + 1);
        },
        previousPlay: function() {
            var playNumber = this.get('playNumber');
            if (playNumber > 1)
                this.set('playNumber',playNumber - 1);
            console.log('previousPlay');
        }

    }
});
