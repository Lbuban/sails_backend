/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {

      dogBreed: {
        type: 'string',
        uppercase: 'string',
        required: true,
        unique: true
      },
      size: {
        type: 'string'
      },
      favoriteActivities: {
        type: 'string'
      },
      activityLevel: {
        type: 'integer'
      },
      about: {
        url: true
      },
      breedTemperament: {
        lowercase: 'string'
      },
    },
  };
