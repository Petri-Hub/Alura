import mongoose from 'mongoose'

mongoose.Schema.Types.String.set('validate', {
   validator: (value) => value.trim() !== '',
   message: (props) => `O campo '${props.path}' está em branco.`
})