const mongoose = require('mongoose');
const MakeYear = require('./MakeYear');


// Use native promises
mongoose.Promise = global.Promise;

const connect = url => {
    // Database connection
    mongoose.connect(url, {
        useMongoClient: true
    });

    const db = mongoose.connection;
    db.on('error', () => console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log('Connected to database.'));
};

const getAll = () => MakeYear.find().then(docs => {
    return docs.map(d => d.toJSON());
});

const get = id => MakeYear.findById(id).then(d => d.toJSON());

const add = ({ make, year }) => MakeYear.create({ make, year });

const update = (id, { make, year }) => MakeYear.findByIdAndUpdate(id, { make, year });

const remove = id => MakeYear.findByIdAndRemove(id);

module.exports = {
    connect,
    getAll,
    get,
    add,
    update,
    remove
};
