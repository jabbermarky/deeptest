import DS from 'ember-data';

var attr = DS.attr,
    belongsTo = DS.belongsTo;

var GameGradeFact = DS.Model.extend({
    player: belongsTo('player'),                // Player_Profile_Id
    event: belongsTo(''),
    organization: belongsTo('organization'),    // Organization_Id
    numPlays: attr(),
    mainCat1Grade: attr(),                      // Main_Cat_1_Grade
    mainCat2Grade: attr(),                      // Main_Cat_2_Grade
    mainCat3Grade: attr(),                      // Main_Cat_3_Grade
    bonusCatGrade: attr(),                      // Bonus_Cat_Grade
    overallGrade: attr()                   // could be calculated
});

export default GameGradeFact;
