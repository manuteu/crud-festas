const router = require("express").Router()

// Services Router
const servicesRouter = require("./services")

router.use("/", servicesRouter);

// Party Router
const partyRouter = require("./party")

router.use("/", partyRouter);

module.exports = router