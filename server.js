const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')

app.use(cors());

require('./server/config/mongoose.config');
app.use(express.json(), express.urlencoded({ extended: true }));

const AllRoutes = require('./server/routes/football.routes');
AllRoutes(app);

app.listen(port, () => console.log("The server is all fired up on port 8000"));
