import { Request, Response } from 'express';

export const code204 = (req: Request, res: Response) => {
    res.status(204).json({message: 'no content'});
}

export const code200 = (req: Request, res: Response, content?: any) => {
    res.status(200).json({message: 'ok', content});
}

export const token200 = (req: Request, res: Response, token?: any) => {
    res.status(200).json({message: 'ok', token});
}

export const code201 = (req: Request, res: Response) => {
    res.status(201).json({message: 'ok'});
}

export const code500 = (req: Request, res: Response, error: any) => {
    res.status(500).json({message: 'internal server error', error});
}

export const code400 = (req: Request, res: Response, attribute: any) => {
    res.status(400).json({message: `${attribute} already exists`});
}

export const code401 = (req: Request, res: Response) => {
    res.status(401).json({message: `Unauthorized`});
}


export const code403 = (req: Request, res: Response) => {
    res.status(403).json({message: `token not provided`});
}

export const code404 = (req: Request, res: Response) => {
    res.status(404).json({message: `Not found`});
}
