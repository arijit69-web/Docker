const express = require("express");
const router = express.Router();
const { InfoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const airportRoutes = require("./airport-routes");
const flightRoutes = require("./flight-routes");
const axios = require("axios");

/*
router.get("/info", (req, res) => {
  // Link : http://localhost:3000/api/v1/info
  return res.json({ ms: "OK" });
});
*/
// Replace the above code using this current clean code

router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", airportRoutes);
router.use("/flights", flightRoutes);

router.get("/info", InfoController.info);


router.get("/callingPythonService", async (req, res) => {
  const response = await axios.get("http://python_service:3005/home");
  return res.json({ message: response.data });
});
module.exports = router;
