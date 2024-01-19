import { Router } from 'express';

import { authRouter } from './auth'
import { healthRouter } from './health'

export const routes = Router();

routes.use('/health', healthRouter).use('/auth', authRouter)