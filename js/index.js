const ITEM_TPLS_API = "./items.json"
import themeSwitcher from "./theme-switcher.js"
import articleHeaderIntersectionObserver from "./observers/article-header-intersection-observer.js"
import itemsFilter from "./items-filter.js"
import itemsDisplay from "./items-display.js"

themeSwitcher()
articleHeaderIntersectionObserver()
itemsFilter()
itemsDisplay(ITEM_TPLS_API)
