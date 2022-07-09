import { Router } from 'express';
import { getMessage, createMessage} from '../../controller/message/message.controller'

const router = Router();
router.get('/', getMessage);
router.post('/', createMessage);
export default router;