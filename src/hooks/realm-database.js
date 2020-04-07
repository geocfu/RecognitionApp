import Realm from 'realm';

const AutomaticDataRecognitionSchema = {
  name: 'Activity',
  properties: {
    type: 'string',
    yearAndMonth: 'string',
    day: 'string',
    timestamp: 'string',
  },
};

export default new Realm({
  schema: [AutomaticDataRecognitionSchema],
  deleteRealmIfMigrationNeeded: true,
});
