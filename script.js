// your code here
const fors=document.getElementById("ford");
fors.addEventListener("submit",function(e){
	e.preventDefault();
	let name=document.getElementById("name").value;
	let year=document.getElementById("year").value;
	let h3=document.querySelector("h3").innerText;
	let name2="name";
	let ans="";
	if(name=="" && year!=""){
		ans+=h3+"?"+"year="+year;
	}else if(name!="" && year==""){
		ans+=h3+"?"+"name="+name;
	}else if(name!="" && year!=""){
		ans+=h3+"?"+"name="+name +"&year="+year;
	}
	if(ans){
		document.document.querySelector("h3").textContent=ans;
	}
});

