import mongoose from 'mongoose'
async function dbconnect(){
    await mongoose.connect('mongodb://localhost:27017/collage')
    const schema=mongoose.Schema({
        name:String,
        age:Number,
        email:String
    })
    const studentmodel=mongoose.model('student',schema)
    const result=studentmodel.find()
    console.log(result)


}
dbconnect();