import Sequelize, { Model } from 'sequelize';

class Tools extends Model {
	static init(sequelize) {
		super.init(
			{
				id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true,
					get: function () {
						return this.getDataValue('id');
					},
					set: function (value) {
						return this.setDataValue('id', value);
					}
				},
				link: {
					type: Sequelize.STRING,
					get: function () {
						return this.getDataValue('link');
					},
					set: function (value) {
						return this.setDataValue('link', value);
					}
				},
				title: {
					type: Sequelize.STRING,
					get: function () {
						return this.getDataValue('title');
					},
					set: function (value) {
						return this.setDataValue('title', value);
					}
				},
				description: {
					type: Sequelize.STRING,
					get: function () {
						return this.getDataValue('description');
					},
					set: function (value) {
						return this.setDataValue('description', value);
					}
				},
				tags: {
					type: Sequelize.TEXT,
					get: function () {
						return JSON.parse(this.getDataValue('tags'));
					},
					set: function (value) {
						return this.setDataValue('tags', JSON.stringify(value));
					}
				}
			},
			{
				sequelize
			}
		);
		return this;
	}
}

export default Tools;
