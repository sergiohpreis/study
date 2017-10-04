const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./user');
const env = require('../../.env');

const emailRegex = /\S+@\S+\.\S+/;
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;

// Método que envia erros referentes ao DB
const sendErrorsFromDB = (res, dbErrors) => {
    const errors = [];
    _.forIn(dbErrors.errors, error => errors.push(error.message));
    return res.status(400).json({errors});
};

// Função responsável por efetuar o login
const login = (req, res, next) => {
    const email = req.body.email || '';
    const password = req.body.password || '';

    // Procura usuário com o e-mail informado na req
    User.findOne({email}, (err, user) => {
        if (err) {
            return sendErrorsFromDB(res, err);
        } else if (user && bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign(user, env.authSecret, {
                expiresIn: '1 day'
            });
            const {name, email} = user;
            res.json({name, email, token});
        } else {
            return res.status(400).send({errors: ['Usuário/Senha inválidos']});
        };
    });
};

// Verifica se o token é valido
const validateToken = (req, res, next) => {
    const token = req.body.token || '';

    jwt.verify(token, env.authSecret, (err, decoded) => 
        res.status(200).send({valid: !err}));
};

// Função responsável por efetuar o cadastro
const signup = (req, res, next) => {
    const name = req.body.name || '';
    const email = req.body.email || '';
    const password = req.body.password || '';
    const confirmPassword = req.body.confirm_password || '';

    if (!email.match(emailRegex)) {
        return res.status(400).send({errors: ['O e-mail informado está inválido']});
    };

    if (!password.match(passwordRegex)) {
        return res.status(400).send({
            errors: [
                'Senha precisar ter: uma letra maiúscula, uma letra minúscula, um número, uma caractere especial(@#$%) e tamanho entre 6-20'
            ]
        });
    };

    const salt = bcrypt.genSaltSync();
    // Cria um hash do password
    const passwordHash = bcrypt.hashSync(password, salt);
    if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
        return res.status(400).send({errors: ['Senhas não conferem']});
    };

    User.findOne({email}, (err, user) => {
        if (err) {
            return sendErrorsFromDB(res, err);
        } else if (user) {
            return res.status(400).send({errors: ['Usuário já cadastrado']});
        } else {
            // Enviando o hash para o banco por questões de segurança
            const newUser = new User({name, email, password: passwordHash});
            newUser.save(err => {
                if (err) {
                    return sendErrorsFromDB(res, err);
                } else {
                    login(req, res, next);
                };
            });
        };
    });
};

module.exports = {login, signup, validateToken};