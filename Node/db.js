const mongoose = require('mongoose');
const uri='mongodb+srv://deshan:deshan2233@cluster0.tb7ov.mongodb.net/CrudDB?retryWrites=true&w=majority'


const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false
           
        });

        console.log('MongoDB connected!!');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};

connectDB();

module.exports=mongoose;