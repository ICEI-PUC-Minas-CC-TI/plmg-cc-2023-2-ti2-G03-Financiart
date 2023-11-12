var asMoney = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL',
});

var chart = null;

window.addEventListener("DOMContentLoaded", () => {
	
	requestFor("transaction").GET("/byuser/"+getLogin().id).then(init);

	const form = document.getElementById("finance-form");
	form.onsubmit = (e) => {
		e.preventDefault();
		console.log("test")
		window.location.href='#start';

		var result = {}
		$(`#finance-form input`).each(function () { result[this.name] = this.value });
		$(`#finance-form select`).each(function () { result[this.name] = this.value });
		
		result.user = getLogin().id;
		requestFor("transaction")
			.POST("", result)
			.then(() => {
				requestFor("transaction").GET("/byuser/"+getLogin().id).then(init);
			})
	}
});

function init(transactions) {
	var container = document.getElementById("summary-container");
	container.innerHTML = "";
	var total = transactions.reduce((a, b) => {
		return b.revenue ? a + b.value : a - b.value;
	}, 0)
	
	var revenue = transactions.filter(c => c.revenue);
	var expenses = transactions.filter(c => !c.revenue);

	var totalRevenue = revenue.reduce((a,b) => a + b.value, 0);
	var totalExpenses = expenses.reduce((a,b) => a + b.value, 0);

	buildSummaryCard("Saldo disponível", asMoney.format(total), "rgba(0,0,0,.01)");
	buildSummaryCard("Receita", asMoney.format(totalRevenue), "rgba(0,255,0,.1)");
	buildSummaryCard("Gastos", asMoney.format(totalExpenses), "rgba(255,0,0,.1)");
	
	buildCharts(transactions);
	buildList(transactions);
}

function buildList(transactions){
	var financeListContainer = document.getElementById("finance-list");
	financeListContainer.innerHTML = "";

	transactions
		.sort(function(a,b){ 
			return new Date(a.date) - new Date(b.date)
		})
		.forEach(function (finance, index) {
			var financeItem = document.createElement("div");
			financeItem.className = "finance-item";
			financeItem.style.display= "flex";

			var financeDescription = document.createElement("span");
			financeDescription.className = "finance-description";
			financeDescription.textContent = finance.description;

			var financeType = document.createElement("span");
			financeType.className = "finance-type";
			financeType.textContent = finance.type === "income" ? "Receita" : "Despesa";

			var financeAmount = document.createElement("span");
			financeAmount.className = "finance-amount";
			financeAmount.textContent = "$" + finance.value.toFixed(2);

			var financeCategory = document.createElement("span");
			financeCategory.className = "finance-category";
			financeCategory.textContent = finance.category;

			var deleteButton = document.createElement("button");
			deleteButton.style.marginLeft= "auto";
			deleteButton.className = "delete-button";
			deleteButton.textContent = "Apagar";
			deleteButton.dataset.index = index;

			var editButton = document.createElement("button");
			editButton.className = "edit-button";
			editButton.textContent = "Editar";
			editButton.dataset.index = index;

			financeItem.appendChild(financeDescription);
			financeItem.appendChild(financeType);
			financeItem.appendChild(financeAmount);
			financeItem.appendChild(financeCategory);
			financeItem.appendChild(deleteButton);
			financeItem.appendChild(editButton);

			financeListContainer.appendChild(financeItem);

			deleteButton.addEventListener("click", () => {
				console.log(finance.id)
				requestFor("transaction")
				.DELETE(finance.id)
				.then((answer) => {
					requestFor("transaction").GET("/byuser/"+getLogin().id).then(init);
				})
			});

			editButton.addEventListener("click", function (event) {
				var index = event.target.dataset.index;
				editFinanceItem(index);
			});
		});
}

function buildCharts(transactions){
	var ctx = document.getElementById("category-chart")
	ctx.innerHTML = ""
	var items = Object.groupBy(transactions.sort(function(a,b){ 
		return new Date(a.date) - new Date(b.date)
	}), (r) => r.revenue ? "revenue" : "expenses");

	var revenueGrouped = items["revenue"] ? Object.groupBy(items["revenue"], (e) => e.date) : {};
	var expensesGrouped =items["expenses"] ? Object.groupBy(items["expenses"], (e) => e.date) : {};

	var datedRevenue = Object
							.keys(revenueGrouped)
							.map(c => ({ x: c, y: revenueGrouped[c].reduce((a,b) => a + b.value, 0) }))

	var datedExpenses = Object
							.keys(expensesGrouped)
							.map(c => ({ x: c, y: expensesGrouped[c].reduce((a,b) => a + b.value, 0) }))

	buildChart(
		datedRevenue, 
		datedExpenses
	)
}

function onlyUnique(value, index, array) {
	return array.indexOf(value) === index;
  }

function buildChart(revenue, expenses){
	var ctx = document.getElementById("category-chart")

	if(chart) chart?.destroy();

	var categories = [...expenses.map(c => c.x), ...revenue.map(c => c.x)].sort(function(a,b){ 
		return new Date(a) - new Date(b)
	}).filter(onlyUnique)

	console.log(categories)
	chart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: categories,
			datasets: [
				{
					data: expenses,
					label: "Despesa",
					backgroundColor: "rgba(255, 99, 132, 0.5)",
					borderColor: "rgba(255, 99, 132, 1)",
					borderWidth: 1
				},
				{ 
					data: revenue,
					label: "Receita",
					backgroundColor: "rgba(75, 192, 192, 0.5)",
					borderColor: "rgba(75, 192, 192, 1)",
					borderWidth: 1
				}, 
			],
		}
	});
	
}


function buildSummaryCard(label, value, color){
	var container = document.getElementById("summary-container");
	container.style.width = "calc(100vw - 8rem)"

	var content = document.createElement("div");
	content.style.boxShadow = "1px 1px 8px 1px rgba(0, 0, 0, .3)"
	content.style.borderRadius = "8px"
	content.style.width= "100%"
	content.style.padding= "1rem"
	content.style.margin = "1rem"
	content.style.backgroundColor = color
	

	var balanceLabel = document.createElement("div");
	balanceLabel.innerHTML = label;
	balanceLabel.style.fontSize = "0.9rem"
	balanceLabel.style.color = "rgba(0,1,0,.5)";

	var balance = document.createElement("div");
	balance.innerHTML = value;
	balance.style.fontSize = "1.8rem"
	balance.style.fontWeight = "500"


	content.append(balanceLabel);
	content.append(balance);

	container.append(content);
}

function buildTransactions () {

}