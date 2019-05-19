module.exports = function(sequelize, DataTypes) {
 // Add code here to create a Post model
 // This model needs a title, a body, and a category
 // Don't forget to 'return' the post after defining
 var Post = sequelize.define("Post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len:[1]
    }
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
    len: [1]
  },
  category: {
    type: DataTypes.STRING,
    defaultValue: "Personal"
  }
 });
 return Post;
};
