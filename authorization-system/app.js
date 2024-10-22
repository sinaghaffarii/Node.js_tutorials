const express = require('express');
const AllRoutes = require("./router/index.routes");
const {notFoundError, errorHandler} = require("./utils/error-handling");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(AllRoutes);
app.use(notFoundError)
app.use(errorHandler)
app.listen(3000, () => {
    console.log("Server running on port 3000");
})
