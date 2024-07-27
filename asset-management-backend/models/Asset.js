// models/Asset.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assetSchema = new Schema({
    name: String,
    type: String,
    location: String,
    status: { type: String, enum: ["active", "inactive", "maintenance"] },
    lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Asset", assetSchema);