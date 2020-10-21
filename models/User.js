const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create our User model
class User extends Model {}

//define table columns and configuration
User.init(
    {
        id: {
            //use the special Sequelize DataTypes object provide what type of data it is
            type: DataTypes.INTEGER,
            //this is the equivalent of SQL's `NOT NULL` option
            allowNull: false,
            // instruct that this is the Primary Key
            primaryKey: true,
            //turn on auto increment
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            //there cannot be any duplicate email values in this table
            unique: true,
            //if allowNull is set of false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true
            }
        },
        // define a pw column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //this means the pw must be at least four characters long
                len: [4]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
        //TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

        //pass in our imported sequelize connection (the direction connection to our database)
        //don't automatically create createdAt/updatedAt timestamp fields timestamp: false;
        //don't pluralize name of database table freezeTableName: true,
        //use underscores instead of camel-casing(i.e. `comment_text` and not `commentText) underscored: true,
        //make it so our model name stays lowercase in the database modelName: 'user'
    }
);

module.exports = User;