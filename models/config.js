const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/infodb')
.then(()=>{
    console.log("Db connected")

})
.catch((err)=>{
    console.log(err)
})