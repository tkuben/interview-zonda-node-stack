import { body, param, query } from 'express-validator';

class  SubdivisionValidator {
    checkCreateSubdivision() {
        return [
            body('id').optional().isUUID(4).withMessage('The ID must be a UUIDV4'),
        ]
    }

    checkReadSubdivision() {
        return [
            query("limit")
                .notEmpty()
                .withMessage("The query limit should not be empty")
                .isInt({min:1, max:10})
                .withMessage("The limit value must be between 1 and 10"),
            query("offset")
                .optional()
                .isNumeric()
                .withMessage("The offset must be a number")
        ]
    }

    checkIdParam() {
        return [
            param("id")
                .notEmpty()
                .withMessage("The value should not be empty")
                .isUUID(4)
                .withMessage("The value should be UUIDv4")
        ]
    }
}

export default new SubdivisionValidator();