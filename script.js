//your JS code here. If required.
function renderDate() {
	const date = new Date()
	document.getElementById("timer").innerHTML = date.toLocaleString().toUpperCase()
}

setInterval(() => {
	renderDate()
})