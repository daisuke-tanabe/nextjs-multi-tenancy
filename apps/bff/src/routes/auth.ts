import { Router } from 'express';

import { signIn } from '../services';

export const authRouter = Router();

authRouter.post('/signin', signIn);
