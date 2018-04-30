const web3 = require('../eth/web3')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let title = {
  title: "Distributed Blogging!",
  }

let sampleArticles = {
  articles: [
    {text: "This is a simple sample article"},
    {text: "Article 2.  This just in.  My cat's breath smells like cat food."},
    {text: "Article 3. Cashbet coin now worth a million dollars a token"},
    {text: "FOOOOOOOOOOOO"}
  ],
}

app.use( bodyParser.json() )
app.use( express.static('dist'))

app.get('/', (request, response) => {
  response.send("Express time")
})

app.get( '/data', (request, response) => response.send( title ))

app.post( '/article', (request, response) => {
  console.log("hello?");
  //Do your solidity stuff to post an article
  response.send(web3)
})

app.get('/web3debug', (request, response) => {
  const dedium = require('../eth/Dedium')
  debugger;
  response.send(dedium)
})

app.get( '/article', (request, response) => {
  response.send(sampleArticles)
})

app.listen( 3000, () => console.log("Listening on port 3000 "))