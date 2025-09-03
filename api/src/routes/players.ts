import { Router } from 'express';
import { Player } from '@nhl-fanteasy/shared-domain';

export const router = Router();

const players: Player[] = [];

router.get('/', (req, res) => {
  res.json({ players });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const player = players.find((p) => p.id.id === id);
  if (!player) {
    return res.status(404).json({ message: 'Player not found' });
  }
  return res.json({ player });
});


