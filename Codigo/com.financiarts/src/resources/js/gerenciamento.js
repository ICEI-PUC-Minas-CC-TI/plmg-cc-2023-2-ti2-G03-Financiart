// Função para atualizar o resumo
function updateSummary(financeList) {
  var income = 0;
  var expense = 0;

  financeList.forEach(function (finance) {
    if (finance.type === "income") {
      income += finance.amount;
    } else if (finance.type === "expense") {
      expense += finance.amount;
    }
  });

  var balance = income - expense;

  document.getElementById("summary-income").textContent = "R$ " + income.toFixed(2);
  document.getElementById("summary-expense").textContent = "R$ " + expense.toFixed(2);
  document.getElementById("summary-balance").textContent = "R$ " + balance.toFixed(2);
}

// Função para atualizar a lista de finanças
function updateFinanceList(financeList) {
  var financeListContainer = document.getElementById("finance-list");

  financeListContainer.innerHTML = "";

  financeList.forEach(function (finance, index) {
    var financeItem = document.createElement("div");
    financeItem.className = "finance-item";

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
    // financeItem.appendChild(editButton);

    financeListContainer.appendChild(financeItem);

    deleteButton.addEventListener("click", deleteFinanceItem);
    editButton.addEventListener("click", function (event) {
      var index = event.target.dataset.index;
      editFinanceItem(index);
    });
  });
}

// Função para atualizar o gráfico de categorias
function updateCategoryChart(financeList) {
  
  var categories = {};
  financeList.forEach(function (finance) {
    if (!categories[finance.category]) {
      categories[finance.category] = { income: 0, expense: 0 };
    }

    if (finance.type === "income") {
      categories[finance.category].income += finance.amount;
    } else if (finance.type === "expense") {
      categories[finance.category].expense += finance.amount;
    }
  });

  var categoryNames = Object.keys(categories);
  var categoryIncomes = categoryNames.map(function (category) {
    return categories[category].income;
  });
  var categoryExpenses = categoryNames.map(function (category) {
    return categories[category].expense;
  });

  var ctx = document.getElementById("category-chart").getContext("2d");
  var chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: categoryNames,
      datasets: [
        {
          data: categoryIncomes,
          label: "Receita",
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1
        },
        {
          data: categoryExpenses,
          label: "Despesa",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Função para adicionar uma nova finança
function addFinanceData(financeData) {
  var financeList = JSON.parse(localStorage.getItem("finances")) || [];
  financeList.push(financeData);
  localStorage.setItem("finances", JSON.stringify(financeList));
  updateSummary(financeList);
  updateFinanceList(financeList);
  updateCategoryChart(financeList);
}

// Função para excluir uma finança
function deleteFinanceItem(event) {
  var index = event.target.dataset.index;
  var financeList = JSON.parse(localStorage.getItem("finances")) || [];
  financeList.splice(index, 1);
  localStorage.setItem("finances", JSON.stringify(financeList));
  updateSummary(financeList);
  updateFinanceList(financeList);
  updateCategoryChart(financeList);
}

// Função para editar uma finança
function editFinanceItem(index) {
  var financeList = JSON.parse(localStorage.getItem("finances")) || [];
  var finance = financeList[index];
  document.getElementById("finance-description").value = finance.description;
  document.getElementById("finance-type").value = finance.type;
  document.getElementById("finance-amount").value = finance.amount.toFixed(2);
  document.getElementById("finance-category").value = finance.category;

  financeList.splice(index, 1);
  localStorage.setItem("finances", JSON.stringify(financeList));
  updateSummary(financeList);
  updateFinanceList(financeList);
  updateCategoryChart(financeList);

  document.getElementById("finance-form").removeEventListener("submit", function (e) {
    e.preventDefault();
  });

  document.getElementById("finance-form").addEventListener("submit", function (e) {
    e.preventDefault();

    var newFinanceDescription = document.getElementById("finance-description").value;
    var newFinanceType = document.getElementById("finance-type").value;
    var newFinanceAmount = parseFloat(document.getElementById("finance-amount").value);
    var newFinanceCategory = document.getElementById("finance-category").value;

    if (!isNaN(newFinanceAmount) && newFinanceDescription !== "") {
      var newFinanceData = {
        description: newFinanceDescription,
        type: newFinanceType,
        amount: newFinanceAmount,
        category: newFinanceCategory
      };

      financeList.splice(index, 0, newFinanceData);
      localStorage.setItem("finances", JSON.stringify(financeList));
      clearFinanceForm();
      updateSummary(financeList);
      updateFinanceList(financeList);
      updateCategoryChart(financeList);
    }
  });
}

// Função para limpar o formulário de finanças
function clearFinanceForm() {
  document.getElementById("finance-amount").value = "";
  document.getElementById("finance-category").value = "recorrente";
  document.getElementById("finance-description").value = "";
}

function fetchInvestmentsData(id){
  return fetch("http://localhost:6789/investments/byuser/"+id, {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  .then((response) => response.json())
}

async function postInvestmentsData(data){
  var result = await fetch("http://localhost:6789/investments/byuser/"+id, {
    method: "POST",
    body: JSON.stringify(data)
  });
}

async function deleteInvestmentsData(data){
  var result = await fetch("http://localhost:6789/investments/"+id, {
    method: "DELETE",
  });
}

async function updateInvestmentsData(data, id){
  var result = await fetch("http://localhost:6789/investments/"+id, {
    method: "PUT",
    body: JSON.stringify(data)
  });
}

// Função para inicializar o aplicativo
function initApp() {
  fetchInvestmentsData(1)
    .then((list) => {
      var financeList = list;

      updateSummary(financeList);
      updateFinanceList(financeList);
      updateCategoryChart(financeList);
    
      document.getElementById("finance-form").addEventListener("submit", function (e) {
        e.preventDefault();
    
        var financeDescription = document.getElementById("finance-description").value;
        var financeType = document.getElementById("finance-type").value;
        var financeAmount = parseFloat(document.getElementById("finance-amount").value);
        var financeCategory = document.getElementById("finance-category").value;
    
        if (!isNaN(financeAmount) && financeDescription !== "") {
          var financeData = {
            description: financeDescription,
            type: financeType,
            amount: financeAmount,
            category: financeCategory
          };
    
          addFinanceData(financeData);
          clearFinanceForm();
        }
      });
  })

}

initApp();



