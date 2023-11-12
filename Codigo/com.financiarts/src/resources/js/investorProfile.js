window.addEventListener("DOMContentLoaded", () => {
	showTextField();
	$('#investor-choice input').on('change', function() {
		var value = $('input:checked', '#investor-choice').val();
		var container = document.getElementById("investor-choice-content");
		container.innerHTML = "";

		if(value == "write")
			showTextField();
		else
			showForm();
	});
});


function showForm(){
	var container = document.getElementById("investor-choice-content");

	var form = document.createElement("form")
	form.id ="investor-form";
	form.style.display = "flex";
	form.style.flexDirection = "column";
	form.style.overflow = "auto";
	form.style.boxShadow = "1px 1px 1px 2px rgba(0,0,0,0.2)";
	form.style.padding = "10px";
	form.style.borderRadius = "8px";
	form.style.margin = "1rem 0";
	
	for(var question of questions)
		form.append(buildQuestion(question))

	var button = document.createElement("button")
	button.innerHTML = "enviar";

	form.onsubmit = (e) => {
		e.preventDefault();
		window.location.href='#start';
		loadInvestorProfile();

		var result = {}
		$(`#investor-form input:checked`).each(function () { result[this.name] = this.value });
		
		requestFor("investorProfile")
			.POST("find", result)
			.then((answer) => {
				document.getElementById("investor-profile").innerHTML = answer;
			})
	}


	form.append(button)
	container.append(form)
}

function buildQuestion (question) {
	var div = document.createElement("div");
	div.style.margin = "1rem 0";

	var questionLabel = document.createElement("label");
	questionLabel.innerHTML = question.question;

	var answerContainer = document.createElement("div");
	div.append(questionLabel)
	div.append(answerContainer)
	
	for(var answer of question.answers)
		answerContainer.append(createRadio(answer, question.question, answer));

	return div;
}

function createRadio(label, name, value){
	var radioContainer = document.createElement("div");
	radioContainer.style.display = "flex";
	radioContainer.style.alignItems = "center";

	var radio = document.createElement("input");
	radio.type = "radio"
	radio.id = value;
	radio.name = name;
	radio.value = value;
	radio.style.marginBottom = "5px";

	var radioLabel = document.createElement("label");
	radioLabel.htmlFor = value;
	radioLabel.innerHTML = label;

	radioContainer.append(radio, radioLabel);
	return radioContainer;
}

function showTextField(){
	var container = document.getElementById("investor-choice-content");
	container.style.display = "flex";
	container.style.flexDirection= "column";
	container.style.margin = "1rem 0"

	var field = document.createElement("textarea");
	field.rows = 15;
	field.value='Sou uma pessoa que não gosta muito de gastar'

	var button = document.createElement("button");
	button.style.marginTop = "10px"
	button.innerHTML = "Enviar"

	button.onclick = (e) => {
		e.preventDefault();
		loadInvestorProfile();
		requestFor("investorProfile")
			.POST("find", field.value)
			.then((answer) => {
				document.getElementById("investor-profile").innerHTML = answer;
			})
	}
	container.innerHTML = ""
	container.append(field, button);
}

function loadInvestorProfile(){
	document.getElementById("investor-profile").innerHTML = "Atualizando... aguarde por favor.";
}