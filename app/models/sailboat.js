const mongoose = require('mongoose')

const sailboatSchema = new mongoose.Schema(
	{
        name: {
			type: String,
			required: true,
		},
        brand: {
			type: String,
			required: true,
		},
		length: {
			type: String,
			required: true,
		},
        beam: {
			type: String,
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