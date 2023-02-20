const express = require("express");
require("./database/mongoose");
const RoomRouter = require("./routers/room");
const RoomTypeRouter = require("./routers/roomtype");
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(RoomRouter);
app.use(RoomTypeRouter);

app.listen(port, () =>  {
  console.log("Success");
});
