import dotenv from 'dotenv';

const result = dotenv.config();
if (result.error) {
    dotenv.config({ path: '.env' });
}

import { app } from './app';
app.listen(app.get('port'), () => console.log(`Server listening at http://localhost:${app.get('port')}`));
