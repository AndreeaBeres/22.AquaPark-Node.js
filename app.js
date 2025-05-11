const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes");

app.set ("view engine", "ejs");
app.use (express.static(path.join(__dirname, "public")));
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
