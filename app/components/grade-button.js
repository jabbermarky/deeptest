import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'button',
    classNames: ['btn btn-gd-menu btn-xl btn-header btn-narrow'],
    classNameBindings: ['isActive:active'],
    attributeBindings: ['type'],
    type: "button",
    isActive: function() {
        var value = this.get('value');
        var pos = this.get('action');
        switch (value) {
            case -2:
            {
                return pos=== 'gameGradeDec2';
            }
            case -1:
            {
                return pos === 'gameGradeDec1';
            }
            case 0:
            {
                return pos  === 'gameGradeReset';
            }
            case 1:
            {
                return pos === 'gameGradeInc1';
            }
            case 2:
            {
                return pos === 'gameGradeInc2';
            }
        }
        return false;
    }.property('value'),
    inc1: function() {
        var pos = this.get("action");
        console.log('inc1 pos is %s', pos);
        return (pos === "gameGradeInc1");
    }.property(),
    inc2: function() {
        var pos = this.get("action");
        console.log('inc2 pos is %s', pos);
        return (pos === "gameGradeInc2");
    }.property(),
    dec1: function() {
        var pos = this.get("action");
        console.log('dec1 pos is %s', pos);
        return (pos === "gameGradeDec1");
    }.property(),
    dec2: function() {
        var pos = this.get("action");
        console.log('dec2 pos is %s', pos);
        return (pos === "gameGradeDec2");
    }.property(),
    reset: function() {
        var pos = this.get("action");
        console.log('reset pos is %s', pos);
        return (pos === "gameGradeReset");
    }.property(),
    click: function() {
        console.log('grade button got click, with group '+this.get('group'));
        this.sendAction('action',this.get('group'));
    }
});

