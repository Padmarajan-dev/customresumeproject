const mongo = require('mongoose');

const rating = mongo.Schema({
    userid: {
        type:String,
        require:true
    },
    resumeid: {
        type:String,
        require:true
    },
    stars: {
        type:Number,
        require:true
    }
});

module.exports = mongo.model('starrating',rating);