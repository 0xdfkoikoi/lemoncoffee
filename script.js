const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxh_YtjY9Rn5AoXD2_GaMdLjsO9uV8uVn4bL9opf4MufgmPgpIxEp69H7BhjVY6_N6C/exec"; // Replace this with your real URL

document.getElementById("menuForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const menuData = {
    name: form.menuName.value,
    category: form.category.value,
    price: parseFloat(form.price.value),
    active: form.active.value,
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

    if (response.ok && text.includes("Success")) {
      alert("✅ Menu item saved!");
      form.reset();
    } else {
      alert("❌ Failed to save. Check the script or sheet name.");
    }
  } catch (err) {
    console.error(err);
    alert("❌ Could not connect to Google Apps Script.");
  }
});
