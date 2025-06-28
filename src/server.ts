import app from "./app";
import configs from "./app/config";
import mongoose from "mongoose";

async function main() {
  try {
    //connects database to our app through mongoose driver
    await mongoose.connect(configs.database_url as string);
    //The app.listen() function in an Express.js app starts the HTTP server, allowing it to accept incoming requests on a specified port.
    app.listen(configs.port, () => {
      console.log(`Example app listening on port ${configs.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
