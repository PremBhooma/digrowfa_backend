const mongoose = require("mongoose")
const moment = require("moment");


const formSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    faq: [
        {
            question: {
                type: String,
                required: true
            },
            answers: [
                {
                    type: String,
                },
            ],
        },
    ],
    postDate: {
        type: String,
        default: moment().format("DD/MM/YYYY")
    },
    postTime: {
        type: String,
        default: moment().format("HH:mm")
    }
}, {
    timestamps: true
});

const FormModel = mongoose.model("formData", formSchema)

module.exports = {
    FormModel
}