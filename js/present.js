document.getElementById('submit').onclick = function() {
    var answer = document.getElementById('answer').value;
    if (answer === "sophiegaito") {
	  	document.getElementById("gifts").style.display = "block";
	}
	else {
		window.alert("Not quite :P, keep trying!");
	}
	return false;
}