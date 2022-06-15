const express = require("express");
const route = express.Router();
const Candidate = require("../modules/candidateList");
// POST ===============================================================
route.post("/", async (req, res) => {
    try {
        const candidateDet = await Candidate.create(req.body);
        return res.send(candidateDet);
    } catch (err) {
        console.log(err.message);
    }
});
// GET ==================================================================
route.get("", async (req, res) => {
    try {
        const allCandidate = await Candidate.find().lean().exec();
        return res.send(allCandidate);
    } catch (err) {
        console.log(err.message);
    }
});

route.get("/one/:id", async (req, res) => {
    const params = req.params.id;
    try {
        const allCandidate = await Candidate.findByIdAndUpdate(
            { _id: params },
            req.body
        )
            .lean()
            .exec();
        return res.send(allCandidate);
    } catch (err) {
        console.log(err.message);
    }
});
// Delete===================================================================
route.delete("/:id", async (req, res) => {
    const params = req.params.id;
    console.log(params);
    try {
        const deleteCandidate = await Candidate.deleteOne({
            _id: params,
        });
        res.send(deleteCandidate);
    } catch (err) {
        console.log(err.message);
    }
});

route.patch("/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const patchCandidate = await Candidate.findOneAndUpdate(
            _id,
            req.body,
            {}
        );
        res.send(patchCandidate);
    } catch (err) {
        console.log(err);
    }
});

module.exports = route;
