// import data json from another folder
const data = require("./data/drug.json");
data.data.map((item) => {
  console.log(`id: ${item.id}, name : ${item.name}`);
});
