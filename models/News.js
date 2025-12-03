import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    guardianId: { type: String, index: true, unique: true },
    webTitle: { type: String, required: true },
    webUrl: { type: String, required: true },
    sectionName: { type: String },
    webPublicationDate: { type: Date },
    thumbnail: { type: String },
    trailText: { type: String },
    savedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("News", newsSchema);
