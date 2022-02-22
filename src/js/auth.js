let content = document.getElementsByClassName("content");
let tabLinks = document.getElementsByClassName("tabLinks");

content[0].style.display = "block";
function openTab(evt, authState) {
	let i, content, tabLinks;

	content = document.getElementsByClassName("content");
	for (i = 0; i < content.length; i++) {
		content[i].id === authState ? (content[i].style.display = "block") : (content[i].style.display = "none");
	}

	tabLinks = document.getElementsByClassName("tabLinks");
	for (i = 0; i < tabLinks.length; i++) {
		tabLinks[i].className = tabLinks[i].className.replace(" active", "");
	}
	evt.currentTarget.className += " active";
	document.getElementById(authState).style.display = "block";
}
