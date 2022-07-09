import express,  {Application} from "express";
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import { db } from '../database/connection';
import * as routerController from '../routes/routes';

export class Server {
    private app: Application
    private readonly port: string;
    private api = {
        message: '/v1/message'
    };

    constructor() {
        this.app = express();
        this.port =  process.env.PORT || "4200";
        this.middleware();
        this.dbConnection().then((): void => {console.log(`Connected to db`)});
        this.routes();
    }

    private middleware(): void{
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(compression());
    }

    private async dbConnection() {
        try {
            await db.authenticate();
        } catch (error: any) {
            throw new Error(`Error connection: ${error}`);
        }
    }

    private routes(): void {
        this.app.use(this.api.message, routerController.routerMessage);
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`server running in port: ${this.port}`);
        })
    }
}