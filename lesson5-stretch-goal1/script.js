class Stadium {
  constructor(name,city,capacity,sports,seats){
      this.name = name;
      this.city = city;
      this.capacity = capacity;
      this.sports = sports;
      this.seats = seats;
  }
  describeStatium(){
      console.log("The "+this.name+" is in "+this.city+" and holds "+this.capacity+" fans.");
  }
  sportsPlayed(){
    console.log("The following sport is mainly played in this stadium: "+this.sports);
  }
  seatsAvailable(){
    console.log("There are "+this.seats+" seats still available for tonight's game.")
  }
}

let stadium1 = new Stadium(
  "Mercedes Benz Arena",
  "Atlanta",
  70000,
  "Football",
  55000
);
stadium1.describeStatium();
stadium1.sportsPlayed();
stadium1.seatsAvailable();