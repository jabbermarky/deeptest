import DS from 'ember-data';

var attr = DS.attr,
    hasMany = DS.hasMany,
    belongsTo = DS.belongsTo;

var Playdata = DS.Model.extend({
    //id                    //    [Org_Event_PlayData_Id] [bigint] NOT NULL,
    orgEventData:attr(),     //    [Org_Event_Data_Id] [bigint] NULL,
    gdPlayNumber:attr(),    //    [GoDeep_Play_Number] [int] NOT NULL,
    //    [XOs_Play_Number] [int] NULL,
    //    [DV_Play_Number] [int] NULL,
    playQuarter:attr(),     //    [Play_Quarter] [int] NULL,
    //    [Play_Clock_Min] [int] NULL,
    //    [Play_Clock_Sec] [int] NULL,
    playDown:attr(),        //    [Play_Down] [int] NULL,
    //    [Play_To_Go] [int] NULL,
    //    [Play_Poss] [varchar](10) NULL,
    //    [Play_Field_Half] [varchar](10) NULL,
    //    [Play_Yard_Ln] [int] NULL,
    //    [Play_Type_Cd] [varchar](10) NULL,
    //    [Off_Organization_Id] [bigint] NULL,
    //    [Def_Organization_Id] [bigint] NULL,
    //    [Off_Formation_Desc] [varchar](100) NULL,
    //    [Off_Play_Call_Desc] [varchar](100) NULL,
    //    [Off_Backfield_Desc] [varchar](100) NULL,
    //    [Off_Shift_Desc] [varchar](100) NULL,
    //    [Off_Strength_Desc] [varchar](100) NULL,
    //    [Def_Front_Desc] [varchar](100) NULL,
    //    [Def_Stunt_Desc] [varchar](100) NULL,
    //    [Def_Blitz_Desc] [varchar](100) NULL,
    //    [Def_Cover_Desc] [varchar](100) NULL,
    //    [Play_Result_Cd] [varchar](10) NULL,
    //    [Film_System_Cd] [varchar](10) NULL,
    //    [Play_Yards] [int] NULL,
    //createdDateTime:attr(),                     //    [Created_DateTime] [timestamp] NOT NULL,
    organization: belongsTo('organization'),    //    [Organization_Id] [bigint] NOT NULL,
    //    [Penalty_NoPlay] [varchar](10) NULL,
    grades:hasMany('grade')
});

export default Playdata;

/*
 [Org_Event_PlayData_Id] [bigint] NOT NULL,
 [Org_Event_Data_Id] [bigint] NULL,
 [GoDeep_Play_Number] [int] NOT NULL,
 [XOs_Play_Number] [int] NULL,
 [DV_Play_Number] [int] NULL,
 [Play_Quarter] [int] NULL,
 [Play_Clock_Min] [int] NULL,
 [Play_Clock_Sec] [int] NULL,
 [Play_Down] [int] NULL,
 [Play_To_Go] [int] NULL,
 [Play_Poss] [varchar](10) NULL,
 [Play_Field_Half] [varchar](10) NULL,
 [Play_Yard_Ln] [int] NULL,
 [Play_Type_Cd] [varchar](10) NULL,
 [Off_Organization_Id] [bigint] NULL,
 [Def_Organization_Id] [bigint] NULL,
 [Off_Formation_Desc] [varchar](100) NULL,
 [Off_Play_Call_Desc] [varchar](100) NULL,
 [Off_Backfield_Desc] [varchar](100) NULL,
 [Off_Shift_Desc] [varchar](100) NULL,
 [Off_Strength_Desc] [varchar](100) NULL,
 [Def_Front_Desc] [varchar](100) NULL,
 [Def_Stunt_Desc] [varchar](100) NULL,
 [Def_Blitz_Desc] [varchar](100) NULL,
 [Def_Cover_Desc] [varchar](100) NULL,
 [Play_Result_Cd] [varchar](10) NULL,
 [Film_System_Cd] [varchar](10) NULL,
 [Play_Yards] [int] NULL,
 [Created_DateTime] [timestamp] NOT NULL,
 [Organization_Id] [bigint] NOT NULL,
 [Penalty_NoPlay] [varchar](10) NULL,
 CONSTRAINT [PK_Game_Play_Data] PRIMARY KEY CLUSTERED
 (
 [Org_Event_PlayData_Id] ASC
 )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
 ) ON [PRIMARY]

 */