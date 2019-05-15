let fibonacci = [1,1];
for (var i = 2; i < 25; i++) {
	fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}
for(let  i = 0; i<fibonacci.length; i++){
	console.log(fibonacci[i]);
}