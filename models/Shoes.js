module.exports = (sequelize, Model, DataTypes) => {
  class Shoes extends Model {}
  Shoes.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      btn: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      shadow: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      topRated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        defaultValue: false,
      },
      popularSales: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "shoes",
    }
  );
  return Shoes;
};
