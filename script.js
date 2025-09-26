//your JS code here. If required.
//html
<!DOCTYPE html>

<html>

<head>
	<link rel="stylesheet" href="styles.css">
</head>

<body>
	<!-- the entire body must be written by student -->
	<p id="timer"></p>
    <script type="text/javascript" src="./script.js">
</script>

</body>

</html>


//js
function renderDate() {
	const date = new Date()
	document.getElementById("timer").innerHTML = date.toLocaleString().toUpperCase()
}

setInterval(() => {
	renderDate()
})