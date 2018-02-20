let newProduct = {
    processor:"AMD",
    model:"ryzen",
    coreCount:8,
    modelAndProcessor: function(){
        return this.processor+" "+this.model+" cores count "+this.coreCount ;
    }
    
};

console.log (newProduct.modelAndProcessor());
let wishList = {
    processor:"AMD RYZEN 3 1200",
    case:"COOLER MASTER MasterBox 5",
    powerSupply:"CORSAIR CX450",
    ram:"GeIL EVO SPEAR 8GB(2 x 4GB)",
    ssd:"SAMSUNG 850",
    motherboard:"MSI B350M",
    fullList: function(){
        return this.processor+", "+this.case+", "+this.powerSupply+", "+this.ram+", "+this.ssd+", "+this.motherboard;
    }
};

console.log(wishList.fullList());