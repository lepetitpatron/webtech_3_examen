const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db;

MongoClient.connect('mongodb://localhost:27017/examen', (err, database) => {
  if (err) return console.log(err)
  db = database.db('examen')
  app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

// Redirect to list
app.get('/', (req, res) => {
    res.redirect('/list')
 })
 
 // List all overtredingen
 app.get('/list', (req, res) => {
   db.collection('overtredingen').find().toArray((err, result) => {
     if (err) return console.log(err)
     res.render('list.ejs', { overtredingen: result })
   })
 })

 // Show the search form
app.get('/search', (req, res) => {
    res.render('search.ejs', { overtreding: '' })
 })

 
// Find a product
app.post('/search', (req, res) => {
 var query = { opnameplaats_straat: req.body.straat }
 db.collection('overtredingen').find(query).toArray(function(err, result) {
    if (err) return console.log(err)
    if (result == '')
       res.render('search_not_found.ejs', {})
    else
       res.render('search_result.ejs', { overtredingen: result })
 });
})

// Find overtreding
app.post('/search-snelheid', (req, res) => {
 var query = { aantal_overtredingen_snelheid : {$gt: parseInt(req.body.snelheid) - 1} }
 db.collection('overtredingen').find(query).toArray(function(err, result) {
   
  if (err) return console.log(err)
    if (result == '')
       res.render('search_not_found.ejs', {})
    else
       res.render('search_result.ejs', { overtredingen: result })
 });
})

