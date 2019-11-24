const JsonGA = require(__dirname + "/../lib/JsonGA.js");
const fs = require("fs");
const picture = new JsonGA.Picture(__dirname + "/demo.jsong");

picture.draw().then((pic) => {
    pic.save(__dirname + "/demo_draw.png")
})