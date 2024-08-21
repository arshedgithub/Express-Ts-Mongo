import dotenv from 'dotenv';

const result = dotenv.config();
if (result.error) {
    dotenv.config({ path: '.env' });
}

import { logger } from './logger';

if (process.env.MONGO_URL == null) {
    logger.log({
        level: 'error',
        message: 'No MONGO_URL environment variable found. Please set it in your.env file.'
    })
}

import { app } from './app';
app.listen(app.get('port'), () => console.log(`Server listening at http://localhost:${app.get('port')}`));
