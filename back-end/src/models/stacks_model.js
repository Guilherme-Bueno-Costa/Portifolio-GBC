import { Schema, model } from 'mongoose'

const StackSchema = Schema({
  description: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  iconFile: {
    type: String,
    required: true,
  },
})

// Cria o model da stack. Nos argumentos , o primeiro é o nome da entidade e o segundo o Schema

const StackModel = model('Stack', StackSchema)

export default StackModel
