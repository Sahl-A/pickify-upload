import { ConnectionOptions } from 'typeorm';

const logging: any =
  process.env.DB_LOGGING === 'true' ? true : process.env.DB_LOGGING === 'false' ? false : [process.env.DB_LOGGING];

const typeOrmConfig: ConnectionOptions = {
  type: 'postgres',
  migrationsRun: true,
  host: process.env.APP_DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.APP_DB_USERNAME || 'postgres',
  password: process.env.APP_DB_PASSWORD || 'postgres',
  database: 'upload',
  synchronize: true,
  logging: logging || false,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['dist/src/entities/*.js'],
  migrations: ['dist/src/shared/migrations/*.js'],
  cli: {
    entitiesDir: 'src/**/entity',
    migrationsDir: 'src/shared/migrations',
    subscribersDir: 'src/shared/subscribers',
  },
};

export default typeOrmConfig;
