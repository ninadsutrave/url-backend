import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connect = async () => {

    mongoose.connect(
        process.env.DATABASE_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    ).then(() => {
      console.log('Connection successful')
    }).catch((err) => {
      console.log(err.message)
    })
}

export default connect