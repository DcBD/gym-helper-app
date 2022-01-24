import * as express from 'express'

const router = express.Router();

router
    .route('/:routeId')
    .get();
    