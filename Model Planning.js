{
    teams = [];                         // system-wide GoTeam[]
    organizations = [];                 // system-wide Organization[]
    events = [];                        // system-wide GoEvents[]

    GoTeam = {                            // system-wide/public data for teams
        name : String,
        shortName : String,
        mascot : String
    };

    GoEvent = {                         // system-wide/public data for GoEvents
        date : DateTime,
        season : short,
        homeTeam : Team,
        awayTeam : Team
    };

    GoPlayerProfile = {                   // system-wide/public data for players
        name : String
    };

    GoCoachProfile = {                    // system-wide/public data for coaches
        name : String
    };

    Organization = {                    // private data for organization
        team : GoTeam,
        currentScheduleOfEvents : [],   // GoEvent[]
        currentRosterOfPlayers : [],    // OrgPlayer[]
        positionGroups : [],            // OrgPositionGroup[]
        positions : [],                 // OrgPosition[]
        users : [],                     // OrgUser[]
        roles : []                      // OrgRole[]
    };

    OrgPlayer = {                       // private data for player per organization
        player : GoPlayerProfile,
        positions : []                  // OrgPosition[]
    };

    OrgEvent = {                        // private data for GoEvents per organization
        event : GoEvent,
        isHome : boolean
    };

    OrgPositionGroup = {                // private data for positionGroup per organization
        name : String,
        platoon : String,
        users : [],                     // OrgUser[]
        player : []                     // OrgPlayerDepth[]
    };

    OrgPosition = {                     // private data for positions per organization
        name : String
    };

    OrgUser = {                         // private data for users per organization
        name : String,
        profile : GoCoachProfile,
        positionGroups : [],            // OrgPositionGroup[]
        roles : []                      // OrgRole[]
    };

    OrgRole = {                         // private data for roles per organization
        name : String,
        permissions : []                // Permission[]
    };
}
