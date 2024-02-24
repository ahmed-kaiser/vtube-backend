import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error", error);
    });

    app.listen(port, () => {
      console.log(`Server is listening at port ${port}`);
    });
  })
  .catch((error) => console.log("Database Connection Error", error));
