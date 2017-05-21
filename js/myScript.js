window.onload = function main() {

	var datum = new Date();
	var timme = datum.getHours();


	if(timme >= 5 && timme < 12){
		document.getElementById("greetingsPara").innerHTML = "Good morning,";
	} else if(timme >= 12 && timme < 17){
		document.getElementById("greetingsPara").innerHTML = "Good afternoon,";
	} else {
		document.getElementById("greetingsPara").innerHTML = "Good evening,";
	}
}