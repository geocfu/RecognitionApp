import Realm from 'realm';

const AutomaticDataRecognitionSchema = {
  name: 'Activity',
  properties: {
    type: 'string',
    yearAndMonth: 'string',
    day: 'string',
    //time: 'string',
  },
};

export default new Realm({
  schema: [AutomaticDataRecognitionSchema],
  deleteRealmIfMigrationNeeded: true,
});
