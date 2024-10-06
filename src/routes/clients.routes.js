import {Router} from 'express';
import { getAllClients, getClient, createdClient, deleteClient, updateClient} from '../controllers/clients.controller.js';

const router = Router()


router.get('/clients', getAllClients )
router.get('/client/:id', getClient )

router.patch('/clientUpdate/:id', updateClient )

router.post('/newClient', createdClient )

router.delete('/deleteClient/:id', deleteClient)


export default router
