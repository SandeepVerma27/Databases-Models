import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonsedWidth: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    BloodGroup: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
      required: true,
      enum: ['M', 'F', 'O'],
    },
    addmittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);

const PatientSchema = mongoose.model('PatientSchema', patientSchema);
