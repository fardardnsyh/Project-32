import mongoose from 'mongoose'

const JobSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: [true, 'Please provide company'],
            maxlength: 50,
        },
        position: {
            type: String,
            required:[true, 'Please provide position'],
            maxlength: 100,
        },
        status: {
            type: String,
            enum: ['interview', 'declined', 'pending'],
            default:'pending',
        },
        jobType: {
            type: String,
            enum: ['full-time', 'part-time', 'internship', 'contract'],
            default: 'full-time',
        },
        jobStyle: {
            type: String,
            enum: ['remote', 'hybrid', 'on-site'],
            default: 'on-site',
        },
        jobLocation: {
            type: String,
            default: 'Singapore',
            required: true,
        },
        notes: {
            type: String,
            default: '',
            maxlength: 500,
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: [true, 'Please provide user']
        },
    }, { timestamps: true }
)

export default mongoose.model('Job', JobSchema)