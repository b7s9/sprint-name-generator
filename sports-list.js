let sportsList = [
  "Artistic cycling",
  "BMX",
  "Cycle ball",
  "Cycle polo",
  "Cycle speedway",
  "Cyclo-cross",
  "Dirt jumping",
  "Downhill mountain biking",
  "Freestyle BMX",
  "Hardcourt Bike Polo",
  "Mountain biking",
  "Road bicycle racing",
  "Track cycling",
  "Underwater cycling",
  "Archery",
  "Skateboarding",
  "Scootering",
  "Skysurfing",
  "Streetluge",
  "Snowboarding",
  "Surfing",
  "Wakeboarding",
  "Paddleboarding",
  "Aerobatics",
  "Air racing",
  "Cluster ballooning",
  "Hopper ballooning",
  "Gliding",
  "Hang gliding",
  "Parachuting",
  "Banzai skydiving",
  "BASE jumping",
  "Skysurfing",
  "Wingsuit flying",
  "Paragliding",
  "Ultralight aviation",
  "Breakdancing",
  "Competitive dancing",
  "Cheerleading",
  "Dancesport",
  "Dragon dance and Lion dance",
  "Figure skating",
  "Freerunning",
  "Gymnastics",
  "High kick",
  "Parkour",
  "Pole sports",
  "Stunt",
  "Trampolining",
  "Color guard",
  "Ice climbing",
  "Mixed climbing",
  "Mountaineering",
  "Rock climbing",
  "Judo",
  "Sumo",
  "Mixed Martial Arts",
  "Greco-Roman Wrestling",
  "Freestyle Wrestling",
  "Boxing",
  "Karate",
  "Kickboxing",
  "Capoeira",
  "Fencing",
  "Sword Fighting",
  "Disc Golf",
  "Frisbee",
  "Ice Hockey",
  "Curling",
  "Figure skating",
  "Speed skating",
  "Biathlon",
  "Triathlon",
  "Geocaching",
  "Orienteering",
  "Parkour",
  "Freerunning",
  "5K run",
  "10K run",
  "Cross-country running",
  "Half marathon",
  "Marathon",
  "Road running",
  "Ekiden",
  "Tower running",
  "Ultramarathon",
  "Snowshoe running",
  "Fell running",
  "Trail running",
  "Mountain running",
  "Skyrunning",
  "Hurdles",
  "Dinghy sailing",
  "Ice yachting",
  "Kiteboarding",
  "Land sailing",
  "Land windsurfing",
  "Sailing",
  "Windsurfing",
  "Wing foiling",
  "Yacht racing",
  "Skiing",
  "Downhill",
  "Super-G",
  "Giant slalom",
  "Slalom",
  "Bobsleigh",
  "Luge",
  "Shovel racing",
  "Skibobbing",
  "Skeleton",
  "Toboggan",
  "Kayaking",
];

// trying to save on performance time lol
const listLength = 113;

function randomSport() {
  return sportsList[Math.floor(Math.random() * listLength)];
}

let sports = {
  list: [...sportsList],
  length: listLength,
  randomSport: randomSport,
};

exports.sports = sports;