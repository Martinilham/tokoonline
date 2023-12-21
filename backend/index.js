import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express();
mongoose.connect('mongodb://localhost/saiq',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db = mongoose.connection
db.on('ereor',(error) => console.log(error))
db.once('open',()=>console.log('Database Connected'))

app.use(cors())
app.use(express.json())

app.listen(5000,()=> console.log("server berjalan..."))
 