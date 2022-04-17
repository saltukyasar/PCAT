const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');
const ejs = require('ejs');
const path = require('path');
const photoController = require('./controllers/photoControllers');
const pageController = require('./controllers/pageControllers')

const app = express();

//connect DB
mongoose.connect('mongodb+srv://pcat:pcatapp@cluster0.9k0ar.mongodb.net/pcat-db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false
}).then(()=>{
  console.log('DB connected')
}).catch((err)=>{
  console.log(err)
})

//Template engine
app.set('view engine', 'ejs');

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//Routes
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

app.get('/about', pageController.getAboutPage);
app.get('/add', pageController.getAddPage);
app.get('/photos/edit/:id', pageController.getEditPage);


const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`sunucu ${port} portunda calisiyor...`);
});
