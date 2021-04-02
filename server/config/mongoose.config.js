const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/pets_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
    .then(() => console.log('Established a connection with the dadabase'))
    .catch(err => console.log('Dadabase aint connected!', err));