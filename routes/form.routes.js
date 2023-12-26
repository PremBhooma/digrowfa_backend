const { Router } = require("express")

const { FormModel } = require("../models/Form.model")

const formRouter = Router()

formRouter.post("/create", async (req, res) => {
    const { name, description, faq } = req.body

    const new_form = new FormModel({
        name,
        description,
        faq
    })

    try {
        await new_form.save()
        res.send({ msg: "Form Created" })
    } catch (err) {
        res.send({ msg: "Form Failed to Create" })
        console.log(err)
    }
})

formRouter.get("/", async (req, res) => {
    try {
        const form = await FormModel.find();
        res.send({ msg: "Form Fetched Successfully", form: form });
    } catch (error) {
        console.error(error);
        res.send({ msg: "Form Failed to Fetched" });
    }
});

module.exports = {
    formRouter
}