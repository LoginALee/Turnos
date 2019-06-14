const mongoose = require('mongoose');
const userSchema = require('./models/user.model');

userSchema.statics = {
    create: function (data, cb) {
        const user = new this(data);
        user.save(cb);
    },

    login: function(query, cb){
        this.find(query, cb);
    }
}

const userModel = mongoose.model('Users', userSchema);
module.exports = userModel;