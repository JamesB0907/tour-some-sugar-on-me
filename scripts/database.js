const database = {

    venues: [{
        id:1,
        name: "Ernie's Wreck Room",
        address: "1600 Western Ave",
        sqFeet: 600,
        maxOccupancy: 100
    }, {
        id:2,
        name: "The Tinman",
        address: "203 Lark Street, Suite Z",
        sqFeet: 400,
        maxOccupancy: 59
    }, {
        id:3,
        name: "The Avant Guardsman",
        address: "88 Hilltop Row",
        sqFeet: 1680,
        maxOccupancy: 280
    }, {
        id:4,
        name: "MAKESOMENOISE",
        address: "445 Baker Parkway",
        sqFeet: 750,
        maxOccupancy: 125
    }, {
        id:5,
        name: "#Mood",
        address: "5296 Weaver Blvd",
        sqFeet: 330,
        maxOccupancy: 55 
    }, {
        id:6,
        name: "Sectional Tension Chill Lounge",
        address: "20 College Rd",
        sqFeet: 150,
        maxOccupancy:25 
    }],

    bands: [{
        id:1,
        name: "Brash Tacks",
        memberCount: 3,
        genre: "Gutterpunk",
        yearFormed: 1999
    }, {
        id:2,
        name: "The Planar Shifters",
        memberCount: 6,
        genre: "Indie",
        yearFormed: 2012
    }, {
        id:3,
        name: "CORPSE CORP",
        memberCount: 4,
        genre: "Death Metal",
        yearFormed: 1995
    }, {
        id:4,
        name: "Polar Vertices",
        memberCount: 3,
        genre: "Shoegaze",
        yearFormed: 2010
    }, {
        id:5,
        name: "Equi",
        memberCount: 3,
        genre: "Progressive",
        yearFormed: 2016
    }, {
        id:6,
        name: "Port Glory",
        memberCount: 4,
        genre: "Pop Punk",
        yearFormed: 1999
    }, {
        id:7,
        name: "The Mobster Manual",
        memberCount: 2,
        genre: "Rap/Drill",
        yearFormed: 2017
    }, {
        id:8,
        name: "TrustFall",
        memberCount: 3,
        genre: "Punk",
        yearFormed: 2004
    }, {
        id:9,
        name: "Sonic Rings",
        memberCount: 3,
        genre: "Synthwave",
        yearFormed: 2019
    }, {
        id:10,
        name: "Ex Virum",
        memberCount: 8,
        genre: "Neoclassical Metal",
        yearFormed: 1989
    }, {
        id:11,
        name: "Gator Pit",
        memberCount: 3,
        genre: "Thrash",
        yearFormed: 1993
    }],

    bookings:[
        {id:1, venueId:1,bandId:1, date: "March 20, 2023"},
        {id:2, venueId:1,bandId:2, date: "March 20, 2023"},
        {id:3, venueId:2,bandId:3, date: "March 21, 2023"},
        {id:4, venueId:2,bandId:4, date: "March 21, 2023"},
        {id:5, venueId:3,bandId:5, date: "March 22, 2023"},
        {id:6, venueId:3,bandId:6, date: "March 22, 2023"},
        {id:7, venueId:4,bandId:7, date: "March 23, 2023"},
        {id:8, venueId:4,bandId:8, date: "March 23, 2023"},
        {id:9, venueId:5,bandId:9, date: "March 24, 2023"},
        {id:10, venueId:5,bandId:10, date: "March 24, 2023"},
        {id:11, venueId:6,bandId:11, date: "March 25, 2023"},
     ]
}
export const getVenues = () => {
    return database.venues.map(venue => ({...venue}))
}

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}
