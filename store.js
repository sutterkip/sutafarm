(function () {
  var cards = Array.prototype.slice.call(document.querySelectorAll("[data-animal-type]"));
  var filters = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var select = document.querySelector("#animal");
  var method = document.querySelector("#purchase-method");
  var total = document.querySelector("#order-total");
  var orderForm = document.querySelector("#order-form");
  var confirmation = document.querySelector("#confirmation");

  function money(value) {
    return "$" + Number(value).toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }

  function updateTotal() {
    if (!select || !method || !total) return;
    var selected = select.options[select.selectedIndex];
    var flat = Number(selected.getAttribute("data-price"));
    var weight = Number(selected.getAttribute("data-weight"));
    var perPound = Number(selected.getAttribute("data-weight-price"));
    var due = method.value === "pound" ? weight * perPound : flat;
    total.textContent = money(due);
  }

  filters.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter");
      filters.forEach(function (item) {
        item.classList.toggle("is-active", item === button);
      });
      cards.forEach(function (card) {
        var animalType = card.getAttribute("data-animal-type");
        card.hidden = filter !== "All" && animalType !== filter;
      });
    });
  });

  Array.prototype.slice.call(document.querySelectorAll("[data-select-animal]")).forEach(function (button) {
    button.addEventListener("click", function () {
      if (!select) return;
      select.value = button.getAttribute("data-select-animal");
      updateTotal();
      document.querySelector("#checkout").scrollIntoView({ behavior: "smooth" });
    });
  });

  if (select) select.addEventListener("change", updateTotal);
  if (method) method.addEventListener("change", updateTotal);

  if (orderForm) {
    orderForm.addEventListener("submit", function (event) {
      event.preventDefault();
      updateTotal();
      confirmation.classList.add("is-visible");
      confirmation.focus();
    });
  }

  updateTotal();
}());
