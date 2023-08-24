import Router from "./router.js"
import Changes from "./change.js"


const router = new Router()
router.add('/', "/src/pages/home.html")
router.add('/univ', "/src/pages/univ.html")
router.add('/explo', "/src/pages/explo.html")
router.add(404, "/src/pages/404.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

Changes()