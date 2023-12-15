import { itemsArray } from "../globals.js"
import lazyLoad from "../observers/lazy-load-images-intersection-observer.js"

const itemsList = document.getElementById("items-list")
const itemTemplate = document.getElementById("item-template")

export default async function itemsDisplay() {
  const ITEM_TPLS_API = "items.json"
  const loadingMessage = document.getElementById("loading-message")
  try {
    const response = await fetch(ITEM_TPLS_API)

    loadingMessage.textContent = "Loading..."

    if (response.ok) {
      const items = await response.json()
      items.forEach((item) => {
        const ITEM_TPL = itemTemplate.content.cloneNode(true)
        const itemContainer = ITEM_TPL.querySelector(".item-container")

        const category = ITEM_TPL.querySelector("[data-category]")
        category.setAttribute("data-category", item.category)

        const title = ITEM_TPL.querySelector("[data-title]")
        title.textContent = item.title

        const thumbnail = ITEM_TPL.querySelector("[data-src]")
        thumbnail.setAttribute("data-src", item.thumbnail)
        lazyLoad(ITEM_TPL)

        const description = ITEM_TPL.querySelector("[data-description]")
        description.textContent = item.description

        itemsList.append(itemContainer)
        itemsArray.push(itemContainer)
      })

      loadingMessage.textContent = ""
    } else {
      loadingMessage.textContent =
        "Something went wrong. Please try again later..."
    }
  } catch (e) {
    console.log(e)
  }
}
