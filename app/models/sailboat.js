const mongoose = require('mongoose')

const sailboatSchema = new mongoose.Schema(
	{
        name: {
			type: String,
			required: true,
		},
        manufacturer: {
			type: String,
			required: true,
		},
		length: {
			type: Number,
			required: true,
		},
        beam: {
			type: Number,
			required: true,
		},
        hulls: {
			type: Number,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Sailboat', sailboatSchema)