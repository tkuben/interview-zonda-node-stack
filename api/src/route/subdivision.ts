import express from "express";

import SubdivisionValidator from '../validators/subdivision';
import Middleware from '../middleware';
import SubdivisionController from '../controller/subdivision';

const subdivisionRouter = express.Router();

subdivisionRouter.post(
    "/",
    SubdivisionValidator.checkCreateSubdivision(),
    Middleware.handleValidationErrors,
    SubdivisionController.create
);

subdivisionRouter.get(
    '/',
    SubdivisionValidator.checkReadSubdivision(),
    Middleware.handleValidationErrors,
    SubdivisionController.read
);

subdivisionRouter.get(
    '/:id',
    SubdivisionValidator.checkIdParam(),
    Middleware.handleValidationErrors,
    SubdivisionController.readById
);

subdivisionRouter.put(
    '/:id',
    SubdivisionValidator.checkIdParam(),
    Middleware.handleValidationErrors,
    SubdivisionController.update
);

subdivisionRouter.delete(
    '/:id',
    SubdivisionValidator.checkIdParam(),
    Middleware.handleValidationErrors,
    SubdivisionController.delete
);

export default subdivisionRouter;