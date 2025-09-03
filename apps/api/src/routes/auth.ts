import { Router } from 'express';

export const router = Router();

router.get('/yahoo/login', (req, res) => {
  res.status(501).json({ message: 'Yahoo OAuth2 login not implemented yet.' });
});

router.get('/yahoo/callback', (req, res) => {
  res
    .status(501)
    .json({ message: 'Yahoo OAuth2 callback not implemented yet.' });
});
