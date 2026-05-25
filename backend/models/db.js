const mongoose =  require('mongoose')
const mongo_url = process.env.MONGO_CONN;

  
mongoose.connect(mongo_url)
    .then(() => {
        console.log('MOngoDB connectered...');
    }).catch((err) => {
        console.log('MOngoDB connection error : ' , err);
 })