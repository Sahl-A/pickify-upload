import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import typeOrmLoader from './typeorm';
import { useContainer as typeOrmUseContainer } from 'typeorm';
import jobsLoader from './jobs';
import Logger from './logger';
//We have to import at least all the events once so they can be triggered
import './events';

export default async ({ expressApp }) => {
  await typeOrmLoader();
  Logger.info('✌️ DB loaded and connected!');

  // It returns the agenda instance because it's needed in the subsequent loaders
  dependencyInjectorLoader();
  Logger.info('✌️ Dependency Injector loaded');

  // await jobsLoader({ agenda });
  // Logger.info('✌️ Jobs loaded');

  await expressLoader({ app: expressApp });
  Logger.info('✌️ Express loaded');
};
