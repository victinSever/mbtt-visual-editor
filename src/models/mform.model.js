import mongoose from 'mongoose'
const Schema = mongoose.Schema;


const schema = new Schema({
        id: { type: String, unique: true, required: true },
        name: { type: String, required: true },
        rules: { type: Object, required: true },
        data: { type: Array, required: false }
    }
);

schema.set('toJSON', { virtuals: true });

export default mongoose.model('MForm', schema);

