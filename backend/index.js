import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express();
mongoose.connect('mongodb+srv://martinilham15:2Azct32sNLJqNgj2@myserver.aw1tteh.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db = mongoose.connection
db.on('ereor',(error) => console.log(error))
db.once('open',()=>console.log('Database Connected'))

app.use(cors())
app.use(express.json())

app.listen(5000,()=> console.log("server berjalan..."))
 