import DS from 'ember-data';

var attr = DS.attr,
    hasMany = DS.hasMany;
    //belongsTo = DS.belongsTo;

var Organization = DS.Model.extend({
    // id                           //    [Organization_Id] [bigint] NOT NULL,
    name: attr(),                   //    [Organization_Name] [varchar](100) NOT NULL,
    shortName: attr(),              //    [Organization_Short_Name] [varchar](100) NOT NULL,
    mascotName: attr(),             //    [Mascot_Name] [varchar](100) NOT NULL,
    //level: attr(),                  //    [Organization_Level_Cd] [varchar](4) NOT NULL,
    //conference: attr(),             //    [Conference_Cd] [varchar](10) NULL,
    //address1: attr(),               //    [Addr_1] [varchar](100) NULL,
    //address2: attr(),               //    [Addr_2] [varchar](100) NULL,
    //city: attr(),                   //    [City] [varchar](100) NULL,
    //state: attr(),                  //    [State_Cd] [varchar](2) NULL,
    //zip: attr(),                    //    [Zip] [varchar](11) NULL,
    //country: attr(),                //    [Country] [varchar](100) NULL,
    //phone1: attr(),                 //    [Phone_1] [varchar](10) NULL,
    //phone2: attr(),                 //    [Phone_2] [varchar](10) NULL,
    //fax: attr(),                    //    [Fax] [varchar](10) NULL,
    //playingSurface: attr(),         //    [Playing_Surface_Cd] [varchar](3) NULL,
    //website: attr(),                //    [Website] [varchar](100) NULL,
    //accountType: attr(),            //    [GD_Account_Type_Id] [bigint] NULL,
    //eulaAccepted: attr(),           //    [EULA_Accepted] [varchar](3) NULL,
    //paidThru: attr(),               //    [Paid_Thru] [datetime] NULL,
    //organization: attr(),           //    [Organization_Cd] [varchar](10) NOT NULL,
    //filmSystem: attr(),             //    [Film_System_Cd] [bigint] NULL,
    //orgGradeIncrementValue: attr(),  //    [Org_Grade_Increment_Value] [int] NOT NULL,
    grades: hasMany('grade'),
    playdata: hasMany('playdata')
});

Organization.reopenClass({
    FIXTURES: [
        {
            id: 1,
            name: "Princeton University",
            shortName: "Princeton",
            mascotName: "Tigers"
        }
    ]
});


export default Organization;

/*
 CREATE TABLE [dbo].[Organization](
 [Organization_Id] [bigint] NOT NULL,
 [Organization_Name] [varchar](100) NOT NULL,
 [Organization_Short_Name] [varchar](100) NOT NULL,
 [Mascot_Name] [varchar](100) NOT NULL,
 [Organization_Level_Cd] [varchar](4) NOT NULL,
 [Conference_Cd] [varchar](10) NULL,
 [Addr_1] [varchar](100) NULL,
 [Addr_2] [varchar](100) NULL,
 [City] [varchar](100) NULL,
 [State_Cd] [varchar](2) NULL,
 [Zip] [varchar](11) NULL,
 [Country] [varchar](100) NULL,
 [Phone_1] [varchar](10) NULL,
 [Phone_2] [varchar](10) NULL,
 [Fax] [varchar](10) NULL,
 [Playing_Surface_Cd] [varchar](3) NULL,
 [Website] [varchar](100) NULL,
 [GD_Account_Type_Id] [bigint] NULL,
 [EULA_Accepted] [varchar](3) NULL,
 [Paid_Thru] [datetime] NULL,
 [Organization_Cd] [varchar](10) NOT NULL,
 [Film_System_Cd] [bigint] NULL,
 [Org_Grade_Increment_Value] [int] NOT NULL,
 CONSTRAINT [PK_Organization] PRIMARY KEY CLUSTERED
 (
 [Organization_Id] ASC
 )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
 ) ON [PRIMARY]

 */
