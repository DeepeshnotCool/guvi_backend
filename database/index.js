const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose
  .connect("mongodb+srv://deepeshranjankhatrimongodb:<password>@cluster0.ekhhqgf.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));
