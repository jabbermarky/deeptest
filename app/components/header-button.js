import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'button',
    classNames: ['btn btn-gd-menu btn-xl btn-header'],
    classNameBindings: ['isActive:active'],
    attributeBindings: ['type'],
    type: "button",
    click: function() {
        console.log('header button got click, with param '+this.get('param'));
        this.sendAction('action',this.get('param'));
    }
});
