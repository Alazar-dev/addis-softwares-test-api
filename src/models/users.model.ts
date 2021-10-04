import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }

});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
