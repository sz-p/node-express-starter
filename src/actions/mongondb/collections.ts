import mongoose from './connect';

const collectionDocument = new mongoose.Schema({
  UUID: { type: String, index: true, required: true },
})

const testCollectionModel = mongoose.model('test', collectionDocument)

export default {
  testCollectionModel
};
