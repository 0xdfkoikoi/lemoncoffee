const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxmXWrPwNhvpe51bhISU0uBzRlI5jPxcntYN6hcOuZsrBIldDvzTErGEAtmcNE6eDpdbg/exec";

document.getElementById("menuForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const menuData = {
    menuName: form.menuName.value,
    category: form.category.value,
    price: parseFloat(form.price.value),
    active: form.active.checked, // Assuming "active" is a checkbox
  };

  console.log("Sending data:", menuData);

  try {
    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      body: JSON.stringify(menuData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const text = await response.text();
    console.log("Response from Google Apps Script:", text);

    if (response.ok) {
      alert("✅ Menu item submitted successfully!");
      form.reset();
    } else {
      alert("❌ Failed to submit menu item. Please check the server response.");
    }
  } catch (err) {
    console.error(err);
    alert("❌ An error occurred while submitting the menu item.");
  }
});