const Football = require('../models/football.model');



//to Create a new Football
module.exports.createFootball = (req, res) => {
    Football.create(req.body)
        .then(newFootball => res.json({football: newFootball}))
        .catch(err => res.json({message: "Sorry champ, I can't make that football happen", error: err}));
}

//to Read all Footballs
module.exports.findAllFootballs = (req, res) => {
    Football.find({})
        .then(allFootballs => res.json({ footballs: allFootballs}))
        .catch(err => res.json({message: 'Something went wrong', error: err}));
}


//to Read a single Football
module.exports.findOne = (req, res) => {
    Football.findOne({_id : req.params.id})
        .then(oneFootball => res.json({ football: oneFootball}))
        .catch(err => res.json({message: "It ain't here, big dog!", error:err}));
}

//to Update a Football
module.exports.updateOne = (req, res) => {
    console.log(req.body);
    console.log(req.params.id)
    Football.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true, context: 'query'} )
        .then(updateFootball => res.json({ football: updateFootball}))
        .catch(err => res.json({message: "Well, looks like i can't update that one. Something went wrong!", error: err}));
}


//to Delete a Football
module.exports.deleteTheFootball = (req, res) => {
    Football.deleteOne({_id: req.params.id})
        .then(deletedFootball => res.json({ football: deletedFootball}))
        .catch(err => res.json({message: "Too good to delete... Something went wrong buddy!", error: err}))
}