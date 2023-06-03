// Header Behavior
const toggleMenuBtn = document.getElementById("toggleMenuBtn");
const navbarContainer = document.getElementById("navbarContainer");
const navbarMenu = document.getElementById("navbarMenu");
console.log(navbarMenu);
toggleMenuBtn.addEventListener("click", ({ currentTarget }) => {
  currentTarget.classList.toggle("active");
  navbarContainer.classList.toggle(
    "active",
    currentTarget.classList.contains("active")
  );
});
navbarContainer.addEventListener("click", (e) => {
  if (e.target !== navbarMenu && !navbarMenu.contains(e.target))
    toggleMenuBtn.click();
});
// landing Behavior
const landingSectionEl = document.querySelector(".landing");
const phoneColorListEl = document.querySelector(".landing .phone-color-list");
const phoneImg = document.getElementById("phoneImg");
[...phoneColorListEl.children].forEach((phoneColorItem) => {
  phoneColorItem.addEventListener("click", () => {
    phoneImg.src = phoneColorItem.firstElementChild.src;
    phoneImg.alt = phoneColorItem.firstElementChild.alt;
    console.log(phoneColorItem.dataset.phoneColor);
    landingSectionEl.style.backgroundColor = phoneColorItem.dataset.phoneColor;
    localStorage.setItem(
      "landing-backgroundcolor",
      phoneColorItem.dataset.phoneColor
    );
    localStorage.setItem("landing-image", phoneImg.src);
  });
});

// Retrieving from local storage
retrieveItemFromLs(
  "landing-backgroundcolor",
  (e) => (landingSectionEl.style.backgroundColor = e)
);
retrieveItemFromLs("landing-image", (e) => (phoneImg.src = e));

function retrieveItemFromLs(itemKeyInLs, callback) {
  const localStorageItem = localStorage.getItem(itemKeyInLs);
  if (localStorageItem) {
    callback(localStorageItem);
  }
  return !!localStorageItem;
}
