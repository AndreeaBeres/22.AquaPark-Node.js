const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {title: "Welcome to Aqua Park" });
});
router.get("/attractions", (req,res) => {
    res.render("attractions", {title: "Attractions"});
});
router.get("/tickets", (req, res) => {
    res.render("tickets", {title: "Tickets"});
});
router.get("/gallery", (req, res) => {
    res.render("gallery", {title: "Gallery"});
});
router.get("/contact", (req,res) => { 
    res.render("contact", {title: "Contact"});
});

module.exports = router;