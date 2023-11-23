window.addEventListener("DOMContentLoaded", () => {

	buildBase();
	var c = document.getElementById("add-new");
	c.onclick =	AddInvestment;
});

function buildBase(){
	requestFor("investments")
		.GET("")
		.then((investments) => {
			var container = document.getElementById("investments");
			container.innerHTML = "";
			for(var investment of investments)
				buildCard("investments", investment);
		})

	requestFor("investments")
		.GET("byuser/"+getLogin().id)
		.then((investments) => {
			var container = document.getElementById("my-investments");
			container.innerHTML = "";
			for(var investment of investments)
				buildCard("my-investments", investment.investments, investment.amount);
		})

}

function AddInvestment(){
	var nome = document.getElementById("nome").value;
	var quantidade = document.getElementById("quantidade").value;
	
	requestFor("investments")
		.POST(`byuser/${+getLogin().id}/${nome}/${quantidade}`, {})
		.then((investments) => {
			buildBase()
		}).catch(() => {
			alert("Não foi possivel adicionar investimento. Verifique se o código está correto")
		})
}


function buildCard(containerID, investment, quantity){
	
	var container = document.getElementById(containerID);

	var card = document.createElement("div");
	card.style.minWidth = "calc(740px / 3)"
	card.style.margin = "10px"
	card.style.fontSize = "0.8rem"
	card.style.boxShadow = "1px 1px 8px 1px rgba(0, 0, 0, .3)"
	card.style.padding = "1rem"
	card.style.borderRadius = "1rem"
	card.style.background = "#6f009111"


	var label = document.createElement("div");
	label.innerHTML = investment.name
	label.style.fontSize ="1rem"
	label.style.fontWeight ="bold"

	var content = document.createElement("div");

	var sector = document.createElement("div");
	sector.innerHTML = investment.sector;
	sector.style.fontSize ="0.8rem"
	sector.style.fontWeight ="bold"
	sector.style.textTransform ="uppercase"
	sector.style.display = "flex"
	sector.style.marginTop = "0.8rem"
	sector.style.padding = "5px"
	sector.style.borderRadius = "4px"
	sector.style.justifyContent = "center"
	sector.style.background = "#6f0091"
	sector.style.color = "white"
	
	var data = document.createElement("div");
	data.innerHTML = `<p>Categoria: ` + investment.category + `</p><p>Risco: ` + investment.risk + `</p><p>Div Yield: ` + investment.yield + `</p>`;

	var seeMore = document.createElement("a");
	seeMore.href = investment.href;
	seeMore.target ="_blank";
	seeMore.innerHTML ="Ver mais";

	
	content.append(sector)
	content.append(data);
	data.append(seeMore);
	
	if(quantity){
		var myAmount = document.createElement("div");
		myAmount.innerHTML = `Quantidade: ${quantity}`;
		myAmount.style.marginTop ="1rem"
		myAmount.style.fontSize ="1rem"
		myAmount.style.fontWeight ="bold"
		content.append(myAmount);
		
		var deleteX = document.createElement("div");
		deleteX.innerHTML = "x";
	
		deleteX.onclick = () => {
			requestFor("investments")
				.DELETE(`byuser/${investment.id}`, {})
				.then((investments) => {
					buildBase()
				})
		}
		
		content.append(deleteX)
	}
	card.append(label);
	card.append(content);

	container.appendChild(card)
}