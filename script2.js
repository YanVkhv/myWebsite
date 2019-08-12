window.onload = function () {
 document.getElementById("gifofme").addEventListener("dblclick", function(){
  easter();
});
};

function easter() {
	document.getElementById("easter").src = "images/easter.jpg";
}