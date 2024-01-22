import { Router } from 'express';

import { jwtVerifier} from '../middleware'

import { authRouter } from './auth'
import { healthRouter } from './health'
import { protectRouter } from './protect'


export const routes = Router();

routes
  .use('/health', healthRouter)
  .use('/auth', authRouter)
  .use(jwtVerifier)
  .use('/protect', protectRouter)