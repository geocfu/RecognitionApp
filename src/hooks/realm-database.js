import Realm from 'realm';

const AutomaticDataRecognitionSchema = {
  name: 'Activity',
  properties: {
    type: 'string',
    date: 'string',
    time: 'int',
  },
};

export default new Realm({
  schema: [AutomaticDataRecognitionSchema],
  deleteRealmIfMigrationNeeded: true,
});
