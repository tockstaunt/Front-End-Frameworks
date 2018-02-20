class Stadium {
    constructor(name,city,capacity){
        this.name = name;
        this.city = city;
        this.capacity = capacity;
    }
    describeStatium(){
        console.log("The "+this.name+" is in "+this.city+" and holds "+this.capacity+" fans");
    }
}

let stadium1 = new Stadium("Mercedes Benz Arena", "Atlanta", 70000);
stadium1.describeStatium();