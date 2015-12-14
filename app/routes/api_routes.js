var express = require('express'),
    router = express.Router();

// Require fishes controller
var FishesCtrl = require('../controllers/fishes'),
    UsersCtrl  = require('../controllers/users');


//||||||||||||||||||||||||||--
// USERS CRUD SERVICES
//||||||||||||||||||||||||||--
router.post('/login',                              UsersCtrl.userAuth);
router.get('/users',                               UsersCtrl.usersAll);
router.post('/users',                              UsersCtrl.userCreate);
router.get('/users/:id',    UsersCtrl.tokenVerify, UsersCtrl.userShow);
router.put('/users/:id',    UsersCtrl.tokenVerify, UsersCtrl.userUpdate);
router.delete('/users/:id', UsersCtrl.tokenVerify, UsersCtrl.userDelete);

//||||||||||||||||||||||||||--
// FISHES CRUD SERVICES
//||||||||||||||||||||||||||--
router.get('/fish/:id',     UsersCtrl.tokenVerify, FishesCtrl.fishShow);
router.get('/fish',         UsersCtrl.tokenVerify, FishesCtrl.fishIndex);
router.post('/fish',        UsersCtrl.tokenVerify, FishesCtrl.fishCreate);
router.put('/fish/:id',     UsersCtrl.tokenVerify, FishesCtrl.fishUpdate);
router.delete('/fish/:id',  UsersCtrl.tokenVerify, FishesCtrl.fishDelete);

module.exports = router;
