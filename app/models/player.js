import Ember from 'ember';
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
    //preferredName: attr(),  //  [Player_Preferred_Name] [varchar](100) NULL,
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

    gameStats: hasMany('gameStat',{async:true}),

    classYr: function() {
        var classYear = this.get('classYear');
        if (classYear === 'Freshman')  { return 'FR';}
        if (classYear === 'Sophomore') { return 'SO';}
        if (classYear === 'Junior')    { return 'JR';}
        if (classYear === 'Senior')    { return 'SR';}
    }.property('classYear'),

    currentSeasonStats: function() {
        //var seasonStats = this.get('seasonStats');
        var seasonStatsLength = this.get('seasonStats.length');
        if (seasonStatsLength === 1) {
            console.log('currentSeasonStats first Object');
            console.log(this.get('seasonStats.content.firstObject'));
            return this.get('seasonStats.firstObject');
        }
        if (seasonStatsLength === 0) {
            console.log('currentSeasonStats is empty');
            return null;
        }
    }.property('seasonStats'),

    isNewPlayer: function( ) {
        return this.get('classYear') === 'Freshman';
    }.property('classYear'),

    lastGame: function() {
        var promise = this.get('gameStats').then(function(stats) {
            if (stats.get('length')) {
                return stats.get('content.lastObject');
            } else {
                return null;
            }
        }, function() {
            return null;
        });

        return DS.PromiseObject.create({
            promise: promise
        });
    }.property('gameStats.length'),

    lastGameAvgGrade: Ember.computed.oneWay('lastGame.overallGrade'),
    lastGameNumPlays: Ember.computed.oneWay('lastGame.numPlays'),

    seasonNumGames: function() {
        return this.get('gameStats.length');
    }.property('gameStats.length'),

    seasonAvgGrade: function() {
        var stats = this.get('gameStats');
        var length = this.get('gameStats.length');
        var sum = 0;
        var avg = 0;
        stats.forEach(function(item) {
            sum += item.get('overallGrade');
        });
        if (length) {
            avg = Math.ceil(sum / length);
        }
        return avg;
    }.property('gameStats.length'),

    seasonAvgBonusGrade: function() {
        var stats = this.get('gameStats');
        var length = this.get('gameStats.length');
        var sum = 0;
        var avg = 0;
        stats.forEach(function(item) {
            sum += item.get('bonusGrade');
        });
        if (length) {
            avg = Math.ceil(sum / length);
        }
        return avg;
    }.property('gameStats.length'),

    seasonAvgUnitImpactGrade: function() {
        var stats = this.get('gameStats');
        var length = this.get('gameStats.length');
        var sum = 0;
        var avg = 0;
        stats.forEach(function(item) {
            sum += item.get('unitImpactGrade');
        });
        if (length) {
            avg = Math.ceil(sum / length);
        }
        return avg;
    }.property('gameStats.length'),

    seasonAvgCat1Grade: function() {
        var stats = this.get('gameStats');
        var length = this.get('gameStats.length');
        var sum = 0;
        var avg = 0;
        stats.forEach(function(item) {
            sum += item.get('mainCat1Grade');
        });
        if (length) {
            avg = Math.ceil(sum / length);
        }
        return avg;
    }.property('gameStats.length'),

    seasonAvgCat2Grade: function() {
        var stats = this.get('gameStats');
        var length = this.get('gameStats.length');
        var sum = 0;
        var avg = 0;
        stats.forEach(function(item) {
            sum += item.get('mainCat2Grade');
        });
        if (length) {
            avg = Math.ceil(sum / length);
        }
        return avg;
    }.property('gameStats.length'),

    seasonAvgCat3Grade: function() {
        var stats = this.get('gameStats');
        var length = this.get('gameStats.length');
        var sum = 0;
        var avg = 0;
        stats.forEach(function(item) {
            sum += item.get('mainCat3Grade');
        });
        if (length) {
            avg = Math.ceil(sum / length);
        }
        return avg;
    }.property('gameStats.length'),

    seasonNumPlays: function() {
        var stats = this.get('gameStats');
        var sum = 0;
        stats.forEach(function(item) {
            sum += item.get('numPlays');
        });
        return sum;
    }.property('gameStats.length'),

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
            "classYear": "Senior",
            "position": "LB",
            "seasonStats": [
                1
            ],
            "gameStats": [
                101,
                102,
                103,
                104,
                105,
                106
            ],
            "jerseyNumber": 1,
            "lastName": "Conrad",
            "middleName": "Burks",
            "firstName": "Crane",
            "birthDate": "5/11/1994",
            "id": 1
        },
        {
            "classYear": "Senior",
            "position": "DL",
            "seasonStats": [
                2
            ],
            "gameStats": [
                201,
                202,
                203,
                204,
                205,
                206
            ],
            "jerseyNumber": 2,
            "lastName": "Duncan",
            "middleName": "Coleman",
            "firstName": "Barron",
            "birthDate": "6/30/1996",
            "id": 2
        },
        {
            "classYear": "Junior",
            "position": "P",
            "seasonStats": [
                3
            ],
            "gameStats": [
                301,
                302,
                303,
                304,
                305,
                306
            ],
            "jerseyNumber": 3,
            "lastName": "Montoya",
            "middleName": "Jordan",
            "firstName": "Marsh",
            "birthDate": "6/3/1996",
            "id": 3
        },
        {
            "classYear": "Junior",
            "position": "WR",
            "seasonStats": [
                4
            ],
            "gameStats": [
                401,
                402,
                403,
                404,
                405,
                406
            ],
            "jerseyNumber": 4,
            "lastName": "Mercer",
            "middleName": "Bender",
            "firstName": "Scott",
            "birthDate": "1/30/1993",
            "id": 4
        },
        {
            "classYear": "Senior",
            "position": "DE",
            "seasonStats": [
                5
            ],
            "gameStats": [
                501,
                502,
                503,
                504,
                505,
                506
            ],
            "jerseyNumber": 5,
            "lastName": "Terry",
            "middleName": "Everett",
            "firstName": "Alston",
            "birthDate": "2/29/1996",
            "id": 5
        },
        {
            "classYear": "Junior",
            "position": "OL",
            "seasonStats": [
                6
            ],
            "gameStats": [
                601,
                602,
                603,
                604,
                605,
                606
            ],
            "jerseyNumber": 6,
            "lastName": "Ray",
            "middleName": "Nelson",
            "firstName": "Leach",
            "birthDate": "8/11/1993",
            "id": 6
        },
        {
            "classYear": "Senior",
            "position": "RB",
            "seasonStats": [
                7
            ],
            "gameStats": [
                701,
                702,
                703,
                704,
                705,
                706
            ],
            "jerseyNumber": 7,
            "lastName": "Haley",
            "middleName": "Cooper",
            "firstName": "Gould",
            "birthDate": "1/16/1996",
            "id": 7
        },
        {
            "classYear": "Senior",
            "position": "DE",
            "seasonStats": [
                8
            ],
            "gameStats": [
                801,
                802,
                803,
                804,
                805,
                806
            ],
            "jerseyNumber": 8,
            "lastName": "Byrd",
            "middleName": "Phelps",
            "firstName": "Matthews",
            "birthDate": "7/25/1993",
            "id": 8
        },
        {
            "classYear": "Freshman",
            "position": "RB",
            "seasonStats": [
                9
            ],
            "gameStats": [
                901,
                902,
                903,
                904,
                905,
                906
            ],
            "jerseyNumber": 9,
            "lastName": "Hardin",
            "middleName": "Harvey",
            "firstName": "Guzman",
            "birthDate": "3/4/1993",
            "id": 9
        },
        {
            "classYear": "Freshman",
            "position": "OL",
            "seasonStats": [
                10
            ],
            "gameStats": [
                1001,
                1002,
                1003,
                1004,
                1005,
                1006
            ],
            "jerseyNumber": 10,
            "lastName": "Douglas",
            "middleName": "Kinney",
            "firstName": "Alford",
            "birthDate": "11/5/1995",
            "id": 10
        },
        {
            "classYear": "Sophomore",
            "position": "DB",
            "seasonStats": [
                11
            ],
            "gameStats": [
                1101,
                1102,
                1103,
                1104,
                1105,
                1106
            ],
            "jerseyNumber": 11,
            "lastName": "Case",
            "middleName": "Guerra",
            "firstName": "Mcmahon",
            "birthDate": "7/18/1993",
            "id": 11
        },
        {
            "classYear": "Senior",
            "position": "P",
            "seasonStats": [
                12
            ],
            "gameStats": [
                1201,
                1202,
                1203,
                1204,
                1205,
                1206
            ],
            "jerseyNumber": 12,
            "lastName": "Bonner",
            "middleName": "Oliver",
            "firstName": "Brady",
            "birthDate": "2/7/1995",
            "id": 12
        },
        {
            "classYear": "Freshman",
            "position": "DE",
            "seasonStats": [
                13
            ],
            "gameStats": [
                1301,
                1302,
                1303,
                1304,
                1305,
                1306
            ],
            "jerseyNumber": 13,
            "lastName": "Tucker",
            "middleName": "Porter",
            "firstName": "Weeks",
            "birthDate": "11/16/1995",
            "id": 13
        },
        {
            "classYear": "Sophomore",
            "position": "P",
            "seasonStats": [
                14
            ],
            "gameStats": [
                1401,
                1402,
                1403,
                1404,
                1405,
                1406
            ],
            "jerseyNumber": 14,
            "lastName": "Duffy",
            "middleName": "Castaneda",
            "firstName": "Hartman",
            "birthDate": "3/8/1996",
            "id": 14
        },
        {
            "classYear": "Junior",
            "position": "K",
            "seasonStats": [
                15
            ],
            "gameStats": [
                1501,
                1502,
                1503,
                1504,
                1505,
                1506
            ],
            "jerseyNumber": 15,
            "lastName": "Gillespie",
            "middleName": "Sullivan",
            "firstName": "Cabrera",
            "birthDate": "10/5/1993",
            "id": 15
        },
        {
            "classYear": "Senior",
            "position": "WR",
            "seasonStats": [
                16
            ],
            "gameStats": [
                1601,
                1602,
                1603,
                1604,
                1605,
                1606
            ],
            "jerseyNumber": 16,
            "lastName": "Watts",
            "middleName": "Potts",
            "firstName": "Velez",
            "birthDate": "6/15/1993",
            "id": 16
        },
        {
            "classYear": "Freshman",
            "position": "OL",
            "seasonStats": [
                17
            ],
            "gameStats": [
                1701,
                1702,
                1703,
                1704,
                1705,
                1706
            ],
            "jerseyNumber": 17,
            "lastName": "Perry",
            "middleName": "Roth",
            "firstName": "Cantrell",
            "birthDate": "11/4/1993",
            "id": 17
        },
        {
            "classYear": "Senior",
            "position": "DB",
            "seasonStats": [
                18
            ],
            "gameStats": [
                1801,
                1802,
                1803,
                1804,
                1805,
                1806
            ],
            "jerseyNumber": 18,
            "lastName": "Campos",
            "middleName": "Velasquez",
            "firstName": "Adkins",
            "birthDate": "8/7/1993",
            "id": 18
        },
        {
            "classYear": "Sophomore",
            "position": "DL",
            "seasonStats": [
                19
            ],
            "gameStats": [
                1901,
                1902,
                1903,
                1904,
                1905,
                1906
            ],
            "jerseyNumber": 19,
            "lastName": "Pittman",
            "middleName": "Wilson",
            "firstName": "Silva",
            "birthDate": "1/12/1994",
            "id": 19
        },
        {
            "classYear": "Sophomore",
            "position": "RB",
            "seasonStats": [
                20
            ],
            "gameStats": [
                2001,
                2002,
                2003,
                2004,
                2005,
                2006
            ],
            "jerseyNumber": 20,
            "lastName": "Phillips",
            "middleName": "Wilcox",
            "firstName": "Rowland",
            "birthDate": "2/7/1995",
            "id": 20
        },
        {
            "classYear": "Junior",
            "position": "QB",
            "seasonStats": [
                21
            ],
            "gameStats": [
                2101,
                2102,
                2103,
                2104,
                2105,
                2106
            ],
            "jerseyNumber": 21,
            "lastName": "Steele",
            "middleName": "Owens",
            "firstName": "Ross",
            "birthDate": "1/23/1996",
            "id": 21
        },
        {
            "classYear": "Junior",
            "position": "OL",
            "seasonStats": [
                22
            ],
            "gameStats": [
                2201,
                2202,
                2203,
                2204,
                2205,
                2206
            ],
            "jerseyNumber": 22,
            "lastName": "Kerr",
            "middleName": "Elliott",
            "firstName": "Garcia",
            "birthDate": "11/23/1994",
            "id": 22
        },
        {
            "classYear": "Sophomore",
            "position": "DE",
            "seasonStats": [
                23
            ],
            "gameStats": [
                2301,
                2302,
                2303,
                2304,
                2305,
                2306
            ],
            "jerseyNumber": 23,
            "lastName": "Hutchinson",
            "middleName": "Bennett",
            "firstName": "Barber",
            "birthDate": "12/5/1995",
            "id": 23
        },
        {
            "classYear": "Sophomore",
            "position": "RB",
            "seasonStats": [
                24
            ],
            "gameStats": [
                2401,
                2402,
                2403,
                2404,
                2405,
                2406
            ],
            "jerseyNumber": 24,
            "lastName": "Best",
            "middleName": "Oneil",
            "firstName": "Beck",
            "birthDate": "12/28/1993",
            "id": 24
        },
        {
            "classYear": "Sophomore",
            "position": "RB",
            "seasonStats": [
                25
            ],
            "gameStats": [
                2501,
                2502,
                2503,
                2504,
                2505,
                2506
            ],
            "jerseyNumber": 25,
            "lastName": "Yates",
            "middleName": "Prince",
            "firstName": "Jackson",
            "birthDate": "1/31/1993",
            "id": 25
        },
        {
            "classYear": "Senior",
            "position": "DL",
            "seasonStats": [
                26
            ],
            "gameStats": [
                2601,
                2602,
                2603,
                2604,
                2605,
                2606
            ],
            "jerseyNumber": 26,
            "lastName": "Fry",
            "middleName": "Ramos",
            "firstName": "Guy",
            "birthDate": "4/9/1993",
            "id": 26
        },
        {
            "classYear": "Junior",
            "position": "RB",
            "seasonStats": [
                27
            ],
            "gameStats": [
                2701,
                2702,
                2703,
                2704,
                2705,
                2706
            ],
            "jerseyNumber": 27,
            "lastName": "Cain",
            "middleName": "Perez",
            "firstName": "Hunt",
            "birthDate": "12/22/1993",
            "id": 27
        },
        {
            "classYear": "Junior",
            "position": "OL",
            "seasonStats": [
                28
            ],
            "gameStats": [
                2801,
                2802,
                2803,
                2804,
                2805,
                2806
            ],
            "jerseyNumber": 28,
            "lastName": "Head",
            "middleName": "Ballard",
            "firstName": "Harris",
            "birthDate": "9/1/1993",
            "id": 28
        },
        {
            "classYear": "Junior",
            "position": "WR",
            "seasonStats": [
                29
            ],
            "gameStats": [
                2901,
                2902,
                2903,
                2904,
                2905,
                2906
            ],
            "jerseyNumber": 29,
            "lastName": "Garrett",
            "middleName": "Hicks",
            "firstName": "Klein",
            "birthDate": "2/15/1993",
            "id": 29
        },
        {
            "classYear": "Freshman",
            "position": "WR",
            "seasonStats": [
                30
            ],
            "gameStats": [
                3001,
                3002,
                3003,
                3004,
                3005,
                3006
            ],
            "jerseyNumber": 30,
            "lastName": "Mcgowan",
            "middleName": "Blair",
            "firstName": "Kelley",
            "birthDate": "8/15/1995",
            "id": 30
        },
        {
            "classYear": "Sophomore",
            "position": "OL",
            "seasonStats": [
                31
            ],
            "gameStats": [
                3101,
                3102,
                3103,
                3104,
                3105,
                3106
            ],
            "jerseyNumber": 31,
            "lastName": "Hampton",
            "middleName": "Mcintyre",
            "firstName": "Hayes",
            "birthDate": "3/6/1993",
            "id": 31
        },
        {
            "classYear": "Freshman",
            "position": "QB",
            "seasonStats": [
                32
            ],
            "gameStats": [
                3201,
                3202,
                3203,
                3204,
                3205,
                3206
            ],
            "jerseyNumber": 32,
            "lastName": "Wilson",
            "middleName": "Sherman",
            "firstName": "Terry",
            "birthDate": "8/9/1996",
            "id": 32
        },
        {
            "classYear": "Freshman",
            "position": "OL",
            "seasonStats": [
                33
            ],
            "gameStats": [
                3301,
                3302,
                3303,
                3304,
                3305,
                3306
            ],
            "jerseyNumber": 33,
            "lastName": "Long",
            "middleName": "Weiss",
            "firstName": "Oconnor",
            "birthDate": "1/16/1993",
            "id": 33
        },
        {
            "classYear": "Senior",
            "position": "LB",
            "seasonStats": [
                34
            ],
            "gameStats": [
                3401,
                3402,
                3403,
                3404,
                3405,
                3406
            ],
            "jerseyNumber": 34,
            "lastName": "Ayers",
            "middleName": "White",
            "firstName": "Camacho",
            "birthDate": "10/21/1994",
            "id": 34
        },
        {
            "classYear": "Junior",
            "position": "QB",
            "seasonStats": [
                35
            ],
            "gameStats": [
                3501,
                3502,
                3503,
                3504,
                3505,
                3506
            ],
            "jerseyNumber": 35,
            "lastName": "Mayer",
            "middleName": "Burt",
            "firstName": "Harrison",
            "birthDate": "1/8/1993",
            "id": 35
        },
        {
            "classYear": "Junior",
            "position": "OL",
            "seasonStats": [
                36
            ],
            "gameStats": [
                3601,
                3602,
                3603,
                3604,
                3605,
                3606
            ],
            "jerseyNumber": 36,
            "lastName": "Little",
            "middleName": "Hoffman",
            "firstName": "Gilmore",
            "birthDate": "6/8/1996",
            "id": 36
        },
        {
            "classYear": "Sophomore",
            "position": "QB",
            "seasonStats": [
                37
            ],
            "gameStats": [
                3701,
                3702,
                3703,
                3704,
                3705,
                3706
            ],
            "jerseyNumber": 37,
            "lastName": "Lloyd",
            "middleName": "Willis",
            "firstName": "Day",
            "birthDate": "5/18/1993",
            "id": 37
        },
        {
            "classYear": "Freshman",
            "position": "QB",
            "seasonStats": [
                38
            ],
            "gameStats": [
                3801,
                3802,
                3803,
                3804,
                3805,
                3806
            ],
            "jerseyNumber": 38,
            "lastName": "Wiggins",
            "middleName": "Fuller",
            "firstName": "Shepherd",
            "birthDate": "5/22/1996",
            "id": 38
        },
        {
            "classYear": "Sophomore",
            "position": "RB",
            "seasonStats": [
                39
            ],
            "gameStats": [
                3901,
                3902,
                3903,
                3904,
                3905,
                3906
            ],
            "jerseyNumber": 39,
            "lastName": "Banks",
            "middleName": "Cohen",
            "firstName": "Rogers",
            "birthDate": "6/5/1994",
            "id": 39
        },
        {
            "classYear": "Senior",
            "position": "TE",
            "seasonStats": [
                40
            ],
            "gameStats": [
                4001,
                4002,
                4003,
                4004,
                4005,
                4006
            ],
            "jerseyNumber": 40,
            "lastName": "Chapman",
            "middleName": "Bowers",
            "firstName": "Clayton",
            "birthDate": "7/5/1994",
            "id": 40
        },
        {
            "classYear": "Senior",
            "position": "QB",
            "seasonStats": [
                41
            ],
            "gameStats": [
                4101,
                4102,
                4103,
                4104,
                4105,
                4106
            ],
            "jerseyNumber": 41,
            "lastName": "Williams",
            "middleName": "Riggs",
            "firstName": "Ford",
            "birthDate": "5/29/1993",
            "id": 41
        },
        {
            "classYear": "Freshman",
            "position": "RB",
            "seasonStats": [
                42
            ],
            "gameStats": [
                4201,
                4202,
                4203,
                4204,
                4205,
                4206
            ],
            "jerseyNumber": 42,
            "lastName": "Greer",
            "middleName": "Raymond",
            "firstName": "Jarvis",
            "birthDate": "9/9/1993",
            "id": 42
        },
        {
            "classYear": "Junior",
            "position": "DE",
            "seasonStats": [
                43
            ],
            "gameStats": [
                4301,
                4302,
                4303,
                4304,
                4305,
                4306
            ],
            "jerseyNumber": 43,
            "lastName": "Albert",
            "middleName": "Anthony",
            "firstName": "Palmer",
            "birthDate": "6/26/1993",
            "id": 43
        },
        {
            "classYear": "Sophomore",
            "position": "RB",
            "seasonStats": [
                44
            ],
            "gameStats": [
                4401,
                4402,
                4403,
                4404,
                4405,
                4406
            ],
            "jerseyNumber": 44,
            "lastName": "Peterson",
            "middleName": "Hernandez",
            "firstName": "Rush",
            "birthDate": "12/24/1996",
            "id": 44
        },
        {
            "classYear": "Freshman",
            "position": "WR",
            "seasonStats": [
                45
            ],
            "gameStats": [
                4501,
                4502,
                4503,
                4504,
                4505,
                4506
            ],
            "jerseyNumber": 45,
            "lastName": "Clemons",
            "middleName": "Erickson",
            "firstName": "Mcgowan",
            "birthDate": "4/25/1995",
            "id": 45
        },
        {
            "classYear": "Junior",
            "position": "OL",
            "seasonStats": [
                46
            ],
            "gameStats": [
                4601,
                4602,
                4603,
                4604,
                4605,
                4606
            ],
            "jerseyNumber": 46,
            "lastName": "Stone",
            "middleName": "Valdez",
            "firstName": "Warren",
            "birthDate": "5/7/1995",
            "id": 46
        },
        {
            "classYear": "Freshman",
            "position": "QB",
            "seasonStats": [
                47
            ],
            "gameStats": [
                4701,
                4702,
                4703,
                4704,
                4705,
                4706
            ],
            "jerseyNumber": 47,
            "lastName": "Knapp",
            "middleName": "Mccray",
            "firstName": "Tyson",
            "birthDate": "7/12/1996",
            "id": 47
        },
        {
            "classYear": "Senior",
            "position": "RB",
            "seasonStats": [
                48
            ],
            "gameStats": [
                4801,
                4802,
                4803,
                4804,
                4805,
                4806
            ],
            "jerseyNumber": 48,
            "lastName": "Huber",
            "middleName": "Whitney",
            "firstName": "Wooten",
            "birthDate": "10/25/1995",
            "id": 48
        },
        {
            "classYear": "Senior",
            "position": "DL",
            "seasonStats": [
                49
            ],
            "gameStats": [
                4901,
                4902,
                4903,
                4904,
                4905,
                4906
            ],
            "jerseyNumber": 49,
            "lastName": "Phelps",
            "middleName": "Navarro",
            "firstName": "Underwood",
            "birthDate": "10/3/1995",
            "id": 49
        },
        {
            "classYear": "Senior",
            "position": "K",
            "seasonStats": [
                50
            ],
            "gameStats": [
                5001,
                5002,
                5003,
                5004,
                5005,
                5006
            ],
            "jerseyNumber": 50,
            "lastName": "Harris",
            "middleName": "Giles",
            "firstName": "Hendrix",
            "birthDate": "4/18/1994",
            "id": 50
        },
        {
            "classYear": "Senior",
            "position": "DB",
            "seasonStats": [
                51
            ],
            "gameStats": [
                5101,
                5102,
                5103,
                5104,
                5105,
                5106
            ],
            "jerseyNumber": 51,
            "lastName": "Conner",
            "middleName": "Mckinney",
            "firstName": "Malone",
            "birthDate": "12/28/1996",
            "id": 51
        },
        {
            "classYear": "Junior",
            "position": "K",
            "seasonStats": [
                52
            ],
            "gameStats": [
                5201,
                5202,
                5203,
                5204,
                5205,
                5206
            ],
            "jerseyNumber": 52,
            "lastName": "Guerra",
            "middleName": "Hewitt",
            "firstName": "Harmon",
            "birthDate": "2/27/1994",
            "id": 52
        },
        {
            "classYear": "Freshman",
            "position": "P",
            "seasonStats": [
                53
            ],
            "gameStats": [
                5301,
                5302,
                5303,
                5304,
                5305,
                5306
            ],
            "jerseyNumber": 53,
            "lastName": "Stark",
            "middleName": "Holland",
            "firstName": "Lott",
            "birthDate": "11/19/1995",
            "id": 53
        },
        {
            "classYear": "Sophomore",
            "position": "K",
            "seasonStats": [
                54
            ],
            "gameStats": [
                5401,
                5402,
                5403,
                5404,
                5405,
                5406
            ],
            "jerseyNumber": 54,
            "lastName": "Barron",
            "middleName": "Solomon",
            "firstName": "Ratliff",
            "birthDate": "5/12/1993",
            "id": 54
        },
        {
            "classYear": "Sophomore",
            "position": "DE",
            "seasonStats": [
                55
            ],
            "gameStats": [
                5501,
                5502,
                5503,
                5504,
                5505,
                5506
            ],
            "jerseyNumber": 55,
            "lastName": "Church",
            "middleName": "Leon",
            "firstName": "Caldwell",
            "birthDate": "4/19/1996",
            "id": 55
        },
        {
            "classYear": "Junior",
            "position": "QB",
            "seasonStats": [
                56
            ],
            "gameStats": [
                5601,
                5602,
                5603,
                5604,
                5605,
                5606
            ],
            "jerseyNumber": 56,
            "lastName": "Logan",
            "middleName": "Austin",
            "firstName": "Finley",
            "birthDate": "1/5/1995",
            "id": 56
        },
        {
            "classYear": "Junior",
            "position": "RB",
            "seasonStats": [
                57
            ],
            "gameStats": [
                5701,
                5702,
                5703,
                5704,
                5705,
                5706
            ],
            "jerseyNumber": 57,
            "lastName": "Luna",
            "middleName": "Conner",
            "firstName": "Trujillo",
            "birthDate": "12/14/1993",
            "id": 57
        },
        {
            "classYear": "Senior",
            "position": "K",
            "seasonStats": [
                58
            ],
            "gameStats": [
                5801,
                5802,
                5803,
                5804,
                5805,
                5806
            ],
            "jerseyNumber": 58,
            "lastName": "Sellers",
            "middleName": "Durham",
            "firstName": "Sparks",
            "birthDate": "6/2/1996",
            "id": 58
        },
        {
            "classYear": "Junior",
            "position": "K",
            "seasonStats": [
                59
            ],
            "gameStats": [
                5901,
                5902,
                5903,
                5904,
                5905,
                5906
            ],
            "jerseyNumber": 59,
            "lastName": "Baird",
            "middleName": "Jimenez",
            "firstName": "Bonner",
            "birthDate": "3/9/1993",
            "id": 59
        },
        {
            "classYear": "Senior",
            "position": "K",
            "seasonStats": [
                60
            ],
            "gameStats": [
                6001,
                6002,
                6003,
                6004,
                6005,
                6006
            ],
            "jerseyNumber": 60,
            "lastName": "Baxter",
            "middleName": "Carter",
            "firstName": "Hoover",
            "birthDate": "5/23/1994",
            "id": 60
        },
        {
            "classYear": "Sophomore",
            "position": "DE",
            "seasonStats": [
                61
            ],
            "gameStats": [
                6101,
                6102,
                6103,
                6104,
                6105,
                6106
            ],
            "jerseyNumber": 61,
            "lastName": "Bartlett",
            "middleName": "Mcclain",
            "firstName": "Petty",
            "birthDate": "3/14/1993",
            "id": 61
        },
        {
            "classYear": "Sophomore",
            "position": "TE",
            "seasonStats": [
                62
            ],
            "gameStats": [
                6201,
                6202,
                6203,
                6204,
                6205,
                6206
            ],
            "jerseyNumber": 62,
            "lastName": "Tyler",
            "middleName": "Mercer",
            "firstName": "Valenzuela",
            "birthDate": "4/16/1996",
            "id": 62
        },
        {
            "classYear": "Sophomore",
            "position": "DB",
            "seasonStats": [
                63
            ],
            "gameStats": [
                6301,
                6302,
                6303,
                6304,
                6305,
                6306
            ],
            "jerseyNumber": 63,
            "lastName": "Navarro",
            "middleName": "Ray",
            "firstName": "Lindsey",
            "birthDate": "6/12/1994",
            "id": 63
        },
        {
            "classYear": "Freshman",
            "position": "K",
            "seasonStats": [
                64
            ],
            "gameStats": [
                6401,
                6402,
                6403,
                6404,
                6405,
                6406
            ],
            "jerseyNumber": 64,
            "lastName": "Gentry",
            "middleName": "Sharpe",
            "firstName": "Joyce",
            "birthDate": "4/8/1995",
            "id": 64
        },
        {
            "classYear": "Sophomore",
            "position": "WR",
            "seasonStats": [
                65
            ],
            "gameStats": [
                6501,
                6502,
                6503,
                6504,
                6505,
                6506
            ],
            "jerseyNumber": 65,
            "lastName": "Bullock",
            "middleName": "Osborne",
            "firstName": "Sharp",
            "birthDate": "5/23/1996",
            "id": 65
        },
        {
            "classYear": "Sophomore",
            "position": "LB",
            "seasonStats": [
                66
            ],
            "gameStats": [
                6601,
                6602,
                6603,
                6604,
                6605,
                6606
            ],
            "jerseyNumber": 66,
            "lastName": "Combs",
            "middleName": "Christensen",
            "firstName": "Webster",
            "birthDate": "4/9/1995",
            "id": 66
        },
        {
            "classYear": "Freshman",
            "position": "OL",
            "seasonStats": [
                67
            ],
            "gameStats": [
                6701,
                6702,
                6703,
                6704,
                6705,
                6706
            ],
            "jerseyNumber": 67,
            "lastName": "Chase",
            "middleName": "Campos",
            "firstName": "Aguilar",
            "birthDate": "1/19/1996",
            "id": 67
        },
        {
            "classYear": "Freshman",
            "position": "DB",
            "seasonStats": [
                68
            ],
            "gameStats": [
                6801,
                6802,
                6803,
                6804,
                6805,
                6806
            ],
            "jerseyNumber": 68,
            "lastName": "Beach",
            "middleName": "Frank",
            "firstName": "Beard",
            "birthDate": "3/7/1993",
            "id": 68
        },
        {
            "classYear": "Senior",
            "position": "LB",
            "seasonStats": [
                69
            ],
            "gameStats": [
                6901,
                6902,
                6903,
                6904,
                6905,
                6906
            ],
            "jerseyNumber": 69,
            "lastName": "Valentine",
            "middleName": "Santiago",
            "firstName": "Lynch",
            "birthDate": "8/13/1993",
            "id": 69
        },
        {
            "classYear": "Freshman",
            "position": "OL",
            "seasonStats": [
                70
            ],
            "gameStats": [
                7001,
                7002,
                7003,
                7004,
                7005,
                7006
            ],
            "jerseyNumber": 70,
            "lastName": "Crane",
            "middleName": "Henderson",
            "firstName": "Hughes",
            "birthDate": "8/27/1993",
            "id": 70
        },
        {
            "classYear": "Freshman",
            "position": "QB",
            "seasonStats": [
                71
            ],
            "gameStats": [
                7101,
                7102,
                7103,
                7104,
                7105,
                7106
            ],
            "jerseyNumber": 71,
            "lastName": "Burt",
            "middleName": "Small",
            "firstName": "Hickman",
            "birthDate": "5/22/1995",
            "id": 71
        },
        {
            "classYear": "Junior",
            "position": "OL",
            "seasonStats": [
                72
            ],
            "gameStats": [
                7201,
                7202,
                7203,
                7204,
                7205,
                7206
            ],
            "jerseyNumber": 72,
            "lastName": "Smith",
            "middleName": "Mueller",
            "firstName": "Dejesus",
            "birthDate": "2/13/1996",
            "id": 72
        },
        {
            "classYear": "Senior",
            "position": "K",
            "seasonStats": [
                73
            ],
            "gameStats": [
                7301,
                7302,
                7303,
                7304,
                7305,
                7306
            ],
            "jerseyNumber": 73,
            "lastName": "Palmer",
            "middleName": "Gamble",
            "firstName": "Garrett",
            "birthDate": "1/5/1993",
            "id": 73
        },
        {
            "classYear": "Freshman",
            "position": "DB",
            "seasonStats": [
                74
            ],
            "gameStats": [
                7401,
                7402,
                7403,
                7404,
                7405,
                7406
            ],
            "jerseyNumber": 74,
            "lastName": "Burris",
            "middleName": "Davenport",
            "firstName": "Martinez",
            "birthDate": "8/25/1995",
            "id": 74
        },
        {
            "classYear": "Junior",
            "position": "DE",
            "seasonStats": [
                75
            ],
            "gameStats": [
                7501,
                7502,
                7503,
                7504,
                7505,
                7506
            ],
            "jerseyNumber": 75,
            "lastName": "Mcgee",
            "middleName": "Shields",
            "firstName": "Wallace",
            "birthDate": "11/15/1995",
            "id": 75
        },
        {
            "classYear": "Junior",
            "position": "DL",
            "seasonStats": [
                76
            ],
            "gameStats": [
                7601,
                7602,
                7603,
                7604,
                7605,
                7606
            ],
            "jerseyNumber": 76,
            "lastName": "Henderson",
            "middleName": "Rutledge",
            "firstName": "Whitehead",
            "birthDate": "5/31/1995",
            "id": 76
        },
        {
            "classYear": "Sophomore",
            "position": "DL",
            "seasonStats": [
                77
            ],
            "gameStats": [
                7701,
                7702,
                7703,
                7704,
                7705,
                7706
            ],
            "jerseyNumber": 77,
            "lastName": "Stafford",
            "middleName": "Monroe",
            "firstName": "Morris",
            "birthDate": "1/22/1994",
            "id": 77
        },
        {
            "classYear": "Junior",
            "position": "DB",
            "seasonStats": [
                78
            ],
            "gameStats": [
                7801,
                7802,
                7803,
                7804,
                7805,
                7806
            ],
            "jerseyNumber": 78,
            "lastName": "Holden",
            "middleName": "Oneill",
            "firstName": "Atkins",
            "birthDate": "11/7/1994",
            "id": 78
        },
        {
            "classYear": "Sophomore",
            "position": "DB",
            "seasonStats": [
                79
            ],
            "gameStats": [
                7901,
                7902,
                7903,
                7904,
                7905,
                7906
            ],
            "jerseyNumber": 79,
            "lastName": "Gay",
            "middleName": "Dudley",
            "firstName": "Donaldson",
            "birthDate": "6/7/1993",
            "id": 79
        },
        {
            "classYear": "Sophomore",
            "position": "OL",
            "seasonStats": [
                80
            ],
            "gameStats": [
                8001,
                8002,
                8003,
                8004,
                8005,
                8006
            ],
            "jerseyNumber": 80,
            "lastName": "Shaw",
            "middleName": "Peck",
            "firstName": "Ortiz",
            "birthDate": "4/25/1996",
            "id": 80
        },
        {
            "classYear": "Senior",
            "position": "LB",
            "seasonStats": [
                81
            ],
            "gameStats": [
                8101,
                8102,
                8103,
                8104,
                8105,
                8106
            ],
            "jerseyNumber": 81,
            "lastName": "Alvarez",
            "middleName": "Stokes",
            "firstName": "Thompson",
            "birthDate": "6/20/1993",
            "id": 81
        },
        {
            "classYear": "Junior",
            "position": "TE",
            "seasonStats": [
                82
            ],
            "gameStats": [
                8201,
                8202,
                8203,
                8204,
                8205,
                8206
            ],
            "jerseyNumber": 82,
            "lastName": "Bush",
            "middleName": "Park",
            "firstName": "Humphrey",
            "birthDate": "11/18/1995",
            "id": 82
        },
        {
            "classYear": "Senior",
            "position": "DB",
            "seasonStats": [
                83
            ],
            "gameStats": [
                8301,
                8302,
                8303,
                8304,
                8305,
                8306
            ],
            "jerseyNumber": 83,
            "lastName": "Jensen",
            "middleName": "Mcleod",
            "firstName": "Conrad",
            "birthDate": "12/3/1993",
            "id": 83
        },
        {
            "classYear": "Junior",
            "position": "DE",
            "seasonStats": [
                84
            ],
            "gameStats": [
                8401,
                8402,
                8403,
                8404,
                8405,
                8406
            ],
            "jerseyNumber": 84,
            "lastName": "Estrada",
            "middleName": "Murphy",
            "firstName": "Rowe",
            "birthDate": "10/7/1996",
            "id": 84
        },
        {
            "classYear": "Senior",
            "position": "DB",
            "seasonStats": [
                85
            ],
            "gameStats": [
                8501,
                8502,
                8503,
                8504,
                8505,
                8506
            ],
            "jerseyNumber": 85,
            "lastName": "Shields",
            "middleName": "Mccarty",
            "firstName": "Singleton",
            "birthDate": "6/11/1994",
            "id": 85
        },
        {
            "classYear": "Senior",
            "position": "WR",
            "seasonStats": [
                86
            ],
            "gameStats": [
                8601,
                8602,
                8603,
                8604,
                8605,
                8606
            ],
            "jerseyNumber": 86,
            "lastName": "Harmon",
            "middleName": "Curtis",
            "firstName": "Campbell",
            "birthDate": "9/27/1993",
            "id": 86
        },
        {
            "classYear": "Freshman",
            "position": "P",
            "seasonStats": [
                87
            ],
            "gameStats": [
                8701,
                8702,
                8703,
                8704,
                8705,
                8706
            ],
            "jerseyNumber": 87,
            "lastName": "Ferrell",
            "middleName": "Walters",
            "firstName": "Baker",
            "birthDate": "11/29/1994",
            "id": 87
        },
        {
            "classYear": "Senior",
            "position": "TE",
            "seasonStats": [
                88
            ],
            "gameStats": [
                8801,
                8802,
                8803,
                8804,
                8805,
                8806
            ],
            "jerseyNumber": 88,
            "lastName": "Berger",
            "middleName": "Huff",
            "firstName": "Lowery",
            "birthDate": "12/5/1993",
            "id": 88
        },
        {
            "classYear": "Freshman",
            "position": "RB",
            "seasonStats": [
                89
            ],
            "gameStats": [
                8901,
                8902,
                8903,
                8904,
                8905,
                8906
            ],
            "jerseyNumber": 89,
            "lastName": "Padilla",
            "middleName": "Perry",
            "firstName": "Donovan",
            "birthDate": "2/6/1994",
            "id": 89
        },
        {
            "classYear": "Freshman",
            "position": "LB",
            "seasonStats": [
                90
            ],
            "gameStats": [
                9001,
                9002,
                9003,
                9004,
                9005,
                9006
            ],
            "jerseyNumber": 90,
            "lastName": "Clayton",
            "middleName": "Morrison",
            "firstName": "Diaz",
            "birthDate": "1/25/1994",
            "id": 90
        },
        {
            "classYear": "Freshman",
            "position": "WR",
            "seasonStats": [
                91
            ],
            "gameStats": [
                9101,
                9102,
                9103,
                9104,
                9105,
                9106
            ],
            "jerseyNumber": 91,
            "lastName": "Schwartz",
            "middleName": "Schneider",
            "firstName": "Burke",
            "birthDate": "8/6/1993",
            "id": 91
        },
        {
            "classYear": "Sophomore",
            "position": "LB",
            "seasonStats": [
                92
            ],
            "gameStats": [
                9201,
                9202,
                9203,
                9204,
                9205,
                9206
            ],
            "jerseyNumber": 92,
            "lastName": "Benton",
            "middleName": "Booker",
            "firstName": "Larsen",
            "birthDate": "7/11/1996",
            "id": 92
        },
        {
            "classYear": "Sophomore",
            "position": "P",
            "seasonStats": [
                93
            ],
            "gameStats": [
                9301,
                9302,
                9303,
                9304,
                9305,
                9306
            ],
            "jerseyNumber": 93,
            "lastName": "Acosta",
            "middleName": "Forbes",
            "firstName": "Salazar",
            "birthDate": "4/25/1996",
            "id": 93
        },
        {
            "classYear": "Freshman",
            "position": "P",
            "seasonStats": [
                94
            ],
            "gameStats": [
                9401,
                9402,
                9403,
                9404,
                9405,
                9406
            ],
            "jerseyNumber": 94,
            "lastName": "Pope",
            "middleName": "Little",
            "firstName": "Massey",
            "birthDate": "4/18/1994",
            "id": 94
        },
        {
            "classYear": "Senior",
            "position": "QB",
            "seasonStats": [
                95
            ],
            "gameStats": [
                9501,
                9502,
                9503,
                9504,
                9505,
                9506
            ],
            "jerseyNumber": 95,
            "lastName": "Soto",
            "middleName": "Buck",
            "firstName": "Sandoval",
            "birthDate": "4/5/1995",
            "id": 95
        },
        {
            "classYear": "Senior",
            "position": "LB",
            "seasonStats": [
                96
            ],
            "gameStats": [
                9601,
                9602,
                9603,
                9604,
                9605,
                9606
            ],
            "jerseyNumber": 96,
            "lastName": "Mccarthy",
            "middleName": "Bright",
            "firstName": "Barker",
            "birthDate": "12/9/1994",
            "id": 96
        },
        {
            "classYear": "Senior",
            "position": "WR",
            "seasonStats": [
                97
            ],
            "gameStats": [
                9701,
                9702,
                9703,
                9704,
                9705,
                9706
            ],
            "jerseyNumber": 97,
            "lastName": "England",
            "middleName": "George",
            "firstName": "Carlson",
            "birthDate": "10/22/1994",
            "id": 97
        },
        {
            "classYear": "Senior",
            "position": "DE",
            "seasonStats": [
                98
            ],
            "gameStats": [
                9801,
                9802,
                9803,
                9804,
                9805,
                9806
            ],
            "jerseyNumber": 98,
            "lastName": "Stanton",
            "middleName": "Stout",
            "firstName": "Robbins",
            "birthDate": "8/10/1996",
            "id": 98
        },
        {
            "classYear": "Senior",
            "position": "RB",
            "seasonStats": [
                99
            ],
            "gameStats": [
                9901,
                9902,
                9903,
                9904,
                9905,
                9906
            ],
            "jerseyNumber": 99,
            "lastName": "Travis",
            "middleName": "Sanford",
            "firstName": "Lloyd",
            "birthDate": "3/5/1994",
            "id": 99
        },
        {
            "classYear": "Sophomore",
            "position": "LB",
            "seasonStats": [
                100
            ],
            "gameStats": [
                10001,
                10002,
                10003,
                10004,
                10005,
                10006
            ],
            "jerseyNumber": 100,
            "lastName": "Mcclain",
            "middleName": "Cherry",
            "firstName": "Avery",
            "birthDate": "4/18/1995",
            "id": 100
        }
    ]
});

export default Player;
