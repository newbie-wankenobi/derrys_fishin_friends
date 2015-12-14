var express = require('express'),
    router = express.Router();

// Require fishes controller
var FishesCtrl = require('../controllers/fishes'),
    UsersCtrl  = require('../controllers/users');


//||||||||||||||||||||||||||--
// USERS CRUD SERVICES
//||||||||||||||||||||||||||--
router.post('/login',       UsersCtrl.userAuth);
router.get('/users',        UsersCtrl.usersAll);
router.post('/users',       UsersCtrl.userCreate);
router.get('/users/:id',    UsersCtrl.userShow);
router.put('/users/:id',    UsersCtrl.userUpdate);
router.delete('/users/:id', UsersCtrl.userDelete);

//||||||||||||||||||||||||||--
// FISHES CRUD SERVICES
//||||||||||||||||||||||||||--
router.get('/fish/:id',      FishesCtrl.fishShow);
router.get('/fish',         FishesCtrl.fishIndex);
router.post('/fish',        FishesCtrl.fishCreate);
router.put('/fish/:id',      FishesCtrl.fishUpdate);
router.delete('/fish/:id',   FishesCtrl.fishDelete);

module.exports = router;
