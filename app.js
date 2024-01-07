function bmi() {
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');

    let cal = (weight.value / (height.value * height.value)).toFixed(2);

    console.log(cal)

    

    if (cal < 18.5) {
        document.getElementById('result').innerText = "Your BMI Is = "+ cal + " Under Weight";
    } else if (cal >= 18 && cal <= 24.9) {
        document.getElementById('result').innerText = "Your BMI Is = "+ cal + " Normal Weight";
    } else if (cal >= 25 && cal <= 29.9) {
        document.getElementById('result').innerText = "Your BMI Is ="+ cal + " Over Weight";
    } else if (cal >= 30 && cal <= 35) {
        document.getElementById('result').innerText = "Your BMI Is ="+ cal + " Obesity";
    } else {
        document.getElementById('result').innerText = "Your BMI Is ="+ cal + " Severe Obesity";
    }
    // This is to hide the value after calculation
    height.value = "";
    weight.value = "";

    
}