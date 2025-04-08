function calculate$(){

	var weight = document.getElementById('weight').value;
	var height = document.getElementById('height').value;
	var BMI = weight/Math.pow(height,2);
	var roundBMI = Math.round(BMI);


	if (roundBMI >=18.5 && roundBMI <=24.9){
		window.alert('NORMAL WEIGHT: ' + roundBMI);
	}

	else if (roundBMI < 18.5 ){
		window.alert('UNDERWEIGHT: ' + roundBMI );
	}

	else if(roundBMI >=25 && roundBMI <=29.9){
		window.alert('OVERWEIGHT: ' + roundBMI );
	}

	else if (roundBMI >=30){
		window.alert('OBESE: ' + roundBMI );
	}
}