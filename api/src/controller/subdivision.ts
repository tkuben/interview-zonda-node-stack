import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { SubdivisionInstance } from '../model/subdivision';


class SubdivisionController {
    async create(req: Request, res: Response) {
        const id = uuidv4();
        try {
            const record = await SubdivisionInstance.create({ ...req.body, id })
            return res.json({ record, msg: "Successfully Created" })
        } catch (e) {
            return res.json({ msg: "failed to create", status: 500 });
        }
    }

    async read(req: Request, res: Response) {
        try {
            const limit = req.query?.limit as number | undefined;
            const offset = req.query?.offset as number | undefined;
            const records = await SubdivisionInstance.findAll({ where:{}, limit, offset })
            return res.json(records);
        } catch (e) {
            return res.json({ msg: "failed to read", status: 500 });

        }
    }

    async readById(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await SubdivisionInstance.findOne({ where:{ id } })
            return res.json(record);
        } catch (e) {
            return res.json({ msg: "failed to read", status: 500 });

        }
    }

    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await SubdivisionInstance.findOne({ where:{ id } })

            if(!record) {
                return res.json({msg: "Cannot find existing record"})
            }
            // TODO
            const updatedRecord = await record.update({});
            return res.json({ record: updatedRecord });
        } catch (e) {
            return res.json({ msg: "failed to read", status: 500 });

        }
    }

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const record = await SubdivisionInstance.findOne({ where:{ id } })

            if(!record) {
                return res.json({msg: "Cannot find existing record"})
            }
            const deletedRecord = await record.destroy();
            return res.json({ record: deletedRecord });
        } catch (e) {
            return res.json({ msg: "failed to read", status: 500 });

        }
    }
}

export default new SubdivisionController();