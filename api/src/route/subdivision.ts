import express from "express";

import SubdivisionValidator from '../validators/subdivision';
import Middleware from '../middleware';
import SubdivisionController from '../controller/subdivision';

const subdivisionRouter = express.Router();

subdivisionRouter.post(
    "/",
    SubdivisionValidator.checkCreateSubdivision(),
    Middleware.handleValidationErors,
    SubdivisionController.create
);

subdivisionRouter.get(
    '/',
    SubdivisionValidator.checkReadSubdivision(),
    Middleware.handleValidationErors,
    SubdivisionController.read
);

subdivisionRouter.get(
    '/:id',
    SubdivisionValidator.checkIdParam(),
    Middleware.handleValidationErors,
    SubdivisionController.readById
);

subdivisionRouter.put(
    '/:id',
    SubdivisionValidator.checkIdParam(),
    Middleware.handleValidationErors,
    SubdivisionController.update
);

subdivisionRouter.delete(
    '/:id',
    SubdivisionValidator.checkIdParam(),
    Middleware.handleValidationErors,
    SubdivisionController.delete
);

export default subdivisionRouter;