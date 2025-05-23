const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    distributionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Distribution",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

wishlistSchema.index({ userId: 1, distributionId: 1 }, { unique: true });

module.exports = mongoose.model("Wishlist", wishlistSchema);
