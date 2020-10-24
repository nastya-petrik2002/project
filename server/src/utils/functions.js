const bd = require('../db/models/index');
const CONSTANTS = require('../../constants');

module.exports.createWhereForAllContests = (
  contestId, industry, awardSort, selectedContestTypes) => {
  let object = {
    where: {},
    order: [],
  };
  if(selectedContestTypes){
    Object.assign(object.where, {contestType: getPredicateTypes(selectedContestTypes)});
  }
  if (typeIndex) {
    Object.assign(object.where, { contestType: getPredicateTypes(typeIndex) });
  }
  if (contestId) {
    Object.assign(object.where, { id: contestId });
  }
  if (industry) {
    Object.assign(object.where, { industry: industry });
  }
  if (awardSort) {
    object.order.push(['prize', awardSort]);
  }
  Object.assign(object.where, {
    status: {
      [ bd.Sequelize.Op.or ]: [
        CONSTANTS.CONTEST_STATUS_FINISHED,
        CONSTANTS.CONTEST_STATUS_ACTIVE,
      ],
    },
  });
  object.order.push(['id', 'desc']);
  return object;
};

function getPredicateTypes (index) {
  return {[ bd.Sequelize.Op.or ]: array};
}
