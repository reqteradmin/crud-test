import { Request, Response, NextFunction, Router } from "express";
import customer from "../Common/Models/customerModel";
import customerVM from "../Common/ViewModels/customerViewModel";
import CustomersManager from "../Logic/CustomersManager";
import ResponseHandler from "../Utility/ResponseHandler";
const { ObjectId } = require('mongodb');

export class CustomersController {
    router: Router;
    manager: CustomersManager;
    source: customer;
    destination: customerVM;

    constructor() {
        this.router = Router();
        this.manager = new CustomersManager();
        this.init();
    }

    init() {
        this.router.get("/", this.getAll);
        this.router.post("/", this.add);
        this.router.get("/:id", this.getOne);
        this.router.put("/:id", this.update);
        this.router.patch("/:id", this.patch);
        this.router.delete("/:id", this.delete);
        this.router.post("/all/:skip/:take", this.getAllByPagination);
    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result = await this.manager.find({});
            ResponseHandler(res, result, null, this.source, this.destination)
        }
        catch (err) {
            next(err);
        }
    };

    getOne = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result = await this.manager.findOne({ _id: ObjectId(req.params.id) });
            ResponseHandler(res, result, null, this.source, this.destination)
        }
        catch (err) {
            next(err);
        }
    };

    add = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result = await this.manager.create(req.body);
            ResponseHandler(res, result, null)
        }
        catch (err) {
            next(err);
        }
    };

    update = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result = await this.manager.update(req.params.id, req.body);
            ResponseHandler(res, result, null)
        }
        catch (err) {
            next(err);
        }
    };

    patch = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result = await this.manager.update(req.params.id, req.body);
            ResponseHandler(res, result, null)
        }
        catch (err) {
            next(err);
        }
    };

    delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result = await this.manager.delete(req.params.id);
            ResponseHandler(res, result, null)
        }
        catch (err) {
            next(err);
        }
    };

    getAllByPagination = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let result = await this.manager.getAllByPagination(req.params.skip, req.params.take, req.body.filter);
            ResponseHandler(res, result, null, this.source, this.destination)
        }
        catch (err) {
            next(err);
        }
    };
}

export default new CustomersController().router;