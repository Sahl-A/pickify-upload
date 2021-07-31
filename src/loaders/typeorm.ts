import { createConnection, Connection, useContainer } from 'typeorm';
import config from '../config';
import { Container } from 'typedi';

export default async (): Promise<Connection> => {
  useContainer(Container);
  return await createConnection(config.database);
};
