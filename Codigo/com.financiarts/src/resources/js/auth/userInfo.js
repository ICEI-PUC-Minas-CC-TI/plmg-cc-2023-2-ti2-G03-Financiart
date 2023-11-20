var loginPageURI = "file:///C:/Users/HigorLopes/source/repos/G003-Financiart/Codigo/com.financiarts/src/resources/html/login.html";
var homePageURI = "file:///C:/Users/HigorLopes/source/repos/G003-Financiart/Codigo/com.financiarts/src/resources/html/home.html";
var managementPageURI = "file:///C:/Users/HigorLopes/source/repos/G003-Financiart/Codigo/com.financiarts/src/resources/html/investimentos.html";

window.addEventListener("DOMContentLoaded", () => {
	var userInfo = document.getElementById("user-status");
	console.log(userInfo);

	userInfo.append(getLogin() ? setLoginInfo() : setAnonymousInfo())
});

function setAnonymousInfo(){
	var container = document.createElement("div")
	container.classList.add("double-button");

	var loginButton = document.createElement("a")
	loginButton.classList.add("button");
	loginButton.style.color ="white"
	loginButton.innerHTML = "Entrar"

	var siginButton = document.createElement("a")
	siginButton.classList.add("button");
	siginButton.style.color ="white";
	siginButton.innerHTML = "Cadastre-se"

	container.append(loginButton);
	container.append(siginButton);
	
	return container;
}

function setLoginInfo(){
	var container = document.createElement("div")
	container.style.color = `black`;
	container.innerHTML = `Bem Vindo(a), ${getLogin().email}`;

	var logoutButton = document.createElement("a")
	logoutButton.innerHTML = "Sair";
	logoutButton.style.marginLeft = "10px";
	logoutButton.style.cursor = "pointer";
	logoutButton.onclick = logout

	container.append(logoutButton);
	return container;
}
