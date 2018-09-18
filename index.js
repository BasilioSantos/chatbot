const Hapi = require("hapi");
const mongoose = require("mongoose");
const mongodb = "mongodb://127.0.0.1/chatbot";
const controllers = require("./controllers/index");

const server = Hapi.server({
  port: 3000,
  host: "localhost"
});

const init = async () => {
  await mongoose.connect(
    mongodb,
    { useNewUrlParser: true }
  );
  console.log(`connected to mongodb`);

  controllers.forEach(controller => {
    controller.router().forEach(route => {
      server.route(route);
    });
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
