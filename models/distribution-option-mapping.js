const mongoose = require('mongoose');

const distributionOptionMappingSchema = new mongoose.Schema({
  distributionId: {
    type: mongoose.Schema.Types.ObjectId, // or String if you're not using ObjectId
    required: true,
    ref: 'Distribution' // Optional reference to Distribution model
  },
  optionId: {
    type: mongoose.Schema.Types.ObjectId, // or String
    required: true,
    ref: 'Option' // Optional reference to Option model
  }
}, {
  timestamps: true
});

const DistributionOptionMapping = mongoose.model(
  'DistributionOptionMapping',
  distributionOptionMappingSchema
);

module.exports = DistributionOptionMapping;
