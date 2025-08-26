import mongoose from 'mongoose'

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@back-end.iaqbpwu.mongodb.net/?retryWrites=true&w=majority&appName=back-end`
    )

    console.log('Conectado ao MongoDB!')
  } catch (error) {
    console.log('Erro ao conectar ao MongoDB:', error)
  }
}

export default connectToDatabase
