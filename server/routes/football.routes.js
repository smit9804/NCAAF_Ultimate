const Football = require('../controllers/football.controller');

module.exports = app => {
    //return all footballs
    app.get("/api/footballs/", Football.findAllFootballs);
    // return one football
    app.get("/api/footballs/:id", Football.findOne);
    //create a new football
    app.post("/api/footballs/new", Football.createFootball);
    //update a football
    app.put("/api/footballs/update/:id", Football.updateOne);
    //delete a football
    app.delete("/api/footballs/delete/:id", Football.deleteTheFootball);
}