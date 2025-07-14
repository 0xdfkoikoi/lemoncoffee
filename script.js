console.log("Inventory system loaded!");
document.getElementById("menuForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const menuData = {
    name: form.menuName.value,
    category: form.category.value,
    price: parseFloat(form.price.value),
    active: form.active.value,
  };

  console.log("Menu Item:", menuData);

  // Show preview (for now)
  document.getElementById("menuPreview").innerHTML = `
    <p><strong>${menuData.name}</strong> - ${menuData.category} - Rp${menuData.price} (${menuData.active})</p>
  `;

  // TODO: Later - send to Google Sheets
  form.reset();
});
