const CommentModel = (sequelize, DataTypes) => {
  const User = sequelize.define("Comment", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Posts',
        key: 'id'
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  });

  CommentModel.associate = (models) => {
    CommentModel.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };

  CommentModel.associate = (models) => {
    CommentModel.belongsTo(models.Post, { foreignKey: 'postId', as: 'post' });
  }

  return User;
}



module.exports = CommentModel;