import express from 'express';
import { handleusers } from './controller/userController.js';

const app=express();
app.set('view engine','ejs');

app.get('/user',handleusers);
app.listen(3200); 