const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

mongoose
  .connect("mongodb://127.0.0.1:27017/guvi-auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));
