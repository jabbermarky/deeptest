import DS from 'ember-data';

export default DS.Model.extend({

});

var attr = DS.attr;
//var hasMany = DS.hasMany;
//var belongsTo = DS.belongsTo;

var Game = DS.Model.extend({
    homeTeam: attr(),
    visitorTeam: attr(),
    homeScore: attr(),
    visitorScore: attr(),
    date: attr(),
    kickoff: attr(),
    surface: attr(),
    fieldCond: attr()
});

Game.reopenClass({
    FIXTURES: [
        {
            id: 1,
            homeTeam: 'Princeton',
            visitorTeam: 'Lehigh',
            homeScore: 28,
            visitorScore: 9,
            date: '9/21/2013',
            kickoff: '1:30pm',
            surface: 'Field Turf',
            fieldCond: 'Dry'
        },
        {
            id: 2,
            homeTeam: 'Georgetown',
            visitorTeam: 'Princeton',
            homeScore: 22,
            visitorScore: 50,
            date: '9/28/2013',
            kickoff: '1:30pm',
            surface: 'Field Turf',
            fieldCond: 'Dry'
        },
        {
            id: 3,
            homeTeam: 'Princeton',
            visitorTeam: 'Columbia',
            homeScore: 53,
            visitorScore: 7,
            date: '10/5/2013',
            kickoff: '1:30pm',
            surface: 'Grass',
            fieldCond: 'Dry'
        },
        {
            id: 4,
            homeTeam: 'Princeton',
            visitorTeam: 'Lafayette',
            homeScore: 42,
            visitorScore: 26,
            date: '10/12/2013',
            kickoff: '1:30pm',
            surface: 'Field Turf',
            fieldCond: 'Dry'
        },
        {
            id: 5,
            homeTeam: 'Princeton',
            visitorTeam: 'Lehigh',
            homeScore: 28,
            visitorScore: 9,
            date: '9/21/2013',
            kickoff: '1:30pm',
            surface: 'Field Turf',
            fieldCond: 'Dry'
        },
        {
            id: 6,
            homeTeam: 'Princeton',
            visitorTeam: 'Lehigh',
            homeScore: 28,
            visitorScore: 9,
            date: '9/21/2013',
            kickoff: '1:30pm',
            surface: 'Field Turf',
            fieldCond: 'Dry'
        },
        {
            id: 7,
            homeTeam: 'Princeton',
            visitorTeam: 'Lehigh',
            homeScore: 28,
            visitorScore: 9,
            date: '9/21/2013',
            kickoff: '1:30pm',
            surface: 'Field Turf',
            fieldCond: 'Dry'
        }
    ]
});

export default Game;
