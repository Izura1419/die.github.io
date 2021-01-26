function Click() {
	let name = document.querySelector(".name").value;
	localStorage.setItem("name",name);
	let typeOfData = document.querySelector(".typeOfData").value;
	localStorage.setItem("typeOfData",typeOfData);
	
	if(name.length > 0 && typeOfData.length > 0){
		window.location.href="2/index.html";
	}
}