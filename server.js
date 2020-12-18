const dbConfig = require('./config/db.config')


const db = require("./models");
const Airport = db.airport;
const Flight = db.flight;
const Terminal = db.terminal;

// db connection
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

const airport = new Airport({
	name: "First Airport",
	country: "US",
	opened: "2020-12-15"
})

airport.save()
console.log("Airport saved", airport)
// Lets Make and Save our first airport


const flight1 = new Flight({
  from: "CDG France",
  to: "JFK New-York",
  airline: "American Airlines"
})
flight1.save()
console.log("Flight 1 saved\n", flight1)


const flight2 = new Flight({
  from: "Heathrow UK",
  to: "JFK New-York",
  airline: "British Airways"
})
flight2.save()
console.log("Flight 2 saved\n", flight2)


const airport1 = new Airport({
  name: "JFK",
  country: "USA",
  opened: new Date(1990,11,16)
})
airport1.save().then(data=>{
  console.log("Airport1 saved\n", airport1)
  const terminal1 = new Terminal({
    name: "Terminal 1",
    capacity: 234324,
    flights: [flight1, flight2]
  })

  terminal1.save().then((data)=>{
    console.log(data)
    console.log("Terminal 1 saved\n",terminal1)
    airport1.terminals.push(terminal1);
    airport1.save()
    console.log('Saved airport1 with terminal', airport1)
  })
})
