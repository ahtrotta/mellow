const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: {
    type: String,
    required: [true, 'The Board title is required']
  },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
    required: [true, 'The Board ID is required']
  },
  position: {
    type: Schema.Types.Decimal128,
  },
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Card'
    }
  ],
}, {timestamps: true})


const List = mongoose.model('List', ListSchema);

module.exports = List;
