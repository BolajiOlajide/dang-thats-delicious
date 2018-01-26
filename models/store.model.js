const mongoose = require('mongoose');
const slug = require('slugs');

mongoose.Promise = global.Promise;

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name'
  },
  slug: String,
  description: {
    type: String,
    trim: true
  },
  tags: [String]
});

// pre-save hook for saving slug
storeSchema.pre('save', function(next) {
  if (!this.isModified('name')) {
    next(); // to skip it
    return; // to stop the function from executing
  }
  this.slug = slug(this.name);
  next();
  // TODO: Make more resilient so stores are unique.
});

module.exports = mongoose.model('Store', storeSchema);
