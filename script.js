//toggle mobile nav class 
var nav = document.querySelector("nav ul"),
navToggle = document.querySelector("nav .skip");
if (navToggle) {
	navToggle.addEventListener("click", function(a) {
		if (nav.className == "open") {
			nav.className = "";
		} else {
			nav.className = "open";
		}
		a.preventDefault();
	}, false);
}

//toggle nav when page is clicked
var specifiedElement = document.querySelector('nav');
document.addEventListener('click', function(event) {
	var isClickInside = specifiedElement.contains(event.target);
	if (!isClickInside && nav.className == "open") {
    nav.className = "";
	} 
});

//detect colour scheme and set checkbox
var checkBox = document.getElementById("schemeCheck");
var checkLabel = document.getElementById("schemeLabel");
function detectScheme() {
	var theme = "light";
    if(localStorage.getItem("theme")) {
        if(localStorage.getItem("theme") == "dark") {
            var theme = "dark";
        }
    } else if(!window.matchMedia) {
        return false;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
		var theme = "dark";
    }
    if (theme=="dark") {
         document.documentElement.setAttribute("data-theme", "dark");
		 checkBox.checked = false;
    } else {
		 checkBox.checked = true;
	}
	if (document.documentElement.getAttribute("data-theme") == "dark"){
		checkBox.checked = true;
	} else {
		checkBox.checked = false;
	}
}
detectScheme();

// toggle dark mode
checkBox.addEventListener("change", darkMode, false);

function darkMode() {
	if (checkBox.checked == true){
		localStorage.setItem("theme", "dark");
		document.documentElement.setAttribute('data-theme', 'dark');
	} else {
		localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
	}
}

let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-modal")
modalBtn.onclick = function(){
	modal.style.display = "block"
}
closeBtn.onclick = function(){
	modal.style.display = "none"
}
window.onclick = function(e){
	if(e.target == modal){
	modal.style.display = "none"
	}
}
