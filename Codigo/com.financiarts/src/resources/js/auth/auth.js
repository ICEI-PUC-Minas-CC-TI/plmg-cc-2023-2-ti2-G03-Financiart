var loginPageURI = "file:///C:/Users/HigorLopes/source/repos/G003-Financiart/Codigo/com.financiarts/src/resources/html/login.html";
var homePageURI = "file:///C:/Users/HigorLopes/source/repos/G003-Financiart/Codigo/com.financiarts/src/resources/html/home.html";
var managementPageURI = "file:///C:/Users/HigorLopes/source/repos/G003-Financiart/Codigo/com.financiarts/src/resources/html/investimentos.html";

window.addEventListener("DOMContentLoaded", () => {
	if(getLogin() && window.location.href == loginPageURI)
		window.location.href = managementPageURI;

	if(!getLogin() && window.location.href != loginPageURI)
		 window.location.href = loginPageURI;
});

function login(email, password){
	requestFor("user")
		.POST("login", { email, password})
		.then((d) => {
			if(d != null){
				setLogin(d);
			 	window.location.href = homePageURI;
			}
			else
				alert("Não foi possível fazer o Login. Verifique seu email e senha.")
		})
		.catch(() => {
			alert("Não foi possível fazer o Login. Verifique seu email e senha.")
		})
		.finally(() => {
			console.log("FINALIZED")
		})
}

function logout(){ 
	localStorage.clear();
	window.location.href = loginPageURI;
}

const loginLocalStorageKey = "identity"

function setLogin(user){ localStorage.setItem(loginLocalStorageKey, JSON.stringify(user)); }
function getLogin() { return JSON.parse(localStorage.getItem(loginLocalStorageKey)) };
