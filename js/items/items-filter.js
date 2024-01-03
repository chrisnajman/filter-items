import { itemsArray } from "../globals.js"

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
        categoryIntro.textContent = "All colours."
        break
      case "Red":
        categoryIntro.textContent =
          "Red is at the long wavelength end of the visible spectrum, next to orange and opposite violet."
        break
      case "Green":
        categoryIntro.textContent =
          "Green is between cyan and yellow on the visible spectrum."
        break
      case "Blue":
        categoryIntro.textContent =
          "Blue lies between violet and cyan on the spectrum of visible light."
        break
      case "Orange":
        categoryIntro.textContent =
          "Orange is between yellow and red on the spectrum of visible light."
        break
      case "Purple":
        categoryIntro.textContent =
          "Purple, created by combining red and blue pigments, is similar in appearance to violet light."
        break
      case "Yellow":
        categoryIntro.textContent =
          "Yellow is between green and orange on the spectrum of light."
        break
      default:
        categoryIntro.textContent = "All colours."
    }
  }
}
