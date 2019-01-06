const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Handling GET to /products'
  });
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Handling POST to /products'
  });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: "That's the special sauce",
      id: id
    });
  } else {
    res.status(200).json({
      message: ('You passed ID ' + id)
    });
  }
});

router.patch('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Updtated product!'
  });
});

router.delete('/:productId', (req, res, next) => {
  res.status(200).json({
    message: 'Deleted product!'
  });
});

module.exports = router;