var mongoose = require('mongoose');

module.exports = mongoose.model('CityEvent', {
    text: {
        type: String,
        default: ''
    }
});