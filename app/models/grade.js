import DS from 'ember-data';

var attr = DS.attr,
    //hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

var Grade = DS.Model.extend({
    //id                                        // Org_Event_Player_Grade_Id
    playdata: belongsTo('playdata'),           // Org_Event_PlayData_Id
    player: belongsTo('player'),               // Player_Profile_Id
    position: attr(),                          // Position_Cd
    organization: belongsTo('organization'),   // Organization_Id
    mainCat1Grade: attr(),                     // Main_Cat_1_Grade
    mainCat2Grade: attr(),                     // Main_Cat_2_Grade
    mainCat3Grade: attr(),                     // Main_Cat_3_Grade
    bonusCatGrade: attr(),                     // Bonus_Cat_Grade
    overallGameGrade: attr(),
    //createdDateTime: attr(),                   // Created_DateTime
    //techAlign: attr(),                         // Tech_Align_Cd
    comments: attr()                          // Player_Play_Grade_Comments
    //orgGradeIncrementValue: attr(),            // Org_Grade_Increment_Value
});

export default Grade;


/*
 CREATE TABLE [dbo].[Org_Event_Player_Grades](
 [Org_Event_Player_Grade_Id] [bigint] NOT NULL,
 [Org_Event_PlayData_Id] [bigint] NOT NULL,
 [Player_Profile_Id] [bigint] NOT NULL,
 [Position_Cd] [varchar](3) NOT NULL,
 [Organization_Id] [bigint] NOT NULL,
 [Main_Cat_1_Grade] [bigint] NOT NULL,
 [Main_Cat_2_Grade] [bigint] NOT NULL,
 [Main_Cat_3_Grade] [bigint] NOT NULL,
 [Bonus_Cat_Grade] [bigint] NOT NULL,
 [Created_DateTime] [timestamp] NOT NULL,
 [Tech_Align_Cd] [varchar](3) NULL,
 [Player_Play_Grade_Comments] [varchar](500) NULL,
 [Org_Grade_Increment_Value] [int] NOT NULL,
 CONSTRAINT [PK_Game_Player_Grade] PRIMARY KEY CLUSTERED
 (
 [Org_Event_Player_Grade_Id] ASC
 )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
 ) ON [PRIMARY]
 */