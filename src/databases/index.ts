import config from 'config';
import { dbConfig } from '@interfaces/db.interface';

const { host, port, database }: dbConfig = config.get('dbConfig');

export const dbConnection = {
  // url: `mongodb://${host}:${port}/${database}`,
  url: 'mongodb://u2bmzx3w9p6qhy0z2blo:aM2yWTOdEgcZ35yjgPfZ@bpbzeqddsujbzu4-mongodb.services.clever-cloud.com:27017/bpbzeqddsujbzu4',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
