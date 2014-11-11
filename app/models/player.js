import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;
//var belongsTo = DS.belongsTo;

var Player = DS.Model.extend({
        //    [Player_Profile_Id] [bigint] IDENTITY(1,1) NOT NULL,
        //    [Organization_Id] [bigint] NULL,
        //    [Player_Level_Id] [bigint] NULL,
    firstName: attr(),      //    [Player_First_Name] [varchar](100) NULL,
    middleName: attr(),     //    [Player_Middle_Name] [varchar](100) NULL,
    lastName: attr(),       //    [Player_Last_Name] [varchar](100) NULL,
    //preferredName: attr(),  //    [Player_Preferred_Name] [varchar](100) NULL,
    position: attr(),
    jerseyNumber: attr(),   //    [Player_Jersey_No] [varchar](2) NULL,
    classYear: attr(),   //    [Player_Class] [varchar](10) NULL,
    birthDate: attr(),    //    [Player_DOB] [datetime] NULL,
        //    [Player_Addr_1] [varchar](100) NULL,
        //    [Player_Addr_2] [varchar](100) NULL,
        //    [Player_City] [varchar](100) NOT NULL,
        //    [Player_State] [varchar](2) NULL,
        //    [Player_Zip] [varchar](11) NULL,
        //    [Player_Country] [varchar](100) NULL,
        //    [Player_Home_Phone] [varchar](10) NULL,
        //    [Player_Cell_Phone] [varchar](10) NULL,
        //    [Player_NCAA_Clearinghouse_Id] [varchar](10) NULL,
        //    [Player_Siblings] [varchar](1000) NULL,
        //    [Player_Height] [float] NULL,
        //    [Player_Weight] [float] NULL,
        //    [Player_40Yd] [float] NULL,
        //    [Player_Shuttle] [float] NULL,
        //    [Player_Bench] [float] NULL,
        //    [Player_Wingspan] [float] NULL,
        //    [Player_Squat] [float] NULL,
        //    [Player_Vertical_Jump] [float] NULL,
        //    [Created_DateTime] [datetime] NULL,
        //    [Player_Email] [varchar](200) NULL,
        //    [Player_Major] [varchar](100) NULL,
        //    [Player_Advisor] [varchar](100) NULL,
        //    [LastUpdated_DateTime] [timestamp] NULL,
        //    [Player_Stats] [varchar](150) NULL,

    seasonStats: hasMany('seasonStat',{async:true}),
    isNewPlayer: function( ) {
        return this.get('classYear') == 'Freshman';
    }.property('classYear'),

    lastGameAvgGrade: function() {
        var stats = this.get('seasonStats');
        var length = this.get('seasonStats.length');
        if (length) {
            return stats.get('content.lastObject.overallGrade');
        } else {
            return 0;
        }
    }.property('seasonStats.length'),

    lastGameNumPlays: function() {
        var stats = this.get('seasonStats');
        var length = this.get('seasonStats.length');
        if (length) {
            return stats.get('content.lastObject.numPlays');
        } else {
            return 0;
        }
    }.property('seasonStats.length'),

    seasonNumGames: function() {
        return this.get('seasonStats.length');
    }.property('seasonStats.length'),

    seasonAvgGrade: function() {
        var stats = this.get('seasonStats');
        var length = this.get('seasonStats.length');
        var sum = 0;
        var avg = 0;
        stats.forEach(function(item, index) {
            sum += item.get('overallGrade');
        });
        if (length) {
            avg = Math.ceil(sum / length);
        }
        return avg;
    }.property('seasonStats.length'),

    seasonNumPlays: function() {
        var stats = this.get('seasonStats');
        var length = this.get('seasonStats.length');
        var sum = 0;
        stats.forEach(function(item, index) {
            sum += item.get('numPlays');
        });
        return sum;
    }.property('seasonStats.length'),

    fullName: function() {
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
    FIXTURES:
        [
            {
                "class": "Junior",
                "position": "WR",
                "seasonStats": [
                    101,
                    102,
                    103,
                    104,
                    105,
                    106
                ],
                "jerseyNumber": 1,
                "lastName": "Bush",
                "middleName": "Cross",
                "firstName": "Clayton",
                "birthDate": "3/18/1995",
                "id": 1
            },
            {
                "classYear": "Junior",
                "position": "DE",
                "seasonStats": [
                    201,
                    202,
                    203,
                    204,
                    205,
                    206
                ],
                "jerseyNumber": 2,
                "lastName": "Carson",
                "middleName": "Cabrera",
                "firstName": "Lopez",
                "birthDate": "5/1/1994",
                "id": 2
            },
            {
                "classYear": "Sophomore",
                "position": "DL",
                "seasonStats": [
                    301,
                    302,
                    303,
                    304,
                    305,
                    306
                ],
                "jerseyNumber": 3,
                "lastName": "Battle",
                "middleName": "Mosley",
                "firstName": "Franklin",
                "birthDate": "1/16/1993",
                "id": 3
            },
            {
                "classYear": "Sophomore",
                "position": "WR",
                "seasonStats": [
                    401,
                    402,
                    403,
                    404,
                    405,
                    406
                ],
                "jerseyNumber": 4,
                "lastName": "Davis",
                "middleName": "Cleveland",
                "firstName": "Carter",
                "birthDate": "6/13/1993",
                "id": 4
            },
            {
                "classYear": "Sophomore",
                "position": "K",
                "seasonStats": [
                    501,
                    502,
                    503,
                    504,
                    505,
                    506
                ],
                "jerseyNumber": 5,
                "lastName": "Ingram",
                "middleName": "Joyce",
                "firstName": "Haynes",
                "birthDate": "3/4/1993",
                "id": 5
            },
            {
                "classYear": "Freshman",
                "position": "OL",
                "seasonStats": [
                    601,
                    602,
                    603,
                    604,
                    605,
                    606
                ],
                "jerseyNumber": 6,
                "lastName": "Finley",
                "middleName": "Whitaker",
                "firstName": "West",
                "birthDate": "1/31/1994",
                "id": 6
            },
            {
                "classYear": "Freshman",
                "position": "OL",
                "seasonStats": [
                    701,
                    702,
                    703,
                    704,
                    705,
                    706
                ],
                "jerseyNumber": 7,
                "lastName": "Morales",
                "middleName": "Vega",
                "firstName": "Mack",
                "birthDate": "1/1/1994",
                "id": 7
            },
            {
                "classYear": "Senior",
                "position": "WR",
                "seasonStats": [
                    801,
                    802,
                    803,
                    804,
                    805,
                    806
                ],
                "jerseyNumber": 8,
                "lastName": "Mckee",
                "middleName": "Rush",
                "firstName": "Newman",
                "birthDate": "7/26/1993",
                "id": 8
            },
            {
                "classYear": "Senior",
                "position": "LB",
                "seasonStats": [
                    901,
                    902,
                    903,
                    904,
                    905,
                    906
                ],
                "jerseyNumber": 9,
                "lastName": "Brennan",
                "middleName": "Mendoza",
                "firstName": "Schroeder",
                "birthDate": "10/30/1994",
                "id": 9
            },
            {
                "classYear": "Junior",
                "position": "LB",
                "seasonStats": [
                    1001,
                    1002,
                    1003,
                    1004,
                    1005,
                    1006
                ],
                "jerseyNumber": 10,
                "lastName": "Stafford",
                "middleName": "Dejesus",
                "firstName": "Hoffman",
                "birthDate": "9/27/1995",
                "id": 10
            },
            {
                "classYear": "Senior",
                "position": "QB",
                "seasonStats": [
                    1101,
                    1102,
                    1103,
                    1104,
                    1105,
                    1106
                ],
                "jerseyNumber": 11,
                "lastName": "Cline",
                "middleName": "Powell",
                "firstName": "Talley",
                "birthDate": "6/20/1994",
                "id": 11
            },
            {
                "classYear": "Freshman",
                "position": "LB",
                "seasonStats": [
                    1201,
                    1202,
                    1203,
                    1204,
                    1205,
                    1206
                ],
                "jerseyNumber": 12,
                "lastName": "Brown",
                "middleName": "Rodgers",
                "firstName": "Hawkins",
                "birthDate": "6/8/1994",
                "id": 12
            },
            {
                "classYear": "Senior",
                "position": "P",
                "seasonStats": [
                    1301,
                    1302,
                    1303,
                    1304,
                    1305,
                    1306
                ],
                "jerseyNumber": 13,
                "lastName": "Daniels",
                "middleName": "Irwin",
                "firstName": "Mckee",
                "birthDate": "12/24/1993",
                "id": 13
            },
            {
                "classYear": "Junior",
                "position": "RB",
                "seasonStats": [
                    1401,
                    1402,
                    1403,
                    1404,
                    1405,
                    1406
                ],
                "jerseyNumber": 14,
                "lastName": "Lambert",
                "middleName": "Arnold",
                "firstName": "Roman",
                "birthDate": "5/2/1994",
                "id": 14
            },
            {
                "classYear": "Junior",
                "position": "DL",
                "seasonStats": [
                    1501,
                    1502,
                    1503,
                    1504,
                    1505,
                    1506
                ],
                "jerseyNumber": 15,
                "lastName": "Grant",
                "middleName": "Mcintosh",
                "firstName": "Hewitt",
                "birthDate": "9/11/1993",
                "id": 15
            },
            {
                "classYear": "Sophomore",
                "position": "OL",
                "seasonStats": [
                    1601,
                    1602,
                    1603,
                    1604,
                    1605,
                    1606
                ],
                "jerseyNumber": 16,
                "lastName": "Evans",
                "middleName": "Howard",
                "firstName": "Stephens",
                "birthDate": "9/29/1993",
                "id": 16
            },
            {
                "classYear": "Senior",
                "position": "DL",
                "seasonStats": [
                    1701,
                    1702,
                    1703,
                    1704,
                    1705,
                    1706
                ],
                "jerseyNumber": 17,
                "lastName": "Atkins",
                "middleName": "Robles",
                "firstName": "Trujillo",
                "birthDate": "1/31/1993",
                "id": 17
            },
            {
                "classYear": "Sophomore",
                "position": "P",
                "seasonStats": [
                    1801,
                    1802,
                    1803,
                    1804,
                    1805,
                    1806
                ],
                "jerseyNumber": 18,
                "lastName": "Miles",
                "middleName": "Mills",
                "firstName": "Wilder",
                "birthDate": "2/6/1994",
                "id": 18
            },
            {
                "classYear": "Junior",
                "position": "DL",
                "seasonStats": [
                    1901,
                    1902,
                    1903,
                    1904,
                    1905,
                    1906
                ],
                "jerseyNumber": 19,
                "lastName": "Phelps",
                "middleName": "Sheppard",
                "firstName": "William",
                "birthDate": "11/24/1993",
                "id": 19
            },
            {
                "classYear": "Senior",
                "position": "K",
                "seasonStats": [
                    2001,
                    2002,
                    2003,
                    2004,
                    2005,
                    2006
                ],
                "jerseyNumber": 20,
                "lastName": "Farley",
                "middleName": "Harding",
                "firstName": "Monroe",
                "birthDate": "12/18/1994",
                "id": 20
            },
            {
                "classYear": "Senior",
                "position": "DL",
                "seasonStats": [
                    2101,
                    2102,
                    2103,
                    2104,
                    2105,
                    2106
                ],
                "jerseyNumber": 21,
                "lastName": "Steele",
                "middleName": "Waters",
                "firstName": "Washington",
                "birthDate": "8/8/1993",
                "id": 21
            },
            {
                "classYear": "Sophomore",
                "position": "TE",
                "seasonStats": [
                    2201,
                    2202,
                    2203,
                    2204,
                    2205,
                    2206
                ],
                "jerseyNumber": 22,
                "lastName": "Charles",
                "middleName": "Camacho",
                "firstName": "Jarvis",
                "birthDate": "7/16/1993",
                "id": 22
            },
            {
                "classYear": "Junior",
                "position": "DL",
                "seasonStats": [
                    2301,
                    2302,
                    2303,
                    2304,
                    2305,
                    2306
                ],
                "jerseyNumber": 23,
                "lastName": "James",
                "middleName": "Kent",
                "firstName": "Sherman",
                "birthDate": "8/22/1994",
                "id": 23
            },
            {
                "classYear": "Senior",
                "position": "P",
                "seasonStats": [
                    2401,
                    2402,
                    2403,
                    2404,
                    2405,
                    2406
                ],
                "jerseyNumber": 24,
                "lastName": "Meadows",
                "middleName": "Rich",
                "firstName": "Norman",
                "birthDate": "9/4/1996",
                "id": 24
            },
            {
                "classYear": "Junior",
                "position": "K",
                "seasonStats": [
                    2501,
                    2502,
                    2503,
                    2504,
                    2505,
                    2506
                ],
                "jerseyNumber": 25,
                "lastName": "Armstrong",
                "middleName": "Cantrell",
                "firstName": "Burnett",
                "birthDate": "1/4/1996",
                "id": 25
            },
            {
                "classYear": "Senior",
                "position": "LB",
                "seasonStats": [
                    2601,
                    2602,
                    2603,
                    2604,
                    2605,
                    2606
                ],
                "jerseyNumber": 26,
                "lastName": "Norman",
                "middleName": "Rollins",
                "firstName": "Kennedy",
                "birthDate": "3/31/1993",
                "id": 26
            },
            {
                "classYear": "Freshman",
                "position": "DB",
                "seasonStats": [
                    2701,
                    2702,
                    2703,
                    2704,
                    2705,
                    2706
                ],
                "jerseyNumber": 27,
                "lastName": "Simpson",
                "middleName": "Benjamin",
                "firstName": "Dean",
                "birthDate": "8/26/1993",
                "id": 27
            },
            {
                "classYear": "Sophomore",
                "position": "WR",
                "seasonStats": [
                    2801,
                    2802,
                    2803,
                    2804,
                    2805,
                    2806
                ],
                "jerseyNumber": 28,
                "lastName": "Avery",
                "middleName": "Dillard",
                "firstName": "Carr",
                "birthDate": "8/26/1995",
                "id": 28
            },
            {
                "classYear": "Senior",
                "position": "DE",
                "seasonStats": [
                    2901,
                    2902,
                    2903,
                    2904,
                    2905,
                    2906
                ],
                "jerseyNumber": 29,
                "lastName": "Weiss",
                "middleName": "Oneal",
                "firstName": "Travis",
                "birthDate": "8/26/1994",
                "id": 29
            },
            {
                "classYear": "Sophomore",
                "position": "QB",
                "seasonStats": [
                    3001,
                    3002,
                    3003,
                    3004,
                    3005,
                    3006
                ],
                "jerseyNumber": 30,
                "lastName": "Duffy",
                "middleName": "Stafford",
                "firstName": "Preston",
                "birthDate": "2/7/1993",
                "id": 30
            },
            {
                "classYear": "Junior",
                "position": "RB",
                "seasonStats": [
                    3101,
                    3102,
                    3103,
                    3104,
                    3105,
                    3106
                ],
                "jerseyNumber": 31,
                "lastName": "Roy",
                "middleName": "Harrison",
                "firstName": "Hudson",
                "birthDate": "9/2/1993",
                "id": 31
            },
            {
                "classYear": "Junior",
                "position": "TE",
                "seasonStats": [
                    3201,
                    3202,
                    3203,
                    3204,
                    3205,
                    3206
                ],
                "jerseyNumber": 32,
                "lastName": "Perry",
                "middleName": "Miranda",
                "firstName": "Coleman",
                "birthDate": "5/31/1996",
                "id": 32
            },
            {
                "classYear": "Freshman",
                "position": "DE",
                "seasonStats": [
                    3301,
                    3302,
                    3303,
                    3304,
                    3305,
                    3306
                ],
                "jerseyNumber": 33,
                "lastName": "Soto",
                "middleName": "Donaldson",
                "firstName": "Weiss",
                "birthDate": "11/16/1993",
                "id": 33
            },
            {
                "classYear": "Senior",
                "position": "DE",
                "seasonStats": [
                    3401,
                    3402,
                    3403,
                    3404,
                    3405,
                    3406
                ],
                "jerseyNumber": 34,
                "lastName": "Singleton",
                "middleName": "Hernandez",
                "firstName": "Williamson",
                "birthDate": "11/23/1994",
                "id": 34
            },
            {
                "classYear": "Junior",
                "position": "OL",
                "seasonStats": [
                    3501,
                    3502,
                    3503,
                    3504,
                    3505,
                    3506
                ],
                "jerseyNumber": 35,
                "lastName": "Greene",
                "middleName": "Alvarez",
                "firstName": "Benson",
                "birthDate": "5/25/1995",
                "id": 35
            },
            {
                "classYear": "Senior",
                "position": "DL",
                "seasonStats": [
                    3601,
                    3602,
                    3603,
                    3604,
                    3605,
                    3606
                ],
                "jerseyNumber": 36,
                "lastName": "Stevenson",
                "middleName": "Solis",
                "firstName": "Levine",
                "birthDate": "8/8/1996",
                "id": 36
            },
            {
                "classYear": "Junior",
                "position": "DL",
                "seasonStats": [
                    3701,
                    3702,
                    3703,
                    3704,
                    3705,
                    3706
                ],
                "jerseyNumber": 37,
                "lastName": "Ball",
                "middleName": "Gregory",
                "firstName": "Gardner",
                "birthDate": "6/22/1996",
                "id": 37
            },
            {
                "classYear": "Junior",
                "position": "DE",
                "seasonStats": [
                    3801,
                    3802,
                    3803,
                    3804,
                    3805,
                    3806
                ],
                "jerseyNumber": 38,
                "lastName": "Murray",
                "middleName": "Puckett",
                "firstName": "Cook",
                "birthDate": "9/23/1993",
                "id": 38
            },
            {
                "classYear": "Senior",
                "position": "K",
                "seasonStats": [
                    3901,
                    3902,
                    3903,
                    3904,
                    3905,
                    3906
                ],
                "jerseyNumber": 39,
                "lastName": "Crosby",
                "middleName": "Gilmore",
                "firstName": "Harper",
                "birthDate": "7/4/1993",
                "id": 39
            },
            {
                "classYear": "Freshman",
                "position": "WR",
                "seasonStats": [
                    4001,
                    4002,
                    4003,
                    4004,
                    4005,
                    4006
                ],
                "jerseyNumber": 40,
                "lastName": "Herrera",
                "middleName": "Mcbride",
                "firstName": "Knowles",
                "birthDate": "10/4/1993",
                "id": 40
            },
            {
                "classYear": "Senior",
                "position": "TE",
                "seasonStats": [
                    4101,
                    4102,
                    4103,
                    4104,
                    4105,
                    4106
                ],
                "jerseyNumber": 41,
                "lastName": "Tucker",
                "middleName": "Myers",
                "firstName": "Brooks",
                "birthDate": "5/2/1996",
                "id": 41
            },
            {
                "classYear": "Junior",
                "position": "OL",
                "seasonStats": [
                    4201,
                    4202,
                    4203,
                    4204,
                    4205,
                    4206
                ],
                "jerseyNumber": 42,
                "lastName": "Cotton",
                "middleName": "Roberson",
                "firstName": "Mcintyre",
                "birthDate": "8/14/1993",
                "id": 42
            },
            {
                "classYear": "Senior",
                "position": "DL",
                "seasonStats": [
                    4301,
                    4302,
                    4303,
                    4304,
                    4305,
                    4306
                ],
                "jerseyNumber": 43,
                "lastName": "Davenport",
                "middleName": "Wheeler",
                "firstName": "Moon",
                "birthDate": "3/4/1996",
                "id": 43
            },
            {
                "classYear": "Senior",
                "position": "RB",
                "seasonStats": [
                    4401,
                    4402,
                    4403,
                    4404,
                    4405,
                    4406
                ],
                "jerseyNumber": 44,
                "lastName": "Taylor",
                "middleName": "Rosario",
                "firstName": "Bailey",
                "birthDate": "11/22/1995",
                "id": 44
            },
            {
                "classYear": "Sophomore",
                "position": "TE",
                "seasonStats": [
                    4501,
                    4502,
                    4503,
                    4504,
                    4505,
                    4506
                ],
                "jerseyNumber": 45,
                "lastName": "Newton",
                "middleName": "Strickland",
                "firstName": "Herman",
                "birthDate": "8/9/1996",
                "id": 45
            },
            {
                "classYear": "Freshman",
                "position": "OL",
                "seasonStats": [
                    4601,
                    4602,
                    4603,
                    4604,
                    4605,
                    4606
                ],
                "jerseyNumber": 46,
                "lastName": "Giles",
                "middleName": "Lindsey",
                "firstName": "Pena",
                "birthDate": "9/28/1995",
                "id": 46
            },
            {
                "classYear": "Freshman",
                "position": "LB",
                "seasonStats": [
                    4701,
                    4702,
                    4703,
                    4704,
                    4705,
                    4706
                ],
                "jerseyNumber": 47,
                "lastName": "Obrien",
                "middleName": "Rutledge",
                "firstName": "Cobb",
                "birthDate": "8/28/1994",
                "id": 47
            },
            {
                "classYear": "Senior",
                "position": "DE",
                "seasonStats": [
                    4801,
                    4802,
                    4803,
                    4804,
                    4805,
                    4806
                ],
                "jerseyNumber": 48,
                "lastName": "Dean",
                "middleName": "Delacruz",
                "firstName": "Briggs",
                "birthDate": "8/1/1994",
                "id": 48
            },
            {
                "classYear": "Junior",
                "position": "P",
                "seasonStats": [
                    4901,
                    4902,
                    4903,
                    4904,
                    4905,
                    4906
                ],
                "jerseyNumber": 49,
                "lastName": "Farrell",
                "middleName": "Walsh",
                "firstName": "Peck",
                "birthDate": "9/9/1996",
                "id": 49
            },
            {
                "classYear": "Freshman",
                "position": "P",
                "seasonStats": [
                    5001,
                    5002,
                    5003,
                    5004,
                    5005,
                    5006
                ],
                "jerseyNumber": 50,
                "lastName": "Vazquez",
                "middleName": "James",
                "firstName": "Hammond",
                "birthDate": "10/1/1994",
                "id": 50
            },
            {
                "classYear": "Sophomore",
                "position": "WR",
                "seasonStats": [
                    5101,
                    5102,
                    5103,
                    5104,
                    5105,
                    5106
                ],
                "jerseyNumber": 51,
                "lastName": "Day",
                "middleName": "Petersen",
                "firstName": "Murray",
                "birthDate": "3/21/1995",
                "id": 51
            },
            {
                "classYear": "Junior",
                "position": "OL",
                "seasonStats": [
                    5201,
                    5202,
                    5203,
                    5204,
                    5205,
                    5206
                ],
                "jerseyNumber": 52,
                "lastName": "Cervantes",
                "middleName": "Sanchez",
                "firstName": "England",
                "birthDate": "8/2/1993",
                "id": 52
            },
            {
                "classYear": "Senior",
                "position": "DB",
                "seasonStats": [
                    5301,
                    5302,
                    5303,
                    5304,
                    5305,
                    5306
                ],
                "jerseyNumber": 53,
                "lastName": "Mcmillan",
                "middleName": "Bender",
                "firstName": "Daniels",
                "birthDate": "12/6/1994",
                "id": 53
            },
            {
                "classYear": "Senior",
                "position": "QB",
                "seasonStats": [
                    5401,
                    5402,
                    5403,
                    5404,
                    5405,
                    5406
                ],
                "jerseyNumber": 54,
                "lastName": "Flowers",
                "middleName": "Ingram",
                "firstName": "Foreman",
                "birthDate": "2/10/1995",
                "id": 54
            },
            {
                "classYear": "Senior",
                "position": "P",
                "seasonStats": [
                    5501,
                    5502,
                    5503,
                    5504,
                    5505,
                    5506
                ],
                "jerseyNumber": 55,
                "lastName": "Boyer",
                "middleName": "Bernard",
                "firstName": "Day",
                "birthDate": "5/21/1993",
                "id": 55
            },
            {
                "classYear": "Sophomore",
                "position": "QB",
                "seasonStats": [
                    5601,
                    5602,
                    5603,
                    5604,
                    5605,
                    5606
                ],
                "jerseyNumber": 56,
                "lastName": "Gentry",
                "middleName": "Gomez",
                "firstName": "Becker",
                "birthDate": "12/20/1995",
                "id": 56
            },
            {
                "classYear": "Junior",
                "position": "K",
                "seasonStats": [
                    5701,
                    5702,
                    5703,
                    5704,
                    5705,
                    5706
                ],
                "jerseyNumber": 57,
                "lastName": "Davidson",
                "middleName": "Carver",
                "firstName": "Dalton",
                "birthDate": "12/6/1995",
                "id": 57
            },
            {
                "classYear": "Sophomore",
                "position": "RB",
                "seasonStats": [
                    5801,
                    5802,
                    5803,
                    5804,
                    5805,
                    5806
                ],
                "jerseyNumber": 58,
                "lastName": "Bradshaw",
                "middleName": "Aguirre",
                "firstName": "Gilbert",
                "birthDate": "1/20/1995",
                "id": 58
            },
            {
                "classYear": "Sophomore",
                "position": "LB",
                "seasonStats": [
                    5901,
                    5902,
                    5903,
                    5904,
                    5905,
                    5906
                ],
                "jerseyNumber": 59,
                "lastName": "Fry",
                "middleName": "Weeks",
                "firstName": "Vaughan",
                "birthDate": "6/13/1995",
                "id": 59
            },
            {
                "classYear": "Junior",
                "position": "RB",
                "seasonStats": [
                    6001,
                    6002,
                    6003,
                    6004,
                    6005,
                    6006
                ],
                "jerseyNumber": 60,
                "lastName": "Berger",
                "middleName": "Kerr",
                "firstName": "Owen",
                "birthDate": "9/3/1996",
                "id": 60
            },
            {
                "classYear": "Senior",
                "position": "DL",
                "seasonStats": [
                    6101,
                    6102,
                    6103,
                    6104,
                    6105,
                    6106
                ],
                "jerseyNumber": 61,
                "lastName": "Aguilar",
                "middleName": "Butler",
                "firstName": "Kelley",
                "birthDate": "3/21/1994",
                "id": 61
            },
            {
                "classYear": "Sophomore",
                "position": "P",
                "seasonStats": [
                    6201,
                    6202,
                    6203,
                    6204,
                    6205,
                    6206
                ],
                "jerseyNumber": 62,
                "lastName": "Houston",
                "middleName": "Sellers",
                "firstName": "Hayes",
                "birthDate": "4/10/1993",
                "id": 62
            },
            {
                "classYear": "Junior",
                "position": "DE",
                "seasonStats": [
                    6301,
                    6302,
                    6303,
                    6304,
                    6305,
                    6306
                ],
                "jerseyNumber": 63,
                "lastName": "Mills",
                "middleName": "Singleton",
                "firstName": "Farmer",
                "birthDate": "10/2/1993",
                "id": 63
            },
            {
                "classYear": "Sophomore",
                "position": "RB",
                "seasonStats": [
                    6401,
                    6402,
                    6403,
                    6404,
                    6405,
                    6406
                ],
                "jerseyNumber": 64,
                "lastName": "Monroe",
                "middleName": "Marshall",
                "firstName": "Booker",
                "birthDate": "11/9/1995",
                "id": 64
            },
            {
                "classYear": "Junior",
                "position": "DE",
                "seasonStats": [
                    6501,
                    6502,
                    6503,
                    6504,
                    6505,
                    6506
                ],
                "jerseyNumber": 65,
                "lastName": "Tyler",
                "middleName": "Wong",
                "firstName": "Hines",
                "birthDate": "1/6/1993",
                "id": 65
            },
            {
                "classYear": "Senior",
                "position": "QB",
                "seasonStats": [
                    6601,
                    6602,
                    6603,
                    6604,
                    6605,
                    6606
                ],
                "jerseyNumber": 66,
                "lastName": "Fulton",
                "middleName": "Vincent",
                "firstName": "Wilkins",
                "birthDate": "2/12/1995",
                "id": 66
            },
            {
                "classYear": "Sophomore",
                "position": "TE",
                "seasonStats": [
                    6701,
                    6702,
                    6703,
                    6704,
                    6705,
                    6706
                ],
                "jerseyNumber": 67,
                "lastName": "Maddox",
                "middleName": "Hamilton",
                "firstName": "Nixon",
                "birthDate": "5/26/1993",
                "id": 67
            },
            {
                "classYear": "Senior",
                "position": "RB",
                "seasonStats": [
                    6801,
                    6802,
                    6803,
                    6804,
                    6805,
                    6806
                ],
                "jerseyNumber": 68,
                "lastName": "Foley",
                "middleName": "Tanner",
                "firstName": "Pitts",
                "birthDate": "7/20/1996",
                "id": 68
            },
            {
                "classYear": "Sophomore",
                "position": "DE",
                "seasonStats": [
                    6901,
                    6902,
                    6903,
                    6904,
                    6905,
                    6906
                ],
                "jerseyNumber": 69,
                "lastName": "Hart",
                "middleName": "Griffin",
                "firstName": "Randolph",
                "birthDate": "8/28/1995",
                "id": 69
            },
            {
                "classYear": "Sophomore",
                "position": "OL",
                "seasonStats": [
                    7001,
                    7002,
                    7003,
                    7004,
                    7005,
                    7006
                ],
                "jerseyNumber": 70,
                "lastName": "Conley",
                "middleName": "Stout",
                "firstName": "Whitney",
                "birthDate": "3/13/1994",
                "id": 70
            },
            {
                "classYear": "Junior",
                "position": "LB",
                "seasonStats": [
                    7101,
                    7102,
                    7103,
                    7104,
                    7105,
                    7106
                ],
                "jerseyNumber": 71,
                "lastName": "Hodges",
                "middleName": "Lewis",
                "firstName": "Montoya",
                "birthDate": "8/17/1995",
                "id": 71
            },
            {
                "classYear": "Senior",
                "position": "TE",
                "seasonStats": [
                    7201,
                    7202,
                    7203,
                    7204,
                    7205,
                    7206
                ],
                "jerseyNumber": 72,
                "lastName": "Hall",
                "middleName": "Norris",
                "firstName": "Huffman",
                "birthDate": "6/16/1993",
                "id": 72
            },
            {
                "classYear": "Junior",
                "position": "LB",
                "seasonStats": [
                    7301,
                    7302,
                    7303,
                    7304,
                    7305,
                    7306
                ],
                "jerseyNumber": 73,
                "lastName": "Poole",
                "middleName": "Boyle",
                "firstName": "Richmond",
                "birthDate": "9/19/1995",
                "id": 73
            },
            {
                "classYear": "Sophomore",
                "position": "DE",
                "seasonStats": [
                    7401,
                    7402,
                    7403,
                    7404,
                    7405,
                    7406
                ],
                "jerseyNumber": 74,
                "lastName": "Cruz",
                "middleName": "Rosales",
                "firstName": "Rosa",
                "birthDate": "2/29/1996",
                "id": 74
            },
            {
                "classYear": "Freshman",
                "position": "DE",
                "seasonStats": [
                    7501,
                    7502,
                    7503,
                    7504,
                    7505,
                    7506
                ],
                "jerseyNumber": 75,
                "lastName": "Hardin",
                "middleName": "Ramos",
                "firstName": "Cervantes",
                "birthDate": "12/5/1996",
                "id": 75
            },
            {
                "classYear": "Junior",
                "position": "LB",
                "seasonStats": [
                    7601,
                    7602,
                    7603,
                    7604,
                    7605,
                    7606
                ],
                "jerseyNumber": 76,
                "lastName": "Floyd",
                "middleName": "Mcmillan",
                "firstName": "Mitchell",
                "birthDate": "6/11/1993",
                "id": 76
            },
            {
                "classYear": "Junior",
                "position": "DL",
                "seasonStats": [
                    7701,
                    7702,
                    7703,
                    7704,
                    7705,
                    7706
                ],
                "jerseyNumber": 77,
                "lastName": "Carrillo",
                "middleName": "Yates",
                "firstName": "Blanchard",
                "birthDate": "3/12/1996",
                "id": 77
            },
            {
                "classYear": "Senior",
                "position": "P",
                "seasonStats": [
                    7801,
                    7802,
                    7803,
                    7804,
                    7805,
                    7806
                ],
                "jerseyNumber": 78,
                "lastName": "Mueller",
                "middleName": "Valenzuela",
                "firstName": "Pate",
                "birthDate": "8/13/1994",
                "id": 78
            },
            {
                "classYear": "Junior",
                "position": "DL",
                "seasonStats": [
                    7901,
                    7902,
                    7903,
                    7904,
                    7905,
                    7906
                ],
                "jerseyNumber": 79,
                "lastName": "Mooney",
                "middleName": "Reid",
                "firstName": "Meadows",
                "birthDate": "8/13/1995",
                "id": 79
            },
            {
                "classYear": "Junior",
                "position": "DE",
                "seasonStats": [
                    8001,
                    8002,
                    8003,
                    8004,
                    8005,
                    8006
                ],
                "jerseyNumber": 80,
                "lastName": "Kidd",
                "middleName": "Jacobson",
                "firstName": "Woodard",
                "birthDate": "11/28/1993",
                "id": 80
            },
            {
                "classYear": "Senior",
                "position": "K",
                "seasonStats": [
                    8101,
                    8102,
                    8103,
                    8104,
                    8105,
                    8106
                ],
                "jerseyNumber": 81,
                "lastName": "King",
                "middleName": "Mooney",
                "firstName": "Guerrero",
                "birthDate": "10/22/1993",
                "id": 81
            },
            {
                "classYear": "Sophomore",
                "position": "OL",
                "seasonStats": [
                    8201,
                    8202,
                    8203,
                    8204,
                    8205,
                    8206
                ],
                "jerseyNumber": 82,
                "lastName": "Carr",
                "middleName": "Barnett",
                "firstName": "Fitzpatrick",
                "birthDate": "7/21/1995",
                "id": 82
            },
            {
                "classYear": "Senior",
                "position": "WR",
                "seasonStats": [
                    8301,
                    8302,
                    8303,
                    8304,
                    8305,
                    8306
                ],
                "jerseyNumber": 83,
                "lastName": "Rivers",
                "middleName": "Faulkner",
                "firstName": "Curry",
                "birthDate": "11/10/1996",
                "id": 83
            },
            {
                "classYear": "Junior",
                "position": "P",
                "seasonStats": [
                    8401,
                    8402,
                    8403,
                    8404,
                    8405,
                    8406
                ],
                "jerseyNumber": 84,
                "lastName": "Combs",
                "middleName": "Wiggins",
                "firstName": "Stevenson",
                "birthDate": "8/21/1993",
                "id": 84
            },
            {
                "classYear": "Freshman",
                "position": "QB",
                "seasonStats": [
                    8501,
                    8502,
                    8503,
                    8504,
                    8505,
                    8506
                ],
                "jerseyNumber": 85,
                "lastName": "Peck",
                "middleName": "Giles",
                "firstName": "Calhoun",
                "birthDate": "8/17/1996",
                "id": 85
            },
            {
                "classYear": "Senior",
                "position": "LB",
                "seasonStats": [
                    8601,
                    8602,
                    8603,
                    8604,
                    8605,
                    8606
                ],
                "jerseyNumber": 86,
                "lastName": "Little",
                "middleName": "Mcdaniel",
                "firstName": "Ball",
                "birthDate": "11/1/1996",
                "id": 86
            },
            {
                "classYear": "Freshman",
                "position": "P",
                "seasonStats": [
                    8701,
                    8702,
                    8703,
                    8704,
                    8705,
                    8706
                ],
                "jerseyNumber": 87,
                "lastName": "Meyers",
                "middleName": "Rowland",
                "firstName": "Goff",
                "birthDate": "12/16/1996",
                "id": 87
            },
            {
                "classYear": "Sophomore",
                "position": "WR",
                "seasonStats": [
                    8801,
                    8802,
                    8803,
                    8804,
                    8805,
                    8806
                ],
                "jerseyNumber": 88,
                "lastName": "Mccall",
                "middleName": "Pittman",
                "firstName": "Riddle",
                "birthDate": "9/3/1993",
                "id": 88
            },
            {
                "classYear": "Freshman",
                "position": "RB",
                "seasonStats": [
                    8901,
                    8902,
                    8903,
                    8904,
                    8905,
                    8906
                ],
                "jerseyNumber": 89,
                "lastName": "Hinton",
                "middleName": "Buckley",
                "firstName": "Padilla",
                "birthDate": "1/15/1993",
                "id": 89
            },
            {
                "classYear": "Senior",
                "position": "TE",
                "seasonStats": [
                    9001,
                    9002,
                    9003,
                    9004,
                    9005,
                    9006
                ],
                "jerseyNumber": 90,
                "lastName": "Koch",
                "middleName": "Schwartz",
                "firstName": "Grimes",
                "birthDate": "11/26/1994",
                "id": 90
            },
            {
                "classYear": "Sophomore",
                "position": "DB",
                "seasonStats": [
                    9101,
                    9102,
                    9103,
                    9104,
                    9105,
                    9106
                ],
                "jerseyNumber": 91,
                "lastName": "Chandler",
                "middleName": "Branch",
                "firstName": "Hinton",
                "birthDate": "8/28/1993",
                "id": 91
            },
            {
                "classYear": "Senior",
                "position": "RB",
                "seasonStats": [
                    9201,
                    9202,
                    9203,
                    9204,
                    9205,
                    9206
                ],
                "jerseyNumber": 92,
                "lastName": "Bartlett",
                "middleName": "Bentley",
                "firstName": "Sharpe",
                "birthDate": "8/28/1994",
                "id": 92
            },
            {
                "classYear": "Freshman",
                "position": "DE",
                "seasonStats": [
                    9301,
                    9302,
                    9303,
                    9304,
                    9305,
                    9306
                ],
                "jerseyNumber": 93,
                "lastName": "Beasley",
                "middleName": "Hurley",
                "firstName": "Santos",
                "birthDate": "11/6/1994",
                "id": 93
            },
            {
                "classYear": "Freshman",
                "position": "K",
                "seasonStats": [
                    9401,
                    9402,
                    9403,
                    9404,
                    9405,
                    9406
                ],
                "jerseyNumber": 94,
                "lastName": "Knapp",
                "middleName": "Stein",
                "firstName": "Merrill",
                "birthDate": "3/22/1994",
                "id": 94
            },
            {
                "classYear": "Sophomore",
                "position": "LB",
                "seasonStats": [
                    9501,
                    9502,
                    9503,
                    9504,
                    9505,
                    9506
                ],
                "jerseyNumber": 95,
                "lastName": "Lamb",
                "middleName": "Kirby",
                "firstName": "Brock",
                "birthDate": "3/4/1996",
                "id": 95
            },
            {
                "classYear": "Junior",
                "position": "QB",
                "seasonStats": [
                    9601,
                    9602,
                    9603,
                    9604,
                    9605,
                    9606
                ],
                "jerseyNumber": 96,
                "lastName": "Conrad",
                "middleName": "Lindsay",
                "firstName": "Wooten",
                "birthDate": "2/12/1993",
                "id": 96
            },
            {
                "classYear": "Sophomore",
                "position": "DL",
                "seasonStats": [
                    9701,
                    9702,
                    9703,
                    9704,
                    9705,
                    9706
                ],
                "jerseyNumber": 97,
                "lastName": "Sweet",
                "middleName": "Hogan",
                "firstName": "Drake",
                "birthDate": "6/3/1995",
                "id": 97
            },
            {
                "classYear": "Sophomore",
                "position": "RB",
                "seasonStats": [
                    9801,
                    9802,
                    9803,
                    9804,
                    9805,
                    9806
                ],
                "jerseyNumber": 98,
                "lastName": "Ayala",
                "middleName": "Allen",
                "firstName": "Greene",
                "birthDate": "12/15/1996",
                "id": 98
            },
            {
                "classYear": "Junior",
                "position": "OL",
                "seasonStats": [
                    9901,
                    9902,
                    9903,
                    9904,
                    9905,
                    9906
                ],
                "jerseyNumber": 99,
                "lastName": "Jefferson",
                "middleName": "Vasquez",
                "firstName": "Finch",
                "birthDate": "10/13/1996",
                "id": 99
            },
            {
                "classYear": "Junior",
                "position": "RB",
                "seasonStats": [
                    10001,
                    10002,
                    10003,
                    10004,
                    10005,
                    10006
                ],
                "jerseyNumber": 100,
                "lastName": "Dawson",
                "middleName": "Perkins",
                "firstName": "Burris",
                "birthDate": "9/6/1995",
                "id": 100
            }
        ]
});

export default Player;

/*
 CREATE TABLE [dbo].[Player_Profile](
 [Player_Profile_Id] [bigint] IDENTITY(1,1) NOT NULL,
 [Organization_Id] [bigint] NULL,
 [Player_Level_Id] [bigint] NULL,
 [Player_First_Name] [varchar](100) NULL,
 [Player_Middle_Name] [varchar](100) NULL,
 [Player_Last_Name] [varchar](100) NULL,
 [Player_Preferred_Name] [varchar](100) NULL,
 [Player_Jersey_No] [varchar](2) NULL,
 [Player_DOB] [datetime] NULL,
 [Player_Addr_1] [varchar](100) NULL,
 [Player_Addr_2] [varchar](100) NULL,
 [Player_City] [varchar](100) NOT NULL,
 [Player_State] [varchar](2) NULL,
 [Player_Zip] [varchar](11) NULL,
 [Player_Country] [varchar](100) NULL,
 [Player_Home_Phone] [varchar](10) NULL,
 [Player_Cell_Phone] [varchar](10) NULL,
 [Player_NCAA_Clearinghouse_Id] [varchar](10) NULL,
 [Player_Siblings] [varchar](1000) NULL,
 [Player_Height] [float] NULL,
 [Player_Weight] [float] NULL,
 [Player_40Yd] [float] NULL,
 [Player_Shuttle] [float] NULL,
 [Player_Bench] [float] NULL,
 [Player_Wingspan] [float] NULL,
 [Player_Squat] [float] NULL,
 [Player_Vertical_Jump] [float] NULL,
 [Created_DateTime] [datetime] NULL,
 [Player_Email] [varchar](200) NULL,
 [Player_Major] [varchar](100) NULL,
 [Player_Advisor] [varchar](100) NULL,
 [LastUpdated_DateTime] [timestamp] NULL,
 [Player_Class] [varchar](10) NULL,
 [Player_Stats] [varchar](150) NULL,
 CONSTRAINT [PK_Player_Profile] PRIMARY KEY CLUSTERED
 (
 [Player_Profile_Id] ASC
 )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
 ) ON [PRIMARY]

 */