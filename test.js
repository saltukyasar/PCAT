const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
// Photo.create({
//     title:"Photo Title 1",
//     description: "Photo description 2",
// })

// Photo.find({}, (err, data) => {
//   console.log(data);
// });

// const id="624b5d598cf60aa12f9e25d2"

// Photo.findByIdAndUpdate(
//     id,
//     {
//         title:"photo title 111 updated",
//         description:"photo description 111 updated",
//     },
//     {
//         new: true
//     },
//     (err,data)=>{
//         console.log(data);
//     }

// )
const id ="624b5e0a7b74a4204a8f89e9";

Photo.findByIdAndDelete(id,(err,data)=>{
    console.log('photo is removed');
})
