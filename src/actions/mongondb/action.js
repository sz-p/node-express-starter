import mongoose from './connect';

const User = mongoose.model('user',new mongoose.Schema({
  user:{type:String,require:true},
  age:{type:Number,require:true}
}))
