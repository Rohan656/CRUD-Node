
const mongoose = require('mongoose')
const db = 'mongodb+srv://Rohan:2zpQf1PuRYMTWgBv@cluster0.f0gicbk.mongodb.net/test?retryWrites=true&w=majority'
mongoose.set('strictQuery', false);

mongoose.connect(db).then(()=>{
    console.log('successfully connected mongodb')
}).catch((err)=>{
    console.log('unsuccessfull', err)
})

module.exports = db