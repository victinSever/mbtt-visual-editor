import MForm from '../models/mform.model.js'
import mongoose from 'mongoose'
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/mbtt', {  useNewUrlParser: true });
//mongoose.Promise = global.Promise;

export {MForm}
