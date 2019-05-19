module.exports = function(sequelize,DataTypes){
  return Todo = sequelize.define("todo", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN


  })



}
