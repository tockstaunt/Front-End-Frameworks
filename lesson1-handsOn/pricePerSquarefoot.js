function totalPrice(sqEdge, pricePerSqFt) {	
	var totalPrice = sqEdge * sqEdge * pricePerSqFt;
	return totalPrice;
}
console.log(totalPrice(10,100));
