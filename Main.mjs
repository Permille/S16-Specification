import Express from "express";
import fs from "fs/promises";
import path from "path";
import url from 'url';
import { marked } from "marked";

const app = Express();
const port = 32766;

app.get("/", async function(req, res){
  res.writeHead(200, {
    "Content-Type": "text/html"
  }).end(await fs.readFile("./Template.html", {"encoding": "utf8"}));
});
app.get("/Style.css", async function(req, res){
  res.writeHead(200, {
    "Content-Type": "text/css"
  }).end(await fs.readFile("./Style.css", {"encoding": "utf8"}));
});
app.get("/ClientMain.mjs", async function(req, res){
  res.writeHead(200, {
    "Content-Type": "application/javascript"
  }).end(await fs.readFile("./ClientMain.mjs", {"encoding": "utf8"}));
});

app.get("/api/:category/:name", async function(req, res){
  const {category, name} = req.params;
  const IllegalCharacters = /[^a-zA-Z\-0-9]/;
  if(IllegalCharacters.test(category) || IllegalCharacters.test(name)){
    return void res.status(403).send("Illegal file name");
  }
  const filePath = path.join(path.dirname(url.fileURLToPath(import.meta.url)), "./Documentation", category, name + ".md");
  console.log(filePath);
  try{
    const text = await fs.readFile(filePath, {"encoding": "utf8"});
    console.log(marked(text));
    return void res.writeHead(200, {
      "Content-Type": "text/html"
    }).end(marked(text));
  } catch(error){
    return void res.status(404).send("Not found");
  }
});

app.listen(port, function(){
  console.log(`Started server on port ${port}.`);
});