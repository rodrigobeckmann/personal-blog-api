const PostModel = (sequelize, DataTypes) => {
  const User = sequelize.define("Post", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    content: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'Users',
        key:'id'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: false,
    }
  });

  PostModel.associate = (models) => {
    PostModel.belongsTo(models.User, {foreignKey: 'userId', as: 'user'});
  };

  return User;
}

module.exports = PostModel;