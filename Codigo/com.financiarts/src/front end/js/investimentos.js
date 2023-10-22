function toggleSubItens(button) {
  var subItens = button.nextElementSibling;
  if (subItens.style.display === "block") {
    subItens.style.display = "none";
  } else {
    subItens.style.display = "block";
  }
}

window.onload = function() {
  var subitens = document.getElementsByClassName("esconder");
  for (var i = 0; i < subitens.length; i++) {
    subitens[i].style.display = "none";
  }
}

$(document).ready(function() {
  $("#search-input").on("input", function() {
    var searchTerm = $(this).val().toLowerCase();
    var selectedCategories = [];

    $("input[type=checkbox]:checked").each(function() {
      selectedCategories.push($(this).val());
    });

    $(".card").each(function() {
      var cardText = $(this).text().toLowerCase();
      var cardCategories = $(this).data("categoria") + " " + $(this).data("setor") + " " + $(this).data("risco") + " " + $(this).data("taxa") + " " + $(this).data("div yield");

      var matchesSearchTerm = cardText.includes(searchTerm);

      var matchesCategory = selectedCategories.some(function(category) {
        return cardCategories.includes(category);
      });

      if (matchesSearchTerm && matchesCategory) {
        $(this).show();
      } else {
        $(this).hide();
      }

      if (cardText.includes(searchTerm)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var checkboxRendaVariavel = document.getElementById('checkbox-rendaVariavel');
  var checkboxRendaFixa = document.getElementById('checkbox-rendaFixa');
  var checkboxFundoImobiliario = document.getElementById('checkbox-fundoImobiliario');
  var checkboxAtivoExterior = document.getElementById('checkbox-ativoExterior');
  var checkboxCriptomoedas = document.getElementById('checkbox-criptomoedas');
  var checkboxAlto = document.getElementById('checkbox-alto');
  var checkboxModerado = document.getElementById('checkbox-moderado');
  var checkboxBaixo = document.getElementById('checkbox-baixo');
  var checkboxTecnologia = document.getElementById('checkbox-tecnologia');
  var checkboxCommodities = document.getElementById('checkbox-commodities');
  var checkboxGoverno = document.getElementById('checkbox-governo');
  var checkboxFinanceiro = document.getElementById('checkbox-financeiro');
  var checkboxEnergia = document.getElementById('checkbox-energia');
  var checkboxInternacional = document.getElementById('checkbox-internacional');


  checkboxRendaVariavel.addEventListener('change', function() {
    if (checkboxRendaVariavel.checked) {
      checkboxRendaFixa.checked = false;
      checkboxRendaFixa.disabled = true;
      checkboxAtivoExterior.checked = false;
      checkboxAtivoExterior.disabled = true;
      checkboxFundoImobiliario.checked = false;
      checkboxFundoImobiliario.disabled = true;
      checkboxCriptomoedas.checked = false;
      checkboxCriptomoedas.disabled = true;
    } else {
      checkboxRendaFixa.disabled = false;
      checkboxAtivoExterior.disabled = false;
      checkboxFundoImobiliario.disabled = false;
      checkboxCriptomoedas.disabled = false;
    }
    filterCards();
  });

  checkboxRendaFixa.addEventListener('change', function() {
    if (checkboxRendaFixa.checked) {
      checkboxRendaVariavel.checked = false;
      checkboxRendaVariavel.disabled = true;
      checkboxAtivoExterior.checked = false;
      checkboxAtivoExterior.disabled = true;
      checkboxFundoImobiliario.checked = false;
      checkboxFundoImobiliario.disabled = true;
      checkboxCriptomoedas.checked = false;
      checkboxCriptomoedas.disabled = true;
    } else {
      checkboxRendaVariavel.disabled = false;
      checkboxAtivoExterior.disabled = false;
      checkboxFundoImobiliario.disabled = false;
      checkboxCriptomoedas.disabled = false;
    }
    filterCards();
  });

  checkboxFundoImobiliario.addEventListener('change', function() {
    if (checkboxFundoImobiliario.checked) {
      checkboxAtivoExterior.checked = false;
      checkboxAtivoExterior.disabled = true;
      checkboxRendaVariavel.checked = false;
      checkboxRendaVariavel.disabled = true;
      checkboxCriptomoedas.checked = false;
      checkboxCriptomoedas.disabled = true;
      checkboxRendaFixa.checked = false;
      checkboxRendaFixa.disabled = true;
    } else {
      checkboxAtivoExterior.disabled = false;
      checkboxCriptomoedas.disabled = false;
      checkboxRendaVariavel.disabled = false;
      checkboxRendaFixa.disabled = false;
    }
    filterCards();
  });

  checkboxAtivoExterior.addEventListener('change', function() {
    if (checkboxAtivoExterior.checked) {
      checkboxFundoImobiliario.checked = false;
      checkboxFundoImobiliario.disabled = true;
      checkboxRendaVariavel.checked = false;
      checkboxRendaVariavel.disabled = true;
      checkboxCriptomoedas.checked = false;
      checkboxCriptomoedas.disabled = true;
      checkboxRendaFixa.checked = false;
      checkboxRendaFixa.disabled = true;
    } else {
      checkboxFundoImobiliario.disabled = false;
      checkboxCriptomoedas.disabled = false;
      checkboxRendaVariavel.disabled = false;
      checkboxRendaFixa.disabled = false;
    }
    filterCards();
  });

  checkboxCriptomoedas.addEventListener('change', function() {
    if (checkboxCriptomoedas.checked) {
      checkboxFundoImobiliario.checked = false;
      checkboxFundoImobiliario.disabled = true;
      checkboxRendaVariavel.checked = false;
      checkboxRendaVariavel.disabled = true;
      checkboxRendaFixa.checked = false;
      checkboxRendaFixa.disabled = true;
      checkboxAtivoExterior.checked = false;
      checkboxAtivoExterior.disabled = true;
    } else {
      checkboxFundoImobiliario.disabled = false;
      checkboxRendaVariavel.disabled = false;
      checkboxRendaFixa.disabled = false;
      checkboxAtivoExterior.disabled = false;
    }
    filterCards();
  });

  checkboxAlto.addEventListener('change', function() {
    if (checkboxAlto.checked) {
      checkboxModerado.checked = false;
      checkboxModerado.disabled = true;
      checkboxBaixo.checked = false;
      checkboxBaixo.disabled = true;
    } else {
      checkboxModerado.disabled = false;
      checkboxBaixo.disabled = false;
    }
    filterCards();
  });

  checkboxModerado.addEventListener('change', function() {
    if (checkboxModerado.checked) {
      checkboxAlto.checked = false;
      checkboxAlto.disabled = true;
      checkboxBaixo.checked = false;
      checkboxBaixo.disabled = true;
    } else {
      checkboxAlto.disabled = false;
      checkboxBaixo.disabled = false;
    }
    filterCards();
  });

  checkboxBaixo.addEventListener('change', function() {
    if (checkboxBaixo.checked) {
      checkboxModerado.checked = false;
      checkboxModerado.disabled = true;
      checkboxAlto.checked = false;
      checkboxAlto.disabled = true;
    } else {
      checkboxModerado.disabled = false;
      checkboxAlto.disabled = false;
    }
    filterCards();
  });

  checkboxGoverno.addEventListener('change', function() {
    if (checkboxGoverno.checked) {
      checkboxTecnologia.checked = false;
      checkboxTecnologia.disabled = true;
      checkboxInternacional.checked = false;
      checkboxInternacional.disabled = true;
      checkboxFinanceiro.checked = false;
      checkboxFinanceiro.disabled = true;
      checkboxEnergia.checked = false;
      checkboxEnergia.disabled = true;
      checkboxCommodities.checked = false;
      checkboxCommodities.disabled = true;
    } else {
      checkboxTecnologia.disabled = false;
      checkboxInternacional.disabled = false;
      checkboxFinanceiro.disabled = false;
      checkboxEnergia.disabled = false;
      checkboxCommodities.disabled = false;
    }
    filterCards();
  });

  checkboxTecnologia.addEventListener('change', function() {
    if (checkboxTecnologia.checked) {
      checkboxGoverno.checked = false;
      checkboxGoverno.disabled = true;
      checkboxInternacional.checked = false;
      checkboxInternacional.disabled = true;
      checkboxFinanceiro.checked = false;
      checkboxFinanceiro.disabled = true;
      checkboxEnergia.checked = false;
      checkboxEnergia.disabled = true;
      checkboxCommodities.checked = false;
      checkboxCommodities.disabled = true;
    } else {
      checkboxGoverno.disabled = false;
      checkboxInternacional.disabled = false;
      checkboxFinanceiro.disabled = false;
      checkboxEnergia.disabled = false;
      checkboxCommodities.disabled = false;
    }
    filterCards();
  });

  checkboxInternacional.addEventListener('change', function() {
    if (checkboxInternacional.checked) {
      checkboxTecnologia.checked = false;
      checkboxTecnologia.disabled = true;
      checkboxGoverno.checked = false;
      checkboxGoverno.disabled = true;
      checkboxFinanceiro.checked = false;
      checkboxFinanceiro.disabled = true;
      checkboxEnergia.checked = false;
      checkboxEnergia.disabled = true;
      checkboxCommodities.checked = false;
      checkboxCommodities.disabled = true;
    } else {
      checkboxTecnologia.disabled = false;
      checkboxGoverno.disabled = false;
      checkboxFinanceiro.disabled = false;
      checkboxEnergia.disabled = false;
      checkboxCommodities.disabled = false;
    }
    filterCards();
  });

  checkboxFinanceiro.addEventListener('change', function() {
    if (checkboxFinanceiro.checked) {
      checkboxTecnologia.checked = false;
      checkboxTecnologia.disabled = true;
      checkboxInternacional.checked = false;
      checkboxInternacional.disabled = true;
      checkboxGoverno.checked = false;
      checkboxGoverno.disabled = true;
      checkboxEnergia.checked = false;
      checkboxEnergia.disabled = true;
      checkboxCommodities.checked = false;
      checkboxCommodities.disabled = true;
    } else {
      checkboxTecnologia.disabled = false;
      checkboxInternacional.disabled = false;
      checkboxGoverno.disabled = false;
      checkboxEnergia.disabled = false;
      checkboxCommodities.disabled = false;
    }
    filterCards();
  });

  checkboxEnergia.addEventListener('change', function() {
    if (checkboxEnergia.checked) {
      checkboxTecnologia.checked = false;
      checkboxTecnologia.disabled = true;
      checkboxInternacional.checked = false;
      checkboxInternacional.disabled = true;
      checkboxFinanceiro.checked = false;
      checkboxFinanceiro.disabled = true;
      checkboxGoverno.checked = false;
      checkboxGoverno.disabled = true;
      checkboxCommodities.checked = false;
      checkboxCommodities.disabled = true;
    } else {
      checkboxTecnologia.disabled = false;
      checkboxInternacional.disabled = false;
      checkboxFinanceiro.disabled = false;
      checkboxGoverno.disabled = false;
      checkboxCommodities.disabled = false;
    }
    filterCards();
  });

  checkboxCommodities.addEventListener('change', function() {
    if (checkboxCommodities.checked) {
      checkboxTecnologia.checked = false;
      checkboxTecnologia.disabled = true;
      checkboxInternacional.checked = false;
      checkboxInternacional.disabled = true;
      checkboxFinanceiro.checked = false;
      checkboxFinanceiro.disabled = true;
      checkboxEnergia.checked = false;
      checkboxEnergia.disabled = true;
      checkboxGoverno.checked = false;
      checkboxGoverno.disabled = true;
    } else {
      checkboxTecnologia.disabled = false;
      checkboxInternacional.disabled = false;
      checkboxFinanceiro.disabled = false;
      checkboxEnergia.disabled = false;
      checkboxGoverno.disabled = false;
    }
    filterCards();
  });

  function filterCards() {
    var cards = document.getElementsByClassName('card');



    for (var i = 0; i < cards.length; i++) {
      var card = cards[i];
      var isRendaVariavel = card.classList.contains('rendaVariavel');
      var isRendaFixa = card.classList.contains('rendaFixa');
      var isFundoImobiliario = card.classList.contains('fundoImobiliario');
      var isAtivoExterior = card.classList.contains('ativoExterior');
      var isCriptomoedas = card.classList.contains('criptomoedas');
      var isAlto = card.classList.contains('alto');
      var isModerado = card.classList.contains('moderado');
      var isBaixo = card.classList.contains('baixo');
      var isTecnologia = card.classList.contains('tecnologia');
      var isCommodities = card.classList.contains('commodities');
      var isGoverno = card.classList.contains('governo');
      var isInternacional = card.classList.contains('internacional');
      var isFinanceiro = card.classList.contains('financeiro');
      var isEnergia = card.classList.contains('energia');

      var showCard = true;

      if (checkboxRendaVariavel.checked && !isRendaVariavel) {
        showCard = false;
      }

      if (checkboxRendaFixa.checked && !isRendaFixa) {
        showCard = false;
      }

      if (checkboxFundoImobiliario.checked && !isFundoImobiliario) {
        showCard = false;
      }

      if (checkboxAtivoExterior.checked && !isAtivoExterior) {
        showCard = false;
      }

      if (checkboxCriptomoedas.checked && !isCriptomoedas) {
        showCard = false;
      }

      if (checkboxAlto.checked && !isAlto) {
        showCard = false;
      }

      if (checkboxModerado.checked && !isModerado) {
        showCard = false;
      }

      if (checkboxBaixo.checked && !isBaixo) {
        showCard = false;
      }

      if (checkboxTecnologia.checked && !isTecnologia) {
        showCard = false;
      }

      if (checkboxGoverno.checked && !isGoverno) {
        showCard = false;
      }

      if (checkboxCommodities.checked && !isCommodities) {
        showCard = false;
      }

      if (checkboxFinanceiro.checked && !isFinanceiro) {
        showCard = false;
      }

      if (checkboxInternacional.checked && !isInternacional) {
        showCard = false;
      }

      if (checkboxEnergia.checked && !isEnergia) {
        showCard = false;
      }

      if (showCard) {
        card.classList.remove('esconder');
      } else {
        card.classList.add('esconder');
      }
    }
  }
});


var rendaFixa = [{
  "rendafixa": [
    {
      "Ativo": "TESOURO PREFIXADO 2026",
      "Categoria": "Renda fixa",
      "Setor": "Governo",
      "Risco": "Baixo",
      "Tax": "10.60%"
    },
    {
      "Ativo": "TESOURO PREFIXADO 2029",
      "Categoria": "Renda fixa",
      "Setor": "Governo",
      "Risco": "Baixo",
      "Tax": "10.93%"
    },
    {
      "Ativo": "TESOURO SELIC 2026",
      "Categoria": "Renda fixa",
      "Setor": "Governo",
      "Risco": "Baixo",
      "Tax": "SELIC + 0,0778%"
    },
    {
      "Ativo": "CDB Banco Master",
      "Categoria": "Renda fixa",
      "Setor": "Financeiro",
      "Risco": "Baixo",
      "Tax": "14% a.a"
    },
    {
      "Ativo": "TESOURO IPCA+ 2029",
      "Categoria": "Renda fixa",
      "Setor": "Governo",
      "Risco": "Baixo",
      "Tax": "IPCA + 5,24%"
    },
    {
      "Ativo": "LCA Banco ABC",
      "Categoria": "Renda fixa",
      "Setor": "Financeiro",
      "Risco": "Baixo",
      "Tax": "11.40% a.a"
    },
    {
      "Ativo": "LCI Banco de Brasília  ",
      "Categoria": "Renda fixa",
      "Setor": "Financeiro",
      "Risco": "Baixo",
      "Tax": "11.40% a.a"
    },
    {
      "Ativo": "CRA BRF",
      "Categoria": "Renda fixa",
      "Setor": "Commodities",
      "Risco": "Alto",
      "Tax": "IPCA+ 8% a.a"
    },
  ]
}];

var Criptomoedas = [{
  "criptomoedas": [
    {
      "Ativo": "Bitcoin",
      "Categoria": "Criptomoedas",
      "Setor": "Internacional",
      "Risco": "Baixo",
    },
    {
      "Ativo": "Ethereum",
      "Categoria": "Criptomoedas",
      "Setor": "Internacional",
      "Risco": "Moderado",
    },
    {
      "Ativo": "Polkadot",
      "Categoria": "Criptomoedas",
      "Setor": "Internacional",
      "Risco": "Alto",
    },
    {
      "Ativo": "USD Coin",
      "Categoria": "Criptomoedas",
      "Setor": "Internacional",
      "Risco": "Baixo",
    },
  ]
}];

var rendaVariavel = [{
  "rendavariavel": [
    {
      "Ativo": "BBAS3",
      "Categoria": "Renda variável",
      "Setor": "Financeiro",
      "Risco": "Baixo",
      "DivYield": "9.05%"
    },
    {
      "Ativo": "TAEE11",
      "Categoria": "Renda variável",
      "Setor": "Energia",
      "Risco": "Baixo",
      "DivYield": "10.47%"
    },
    {
      "Ativo": "PETR4",
      "Categoria": "Renda variável",
      "Setor": "Commodities",
      "Risco": "Moderado",
      "DivYield": "49.85%"
    },
    {
      "Ativo": "ITSA4",
      "Categoria": "Renda variável",
      "Setor": "Financeiro",
      "Risco": "Baixo",
      "DivYield": "6.04%"
    },
    {
     "Ativo": "VALE3",
      "Categoria": "Renda variável",
      "Setor": "Commodities",
      "Risco": "Baixo",
      "DivYield": "8.86%"
    },
    {
     "Ativo": "TRPL4",
      "Categoria": "Renda variável",
      "Setor": "Energia",
      "Risco": "Baixo",
      "DivYield": "4.19%"
    },
    {
      "Ativo": "USIM3",
      "Categoria": "Renda variável",
      "Setor": "Commodities",
      "Risco": "Moderado",
      "DivYield": "4.10%"
    },
    {
      "Ativo": "ABEV3",
      "Categoria": "Renda variável",
      "Setor": "Financeiro",
      "Risco": "Alto",
      "DivYield": "4.95%"
    },
  ]
}];

var FundoImobiliário = [{
  "fundoImobiliário": [
    {
      "Ativo": "BRCR11",
      "Categoria": "Fundo Imobiliário",
      "Setor": "Tijolo",
      "Risco": "Baixo",
      "DivYield": "8.40%"
    },
    {
      "Ativo": "BTAL11",
      "Categoria": "Fundo Imobiliário",
      "Setor": "Tijolo",
      "Risco": "Baixo",
      "DivYield": "10.84%"
    },
    {
      "Ativo": "HFOF11",
      "Categoria": "Fundo Imobiliário",
      "Setor": "Fundo de fundos",
      "Risco": "Baixo",
      "DivYield": "9.46%"
    },
    {
      "Ativo": "SDIL11",
      "Categoria": "Fundo Imobiliário",
      "Setor": "Tijolo",
      "Risco": "Baixo",
      "DivYield": "9.95%"
    },
    {
      "Ativo": "KNRI11",
      "Categoria": "Fundo Imobiliário",
      "Setor": "Tijolo",
      "Risco": "Baixo",
      "DivYield": "6.95%"
    },
  ]
}];

var ativoExterior = [{
  "ativoexterior": [
    {
      "Ativo": "KO Coca-Cola",
      "Categoria": "Ativo exterior",
      "Setor": "Internacional",
      "Risco": "Baixo",
      "DivYield": "2.91%"
    },
    {
      "Ativo": "AAPL",
      "Categoria": "Ativo exterior",
      "Setor": "Tecnologia",
      "Risco": "Baixo",
      "DivYield": "0.59%"
    },
    {
      "Ativo": "META",
      "Categoria": "Ativo exterior",
      "Setor": "Tecnologia",
      "Risco": "Baixo",
      "DivYield": "0.0%"
    },
    {
      "Ativo": "SPY",
      "Categoria": "Ativo exterior",
      "Setor": "Internacional",
      "Risco": "Baixo",
      "DivYield": "2.91%"
    },
    {
      "Ativo": "MSFT",
      "Categoria": "Ativo exterior",
      "Setor": "Tecnologia",
      "Risco": "Baixo",
      "DivYield": "2.72%"
    },
    {
      "Ativo": "GOLD11",
      "Categoria": "Ativo exterior",
      "Setor": "Commodities",
      "Risco": "Baixo",
      "DivYield": "0.0%"
    },
  ]
}];

function imprimirTituloAtivo1(x) {
  let divAtivo = document.getElementById('tituloAtivo1');
  let ativo = rendaFixa[0].rendafixa[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirTituloAtivo2(x) {
  let divAtivo = document.getElementById('tituloAtivo2');
  let ativo = rendaFixa[0].rendafixa[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirTituloAtivo3(x) {
  let divAtivo = document.getElementById('tituloAtivo3');
  let ativo = rendaFixa[0].rendafixa[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirTituloAtivo4(x) {
  let divAtivo = document.getElementById('tituloAtivo4');
  let ativo = rendaFixa[0].rendafixa[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirTituloAtivo5(x) {
  let divAtivo = document.getElementById('tituloAtivo5');
  let ativo = rendaFixa[0].rendafixa[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirTituloAtivo6(x) {
  let divAtivo = document.getElementById('tituloAtivo6');
  let ativo = rendaFixa[0].rendafixa[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirTituloAtivo7(x) {
  let divAtivo = document.getElementById('tituloAtivo7');
  let ativo = rendaFixa[0].rendafixa[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirTituloAtivo8(x) {
  let divAtivo = document.getElementById('tituloAtivo8');
  let ativo = rendaFixa[0].rendafixa[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}


function imprimirSetor1(x) {
  let divNomeAtivo = document.getElementById('Setor1');
  let ativo = rendaFixa[0].rendafixa[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetor2(x) {
  let divNomeAtivo = document.getElementById('Setor2');
  let ativo = rendaFixa[0].rendafixa[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetor3(x) {
  let divNomeAtivo = document.getElementById('Setor3');
  let ativo = rendaFixa[0].rendafixa[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetor4(x) {
  let divNomeAtivo = document.getElementById('Setor4');
  let ativo = rendaFixa[0].rendafixa[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetor5(x) {
  let divNomeAtivo = document.getElementById('Setor5');
  let ativo = rendaFixa[0].rendafixa[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetor6(x) {
  let divNomeAtivo = document.getElementById('Setor6');
  let ativo = rendaFixa[0].rendafixa[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetor7(x) {
  let divNomeAtivo = document.getElementById('Setor7');
  let ativo = rendaFixa[0].rendafixa[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetor8(x) {
  let divNomeAtivo = document.getElementById('Setor8');
  let ativo = rendaFixa[0].rendafixa[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirDados1(x) {
  let divDados = document.getElementById('dados1');
  let ativo = rendaFixa[0].rendafixa[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Taxa: ` + ativo.Tax + `</p>`;
}

function imprimirDados2(x) {
  let divDados = document.getElementById('dados2');
  let ativo = rendaFixa[0].rendafixa[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Taxa: ` + ativo.Tax + `</p>`;
}

function imprimirDados3(x) {
  let divDados = document.getElementById('dados3');
  let ativo = rendaFixa[0].rendafixa[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Taxa: ` + ativo.Tax + `</p>`;
}

function imprimirDados4(x) {
  let divDados = document.getElementById('dados4');
  let ativo = rendaFixa[0].rendafixa[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Taxa: ` + ativo.Tax + `</p>`;
}

function imprimirDados5(x) {
  let divDados = document.getElementById('dados5');
  let ativo = rendaFixa[0].rendafixa[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Taxa: ` + ativo.Tax + `</p>`;
}

function imprimirDados6(x) {
  let divDados = document.getElementById('dados6');
  let ativo = rendaFixa[0].rendafixa[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Taxa: ` + ativo.Tax + `</p>`;
}

function imprimirDados7(x) {
  let divDados = document.getElementById('dados7');
  let ativo = rendaFixa[0].rendafixa[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Taxa: ` + ativo.Tax + `</p>`;
}

function imprimirDados8(x) {
  let divDados = document.getElementById('dados8');
  let ativo = rendaFixa[0].rendafixa[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Taxa: ` + ativo.Tax + `</p>`;
}

//Cripto


function imprimirTituloCripto1(x) {
  let divAtivo = document.getElementById('tituloCripto1');
  let ativo = Criptomoedas[0].criptomoedas[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirTituloCripto2(x) {
  let divAtivo = document.getElementById('tituloCripto2');
  let ativo = Criptomoedas[0].criptomoedas[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirTituloCripto3(x) {
  let divAtivo = document.getElementById('tituloCripto3');
  let ativo = Criptomoedas[0].criptomoedas[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirTituloCripto4(x) {
  let divAtivo = document.getElementById('tituloCripto4');
  let ativo = Criptomoedas[0].criptomoedas[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}


function imprimirSetorCripto1(x) {
  let divNomeAtivo = document.getElementById('SetorCripto1');
  let ativo = Criptomoedas[0].criptomoedas[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorCripto2(x) {
  let divNomeAtivo = document.getElementById('SetorCripto2');
  let ativo = Criptomoedas[0].criptomoedas[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorCripto3(x) {
  let divNomeAtivo = document.getElementById('SetorCripto3');
  let ativo = Criptomoedas[0].criptomoedas[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorCripto4(x) {
  let divNomeAtivo = document.getElementById('SetorCripto4');
  let ativo = Criptomoedas[0].criptomoedas[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirDadosCripto1(x) {
  let divDados = document.getElementById('dadosCripto1');
  let ativo = Criptomoedas[0].criptomoedas[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p>`;
}

function imprimirDadosCripto2(x) {
  let divDados = document.getElementById('dadosCripto2');
  let ativo = Criptomoedas[0].criptomoedas[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p>`;
}

function imprimirDadosCripto3(x) {
  let divDados = document.getElementById('dadosCripto3');
  let ativo = Criptomoedas[0].criptomoedas[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p>`;
}

function imprimirDadosCripto4(x) {
  let divDados = document.getElementById('dadosCripto4');
  let ativo = Criptomoedas[0].criptomoedas[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p>`;
}


//Variavel


function imprimirRendaVariavel1(x) {
  let divAtivo = document.getElementById('tituloRendaVariavel1');
  let ativo = rendaVariavel[0].rendavariavel[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirRendaVariavel2(x) {
  let divAtivo = document.getElementById('tituloRendaVariavel2');
  let ativo = rendaVariavel[0].rendavariavel[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirRendaVariavel3(x) {
  let divAtivo = document.getElementById('tituloRendaVariavel3');
  let ativo = rendaVariavel[0].rendavariavel[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirRendaVariavel4(x) {
  let divAtivo = document.getElementById('tituloRendaVariavel4');
  let ativo = rendaVariavel[0].rendavariavel[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirRendaVariavel5(x) {
  let divAtivo = document.getElementById('tituloRendaVariavel5');
  let ativo = rendaVariavel[0].rendavariavel[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirRendaVariavel6(x) {
  let divAtivo = document.getElementById('tituloRendaVariavel6');
  let ativo = rendaVariavel[0].rendavariavel[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirRendaVariavel7(x) {
  let divAtivo = document.getElementById('tituloRendaVariavel7');
  let ativo = rendaVariavel[0].rendavariavel[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirRendaVariavel8(x) {
  let divAtivo = document.getElementById('tituloRendaVariavel8');
  let ativo = rendaVariavel[0].rendavariavel[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}


function imprimirSetorRendaVariavel1(x) {
  let divNomeAtivo = document.getElementById('SetorRendaVariavel1');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorRendaVariavel2(x) {
  let divNomeAtivo = document.getElementById('SetorRendaVariavel2');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorRendaVariavel3(x) {
  let divNomeAtivo = document.getElementById('SetorRendaVariavel3');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorRendaVariavel4(x) {
  let divNomeAtivo = document.getElementById('SetorRendaVariavel4');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorRendaVariavel5(x) {
  let divNomeAtivo = document.getElementById('SetorRendaVariavel5');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorRendaVariavel6(x) {
  let divNomeAtivo = document.getElementById('SetorRendaVariavel6');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorRendaVariavel7(x) {
  let divNomeAtivo = document.getElementById('SetorRendaVariavel7');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorRendaVariavel8(x) {
  let divNomeAtivo = document.getElementById('SetorRendaVariavel8');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirDadosRendaVariavel1(x) {
  let divDados = document.getElementById('dadosRendaVariavel1');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosRendaVariavel2(x) {
  let divDados = document.getElementById('dadosRendaVariavel2');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosRendaVariavel3(x) {
  let divDados = document.getElementById('dadosRendaVariavel3');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosRendaVariavel4(x) {
  let divDados = document.getElementById('dadosRendaVariavel4');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosRendaVariavel5(x) {
  let divDados = document.getElementById('dadosRendaVariavel5');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosRendaVariavel6(x) {
  let divDados = document.getElementById('dadosRendaVariavel6');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosRendaVariavel7(x) {
  let divDados = document.getElementById('dadosRendaVariavel7');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosRendaVariavel8(x) {
  let divDados = document.getElementById('dadosRendaVariavel8');
  let ativo =  rendaVariavel[0].rendavariavel[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

//Fundos


function imprimirFundoImobiliario1(x) {
  let divAtivo = document.getElementById('tituloFundoImobiliario1');
  let ativo = FundoImobiliário[0].fundoImobiliário[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirFundoImobiliario2(x) {
  let divAtivo = document.getElementById('tituloFundoImobiliario2');
  let ativo = FundoImobiliário[0].fundoImobiliário[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirFundoImobiliario3(x) {
  let divAtivo = document.getElementById('tituloFundoImobiliario3');
  let ativo = FundoImobiliário[0].fundoImobiliário[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirFundoImobiliario4(x) {
  let divAtivo = document.getElementById('tituloFundoImobiliario4');
  let ativo = FundoImobiliário[0].fundoImobiliário[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirFundoImobiliario5(x) {
  let divAtivo = document.getElementById('tituloFundoImobiliario5');
  let ativo = FundoImobiliário[0].fundoImobiliário[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}



function imprimirSetorFundoImobiliario1(x) {
  let divNomeAtivo = document.getElementById('SetorFundoImobiliario1');
  let ativo = FundoImobiliário[0].fundoImobiliário[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorFundoImobiliario2(x) {
  let divNomeAtivo = document.getElementById('SetorFundoImobiliario2');
  let ativo = FundoImobiliário[0].fundoImobiliário[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorFundoImobiliario3(x) {
  let divNomeAtivo = document.getElementById('SetorFundoImobiliario3');
  let ativo = FundoImobiliário[0].fundoImobiliário[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorFundoImobiliario4(x) {
  let divNomeAtivo = document.getElementById('SetorFundoImobiliario4');
  let ativo = FundoImobiliário[0].fundoImobiliário[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorFundoImobiliario5(x) {
  let divNomeAtivo = document.getElementById('SetorFundoImobiliario5');
  let ativo = FundoImobiliário[0].fundoImobiliário[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}


function imprimirDadosFundoImobiliario1(x) {
  let divDados = document.getElementById('dadosFundoImobiliario1');
  let ativo = FundoImobiliário[0].fundoImobiliário[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosFundoImobiliario2(x) {
  let divDados = document.getElementById('dadosFundoImobiliario2');
  let ativo = FundoImobiliário[0].fundoImobiliário[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosFundoImobiliario3(x) {
  let divDados = document.getElementById('dadosFundoImobiliario3');
  let ativo = FundoImobiliário[0].fundoImobiliário[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosFundoImobiliario4(x) {
  let divDados = document.getElementById('dadosFundoImobiliario4');
  let ativo = FundoImobiliário[0].fundoImobiliário[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosFundoImobiliario5(x) {
  let divDados = document.getElementById('dadosFundoImobiliario5');
  let ativo = FundoImobiliário[0].fundoImobiliário[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

//AtivoExterior

function imprimirAtivoExterior1(x) {
  let divAtivo = document.getElementById('tituloAtivoExterior1');
  let ativo = ativoExterior[0].ativoexterior[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirAtivoExterior2(x) {
  let divAtivo = document.getElementById('tituloAtivoExterior2');
  let ativo = ativoExterior[0].ativoexterior[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirAtivoExterior3(x) {
  let divAtivo = document.getElementById('tituloAtivoExterior3');
  let ativo = ativoExterior[0].ativoexterior[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirAtivoExterior4(x) {
  let divAtivo = document.getElementById('tituloAtivoExterior4');
  let ativo = ativoExterior[0].ativoexterior[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirAtivoExterior5(x) {
  let divAtivo = document.getElementById('tituloAtivoExterior5');
  let ativo = ativoExterior[0].ativoexterior[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}

function imprimirAtivoExterior6(x) {
  let divAtivo = document.getElementById('tituloAtivoExterior6');
  let ativo = ativoExterior[0].ativoexterior[x];
  divAtivo.innerHTML = `<h4>` + ativo.Ativo + `</h4>`;
}


function imprimirSetorAtivoExterior1(x) {
  let divNomeAtivo = document.getElementById('SetorAtivoExterior1');
  let ativo = ativoExterior[0].ativoexterior[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorAtivoExterior2(x) {
  let divNomeAtivo = document.getElementById('SetorAtivoExterior2');
  let ativo = ativoExterior[0].ativoexterior[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorAtivoExterior3(x) {
  let divNomeAtivo = document.getElementById('SetorAtivoExterior3');
  let ativo = ativoExterior[0].ativoexterior[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorAtivoExterior4(x) {
  let divNomeAtivo = document.getElementById('SetorAtivoExterior4');
  let ativo = ativoExterior[0].ativoexterior[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorAtivoExterior5(x) {
  let divNomeAtivo = document.getElementById('SetorAtivoExterior5');
  let ativo = ativoExterior[0].ativoexterior[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}

function imprimirSetorAtivoExterior6(x) {
  let divNomeAtivo = document.getElementById('SetorAtivoExterior6');
  let ativo = ativoExterior[0].ativoexterior[x];
  divNomeAtivo.innerHTML = `<h3>` + ativo.Setor + `</h3>`;
}



function imprimirDadosAtivoExterior1(x) {
  let divDados = document.getElementById('dadosAtivoExterior1');
  let ativo = ativoExterior[0].ativoexterior[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosAtivoExterior2(x) {
  let divDados = document.getElementById('dadosAtivoExterior2');
  let ativo = ativoExterior[0].ativoexterior[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosAtivoExterior3(x) {
  let divDados = document.getElementById('dadosAtivoExterior3');
  let ativo = ativoExterior[0].ativoexterior[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosAtivoExterior4(x) {
  let divDados = document.getElementById('dadosAtivoExterior4');
  let ativo = ativoExterior[0].ativoexterior[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosAtivoExterior5(x) {
  let divDados = document.getElementById('dadosAtivoExterior5');
  let ativo = ativoExterior[0].ativoexterior[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}

function imprimirDadosAtivoExterior6(x) {
  let divDados = document.getElementById('dadosAtivoExterior6');
  let ativo = ativoExterior[0].ativoexterior[x];
  divDados.innerHTML = `<p>Categoria: ` + ativo.Categoria + `</p><p>Risco: ` + ativo.Risco + `</p><p>Div Yield: ` + ativo.DivYield + `</p>`;
}