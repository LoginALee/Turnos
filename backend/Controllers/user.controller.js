const jwt = require ('jsonwebtoken');
const User = require('../auth.dao');
const bcrypt = require('bcrypt');
const SECRET_KEY = 'secretkey123';
const saltRounds = 10;


exports.createUser = (req, res, next) =>{
    var hash = bcrypt.hashSync(req.body.Pin, saltRounds);
    const newUser = {
        Name : req.body.Name,
        Email : req.body.Email,
        Pin: hash
    }
        
        if(req.body.Email == null || req.body.Email == '' ||
        req.body.Name == null || req.body.Name == '' ||
        req.body.Pin == null || req.body.Pin == '' ){

            res.send('Make sure to fill all the info required');
        }
        else{
            User.create(newUser,(err, user) =>{
            if(err && err.code === 11000) return res.status(409).send('Email already exist')
            if(err) return res.status(500).send('Server error');
        
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({  id: user.id },
            SECRET_KEY, {
                expiresIn: expiresIn
            });
            const dataUser = {
                Name: user.Name,
                Email: user.Email,
                accessToken: accessToken,
                expiresIn: expiresIn
            }
            res.send({dataUser});
            
            }); 
        }
    };

    exports.loginUser = (req, res, next) => {
        const userData = {
            Email: req.body.Email,
            Pin: req.body.Pin
        }

        User.findOne({Email: userData.Email}, (err, user) => {
             
            if(err) return res.status(500).send('Server error');

            if(!user){
                //Email no existe
                res.status(409).send({message: 'Email does not exist'});
            }
            else{
                const resultPin = bcrypt.compareSync(userData.Pin, user.Pin);
                if(resultPin){
                    const expiresIn = 24 *60*60;
                    const accessToken = jwt.sign({id: user.id}, SECRET_KEY, {expiresIn: expiresIn});

                    const dataUser = {
                        Name: user.Name,
                        Email: user.Email,
                        accessToken: accessToken,
                        expiresIn: expiresIn
                    }
                    res.send({dataUser});
                }
                else{
                    //Contraseña incorrecta
                    res.status(409).send({message: 'PIN incorrect'});
                }
            }
        })
    }
 
