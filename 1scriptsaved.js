window.onload = () => {
    var button = document.querySelector("#btn");
  
    // Function for calculating BMI
    btn.addEventListener("click", bmiCalculator);
};


function bmiCalculator() {

	var weight=parseInt(document.querySelector("#weight").value);
	var height=parseInt(document.querySelector("#height").value);

	var result=document.querySelector("#result");

	if (height === "" || isNaN(height))

		result.innerHTML = "<span style='color: red;'>Insert a valid height!</span>";
	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Insert a valid weight!";
	else {
		var bmi = (weight/((height*height) /10000)).toFixed(2);

		if(bmi < 18.6) result.innerHTML = 
			"You are underweight: Your BMI is " + bmi + "." +"</br/> A protein based, high-calorie diet could help you add a few extra pounds.";

		else if (bmi >= 18.6 & bmi < 24.9)
			result.innerHTML = "You have a normal weight: Your BMI is " + bmi +"<br/> Congratulations! Keep taking care of yourself!";

		else result.innerHTML = 
			"You are overweight: Your BMI is " + bmi + "  <br/> Visit the Weight Loss Strategies section to learn more about improving your health.";
		    

	}
	
}
	






