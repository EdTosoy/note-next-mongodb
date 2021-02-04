import mongoose, { Schema, Document } from "mongoose";

export interface NoteType extends Document {
  title: string;
  description: string;
}

const NoteSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    maxlength: [40, "Title cannot be more than 40 characters"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [200, "Description cannot be more than 200 characters"],
  },
});
export default mongoose.models.Note || mongoose.model<NoteType>("Note", NoteSchema);
