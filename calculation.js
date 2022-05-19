//setting the button value
document
  .getElementById("memory-8gb-btn")
  .addEventListener("click", function () {
    document.getElementById("extra-memory-cost").innerText = 0;
    calculateTotalCost();
  });
document
  .getElementById("memory-16gb-btn")
  .addEventListener("click", function () {
    document.getElementById("extra-memory-cost").innerText = 180;
    calculateTotalCost();
  });
document
  .getElementById("storage-256gb-btn")
  .addEventListener("click", function () {
    document.getElementById("extra-storage-cost").innerText = 0;
    calculateTotalCost();
  });
document
  .getElementById("storage-512gb-btn")
  .addEventListener("click", function () {
    document.getElementById("extra-storage-cost").innerText = 100;
    calculateTotalCost();
  });
document
  .getElementById("storage-1tb-btn")
  .addEventListener("click", function () {
    document.getElementById("extra-storage-cost").innerText = 180;
    calculateTotalCost();
  });
document
  .getElementById("regular-delivery-btn")
  .addEventListener("click", function () {
    document.getElementById("delivery-cost").innerText = 0;
    calculateTotalCost();
  });
document
  .getElementById("express-delivery-btn")
  .addEventListener("click", function () {
    document.getElementById("delivery-cost").innerText = 20;
    calculateTotalCost();
  });

// Calcutate total cost function

function calculateTotalCost() {
  const baseCost = document.getElementById("base-cost").innerText;
  const extraMemoryCost =
    document.getElementById("extra-memory-cost").innerText;
  const extraStorageCost =
    document.getElementById("extra-storage-cost").innerText;
  const delivererCost = document.getElementById("delivery-cost").innerText;

  const totalCost =
    parseInt(baseCost) +
    parseInt(extraMemoryCost) +
    parseInt(extraStorageCost) +
    parseInt(delivererCost);
  document.getElementById("total-cost").innerText = totalCost;
  document.getElementById("cost-promotion").innerText = totalCost;
  document.getElementById("promo-validation").innerText = "";
}

document.getElementById("promotion-btn").addEventListener("click", function () {
  afterPromotionCost();
});
// calculate cost after apply promo code
function afterPromotionCost() {
  const appliedCode = document.getElementById("promo-code").value;
  const currentCost = document.getElementById("total-cost").innerText;
  const costAfterPromotion = (parseInt(currentCost) * 80) / 100;
  if (appliedCode == "stevekaku") {
    console.log(costAfterPromotion);
    document.getElementById("cost-promotion").innerText = costAfterPromotion;
    document.getElementById("promo-code").value = "";
    document.getElementById("promo-validation").innerText =
      "Successfully Applied Promo Code !!";
  } else {
    document.getElementById("promo-validation").innerText =
      "Invalid Promo Code";
  }
}
