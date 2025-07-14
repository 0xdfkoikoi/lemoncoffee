const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzGxyNbgpZAJUV40u4NFVEv5SvvioGWD1e2Z56FzMgy/dev"

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
