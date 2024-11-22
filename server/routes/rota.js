const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  // Importando o JWT
const User = require('../model/usuario');
const Cerimonialista = require('../model/cerimonialista');
const router = express.Router();

// Rota para registrar um novo usuário
router.post('/register', async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Verificar se o email já está em uso
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'E-mail já cadastrado' });
    }

    // Criptografar a senha
    const hashedPassword = await bcrypt.hash(senha, 10);

    // Criar o novo usuário
    const user = await User.create({
      email,
      senha: hashedPassword
    });

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar usuário' });
  }
});

// Rota para login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Verificar se a senha está correta
    const isPasswordValid = await bcrypt.compare(password, user.senha);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    // Gerar um token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },  // Payload
      'secreta',  // Chave secreta
      { expiresIn: '1h' }  // Expiração do token (1 hora)
    );

    // Retornar o token e o papel do usuário
    res.json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});
router.get('/users', async (req, res) =>{
  try{
    const users = await User.findAll();
    res.json(users);
  
    } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuario' });
  }

});



// Rota para logout
router.post('/logout', async (req, res) => {
  try {
    // Não há necessidade de fazer algo no backend para invalidar o token,
    // mas podemos registrar no servidor que o usuário fez logout.
    // O cliente deve remover o token localmente.

    // No caso de alguma sessão do lado servidor (caso use algo além de JWT), aqui poderia ser removido o token.

    console.log('Usuário fez logout com sucesso');

    return res.status(200).json({ message: 'Logout realizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao realizar o logout' });
  }
});



//Registro Cerimonialista 

router.post('/registerC', async (req, res) => {
  try {
    const { nome, telefone, email, whatsapp, instagram, descricao } = req.body;

    // Verificar se o email já está em uso
    const existingCerimonialista = await Cerimonialista.findOne({ where: { email } });
    if (existingCerimonialista) {
      return res.status(400).json({ error: 'E-mail já cadastrado' });
    }

    // Criar o novo usuário
    const cerimonialista = await Cerimonialista.create({
      nome, telefone, email, whatsapp, instagram, descricao
    });

    res.status(201).json({ message: 'Cerimonialista cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar cerimonialista' });
  }
});

router.get('/cerimonialistas', async (req, res) =>{
  try{
    const cerimonialistas = await Cerimonialistas.findAll();
    res.json(cerimonialistas);
  
    } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cerimonialista' });
  }

})

module.exports = router;


