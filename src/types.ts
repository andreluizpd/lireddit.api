import { Redis } from 'ioredis';
import { Request, Response } from 'express';
import session from 'express-session';

declare module 'express-session' {
  interface SessionData {
    userId?: number;
  }
}

export type MyContext = {
  req: Request & { session: session.SessionData };
  res: Response;
  redis: Redis;
};
