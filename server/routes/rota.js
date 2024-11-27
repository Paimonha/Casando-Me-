const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // Importando o JWT
const User = require("../model/usuario");
const Cerimonialista = require("../model/cerimonialista");
/*const { default: Cadastroc } = require('../../client/src/Pages/Cadastro_C/cadastroC');*/
const router = express.Router();

// Rota para registrar um novo usuário
router.post("/register", async (req, res) => {
  try {
    const { email, senha } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "E-mail já cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    const user = await User.create({
      email,
      senha: hashedPassword,
    });

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar usuário" });
  }
});
router.get("/register", async (req, res) => {
  const usuario = await User.findAll();
  res.json(usuario);
});
router.put("/register/:id", async (req, res) => {
  const { id } = req.params;
  const { email, senha } = req.body;
  await User.update({ email, senha }, { where: { id } });
  res.json({ message: "Usuário alterado com sucesso" });
});
router.delete("/register/:id", async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.json({ message: "Usuário deletado!" });
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.senha);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Senha inválida" });
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ error: "Erro ao fazer login" });
  }
});
router.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuario" });
  }
});

router.post("/logout", async (req, res) => {
  try {
    console.log("Administrador fez logout com sucesso");

    return res.status(200).json({ message: "Logout realizado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar o logout" });
  }
});

//Rota Cerimonialista

router.post("/registroCeri", async (req, res) => {
  try {
    const { nome, email, telefone, whatsapp, instagram, descricao } = req.body;

    const existingCeri = await Cerimonialista.findOne({ where: { email } });
    if (existingCeri) {
      return res.status(400).json({ error: "E-mail já cadastrado" });
    }

    const ceri = await Cerimonialista.create({
      nome,
      email,
      telefone,
      whatsapp,
      instagram,
      descricao,
    });

    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao cadastrar usuário" });
  }
});

router.get("/registroCeri", async (req, res) => {
  const cerimonialista = await Cerimonialista.findAll();
  res.json(cerimonialista);
});
router.put("/registroCeri/:id", async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone, whatsapp, instagram, descricao } = req.body;
  await Cerimonialista.update(
    { nome, email, telefone, whatsapp, instagram, descricao },
    { where: { id } }
  );
  res.json({ message: "Usuário alterado com sucesso" });
});
router.delete("/registroCeri/:id", async (req, res) => {
  const { id } = req.params;
  await Cerimonialista.destroy({ where: { id } });
  res.json({ message: "Usuário deletado!" });
});


module.exports = router;
