import DS from 'ember-data';

var Player = DS.Model.extend({
	firstName: DS.attr(),
  	lastName: DS.attr(),
  	jerseyNumber: DS.attr(),
  	position:DS.attr(),
    fullName: function() {
        console.log('playerModel: this is'+this);
    	return this.get('firstName') + ' ' + this.get('lastName');
  	}.property('firstName', 'lastName'),
  	firstInitial: function() {
		var name = this.get('firstName');
  	    return name.substring(0, 1) + '.';
  	}.property('firstName'),
    shortNameInitialFirst: function() {
    	return this.get('firstInitial') + ' ' + this.get('lastName');
  	}.property('firstName', 'lastName'),
    shortNameInitialLast: function() {
    	return this.get('lastName') + ', ' + this.get('firstInitial');
  	}.property('firstName', 'lastName')

});

Player.reopenClass({
    FIXTURES: [
        {
            id: 1,
            firstName: "Bill",
            lastName: "Passer",
            jerseyNumber: "1",
            position: "QB"
        },
        {
            id: 2,
            firstName: "Football",
            lastName: "Kicker",
            jerseyNumber: "2",
            position: "K"
        },
        {
            id: 3,
            firstName: "Thierry",
            lastName: "Punter",
            jerseyNumber: "3",
            position: "P"
        },
        {
            id: 4,
            firstName: "Wally",
            lastName: "Holder",
            jerseyNumber: "4",
            position: "C"
        }
    ]
});

export default Player;
