import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true,

    },
    //for createdAt, updatedAt => e.g message.createdAt: 15:30, message.updatedAt
}, { timestamps: true });

const Message = mongoose.model("Message", messageSchema)
export default Message;
