// eligible venue must be either a school or a community center
// eligible venue must have a capacity of at least 20 


const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];


function chooseStations(stations) {
	const goodStations = [];
	  for (const stations of stations) {
		  const capacity  = stations[1]

		if(capacity >= 20) {

      const type = station[2]
    
		  if(type === 'school' || station [0] === 'community centre') {
			  goodStations.push(stations[0])
		  }
		}
  }
 
  return goodStations
}
console.log(chooseStations(stations));