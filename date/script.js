function Click() {
	let name = document.querySelector("input").value;
	localStorage.setItem("name",name);
	
	if(name.length > 0){
		window.location.href="2/index.html";
	}
}