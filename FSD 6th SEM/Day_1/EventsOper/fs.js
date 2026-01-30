const fs = require("fs");

const readStream = fs.createReadStream("demo.txt");

readStream.on("open", () => {
  console.log("File opened");
});

readStream.on("data", (chunk) => {
  console.log("Reading data:", chunk.toString());
});

readStream.on("end", () => {
  console.log("File reading completed");
});

readStream.on("close", () => {
  console.log("File closed");
});

readStream.on("error", (err) => {
  console.log("Error:", err.message);
});
