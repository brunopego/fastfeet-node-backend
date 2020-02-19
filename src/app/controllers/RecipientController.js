import Recipient from '../models/Recipients';

class RecipientController {
  async store(req, res) {
    const recipient = await Recipient.create(req.body);
    return res.json(recipient);
  }

  async update(req, res) {
    const recipient = await Recipient.findOne({ where: { id: req.params.id } });

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exist' });
    }

    const updatedRecipient = await recipient.update(req.body);

    return res.json(updatedRecipient);
  }
}

export default new RecipientController();
