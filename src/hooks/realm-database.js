import Realm from 'realm';

const AutomaticDataRecognitionSchema = {
  name: 'Activity',
  properties: {
    type: 'string',
    date: 'string',
    time: 'string',
  },
};

export default new Realm({schema: [AutomaticDataRecognitionSchema]});
