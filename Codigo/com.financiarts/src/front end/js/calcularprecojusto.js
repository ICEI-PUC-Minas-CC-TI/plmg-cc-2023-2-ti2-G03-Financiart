function calculateFairPrice() {
    var earnings = parseFloat(document.getElementById('earnings').value);
    var growthRate = parseFloat(document.getElementById('growth-rate').value);

    if (isNaN(earnings) || isNaN(growthRate)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    var fairPrice = Math.sqrt(22.5 * earnings * growthRate);
    document.getElementById('fair-price').textContent = fairPrice.toFixed(2);
}
