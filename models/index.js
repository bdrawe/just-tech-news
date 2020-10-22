const User = require('./User');
const Post = require('./Post');

//create many associations
User.hasMany(Post, {
    foreignKey: 'user-id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Post };
