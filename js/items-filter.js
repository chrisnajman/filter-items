import { itemsArray } from "./globals.js"

const filters = document.getElementById("filters")
const filterButtons = document.querySelectorAll(".filter-btn")
const categoryHeading = document.getElementById("category-heading")
const categoryIntro = document.getElementById("category-intro")

export default function itemsFilter() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      let itemCategory = e.target.getAttribute("data-filter")

      let buttonText = e.target.textContent

      if (!document.startViewTransition) {
        updateActiveButton(e.target)
        filterItems(itemCategory)
        populateCategoryHeading(buttonText)
        populateArticleIntro(buttonText)
      }

      document.startViewTransition(() => {
        updateActiveButton(e.target)
        filterItems(itemCategory)
        populateCategoryHeading(buttonText)
        populateArticleIntro(buttonText)
      })
    })
  })

  function updateActiveButton(newButton) {
    filters.querySelector(".active").classList.remove("active")
    newButton.classList.add("active")
  }

  function filterItems(filter) {
    itemsArray.forEach((item) => {
      let itemCategory = item.getAttribute("data-category")

      if (filter === "all" || filter === itemCategory) {
        item.removeAttribute("hidden")
      } else {
        item.setAttribute("hidden", "")
      }
    })
  }

  function populateCategoryHeading(buttonText) {
    categoryHeading.textContent = buttonText
  }

  function populateArticleIntro(buttonText) {
    switch (buttonText) {
      case "All":
        categoryIntro.textContent = "All colour items."
        break
      case "Red":
        categoryIntro.textContent = "Only red items."
        break
      case "Green":
        categoryIntro.textContent = "Only green items."
        break
      case "Blue":
        categoryIntro.textContent = "Only blue items."
        break
      case "Orange":
        categoryIntro.textContent = "Only orange items."
        break
      case "Purple":
        categoryIntro.textContent = "Only purple items."
        break
      case "Yellow":
        categoryIntro.textContent = "Only yellow items."
        break
      default:
        categoryIntro.textContent = "All colour items."
    }
  }
}
