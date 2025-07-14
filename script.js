const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwkr21lieb9MK8WUfw7NkRjvxGkGDFsfL5uzPuOBwVF2DRwDELQmW4kGRWcZsUoy9i13g/exec"; // replace with yours

document.getElementById("menuForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const menuData = {
    name: form.menuName.value,
    category: form.category.value,
    price: parseFloat(form.price.value),
    active: form.active.value,
  };

  try {
    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      body: JSON.stringify(menuData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      alert("Menu item saved to Google Sheet!");
      form.reset();
    } else {
      alert("Error saving to sheet.");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    alert("Failed to connect to Google Apps Script.");
  }
});
