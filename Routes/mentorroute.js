import express from 'express';
import { allmentors, assigningstudent, changementor, mentor, particularmentor, previousmentor } from '../Controllers/mentorcont.js';

const router=express.Router();

router.post('/creatementor',mentor);
router.get('/getallmentors',allmentors);
router.put('/assigningstudent/:id',assigningstudent);
router.put('/changementor/:id',changementor);
router.get('/particularmentor/:id',particularmentor);
router.get('/previousmentor/:id',previousmentor);



export default router;