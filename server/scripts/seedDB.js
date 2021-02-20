const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/discgolftime");

const courseSeed =[
  {
    name: "Apex Nature Park",
    address: "2600 Evans Rd, Apex, NC",
    lat: 35.714853,
    lng: -78.905551,
    difficulty: "beginner"
  },
  {
    name: "Middle Creek Disc Golf Course",
    address: "4052 Optimist Farm Rd, Apex, NC",
    lat: 35.662956,
    lng: -78.759964,
    difficulty: "beginner",
  },
  {
    name: "Richmond Hill Disc Golf Course",
    address: "300 Richmond Hill Dr, Asheville, NC",
    lat: 35.616749,
    lng: -82.5867,
    difficulty: "beginner"
  },
  {
    name: "Ayden District Disc Golf Course",
    address: "3809 Jolly Rd, Ayden, NC",
    lat: 35.483406,
    lng: -77.429794,
    difficulty: "beginner"
  },
  {
    name: "Beech Mtn Resort Disc Golf Course",
    address: "1007 Beech Mountain Pkwy, Beech Mountain, NC",
    lat: 36.197731,
    lng: -81.878113,
    difficulty: "beginner"
  },
  {
    name: "Black Mountain Disc Golf Course",
    address: "10 Veterans Park Dr, Black Mountain, NC",
    lat: 35.607491,
    lng: -82.338516,
    difficulty: "beginner"
  },
  {
    name: "Owen High Disc Golf Course",
    address: "155 Lake Eden Road, Black Mountain, NC",
    lat: 35.618847,
    lng: -82.370277,
   difficulty: "beginner"
  },
  {
    name: "Blue Ridge Assembly Disc Golf Course",
    address: "257 Blue Ridge Assembly Dr, Black Mountain, NC",
    lat: 35.596184,
    lng: -82.338776,
    difficulty: "beginner"
  },
  {
    name: "Cougar Country Disc Golf Course",
    address: "1 Leeds Rd, Boiling Spring Lakes, NC",
    lat: 34.021436,
    lng: -78.063421,
    difficulty: "beginner",
  },
  {
    name: "Trinity Disc Golf",
    address: "811 Harper Ave, Carolina Beach, NC",
    lat: 34.037121,
    lng: -77.898621,
    difficulty: "beginner"
  },
  {
    name: "New Hope Disc Golf",
    address: "2584 New Hope Church Rd, Cary, NC",
    lat: 35.816319,
    lng: -78.927971,
    difficulty: "beginner"
  },
  {
    name: "Castle Hayne Disc Golf Course",
    address: "4700 Old Ave, Castle Hayne, NC",
    lat: 34.336292,
    lng: -77.902512,
    difficulty: "beginner"
  },
  {
    name: "UNC Disc Golf Course",
    address: "910 Raleigh Rd, Chapel Hill, NC",
    lat: 35.909294,
    lng: -79.029892,
    difficulty: "beginner"
  },
  {
    name: "Rennaissance Disc Golf Park",
    address: "1200 W Tyvola Rd, Charlotte, NC",
    lat: 35.17252,
    lng: -80.907608,
    difficulty: "beginner",
  },
  {
    name: "Reedy Creek Park Disc Golf Course",
    address: "2900 Rocky River Rd, Charlotte, NC",
    lat: 35.276157,
    lng: -80.717941,
    difficulty: "beginner"
  },
  {
    name: "Sugar Creek Park Disc Golf Course",
    address: "939 W Sugar Creek Rd, Charlotte, NC",
    lat: 35.271847,
    lng: -80.793976,
    difficulty: "beginner"
  },
  {
    name: "Hornets Nest Disc Golf Course",
    address: "6230 Beatties Ford Rd, Charlotte, NC",
    lat: 35.316402,
    lng: -80.864632,
    difficulty: "beginner"
  },
  {
    name: "Kentwood Disc Golf Course",
    address: "4531 Kaplan Dr, Raleigh, NC",
    lat: 35.77692,
    lng: -78.695915,
    difficulty: "beginner"
  },
  {
    name: "East Clayton Disc Golf Course",
    address: "715 Amelia Church Rd, Clayton, NC",
    lat: 35.650421,
    lng: -78.483658,
    difficulty: "beginner"
  },
  {
    name: "Valley Springs Park",
    address: "3805 Valley Springs Rd, Durham, NC",
    lat: 36.053101,
    lng: -78.957781,
    difficulty: "beginner"
  },
  {
    name: "Cornwallis Road Park",
    address: "2830 Wade Rd, Durham, NC",
    lat: 35.978695,
    lng: -78.952525,
    difficulty: "beginner"
  },
  {
    name: "Bethesda Park",
    address: "1814 Stage Rd, Durham, NC",
    lat: 35.945267,
    lng: -78.845103,
    difficulty: "beginner"
  },
  {
    name: "Leigh Farm Park",
    address: "370 Leigh Farm Rd, Durham, NC",
    lat: 35.922794,
    lng: -78.983092,
    difficulty: "beginner"
  },
  {
    name: "Knobbs Creek Recreation Center",
    address: "200 E Ward St, Elizabeth City, NC",
    lat: 36.310434,
    lng: -76.217711,
    difficulty: "beginner"
  },
  {
    name: "Surf City Disc Golf Course",
    address: "102 H2O Place, Surf City, NC",
    lat: 34.414398,
    lng: -77.641759,
    difficulty: "beginner"
  }
];

db.Course.remove({})
    .then(() => db.Course.collection.insertMany(courseSeed))
    .then(data => {
        console.log(data.result.n + "records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
