const prisma = require("../data/prisma");
const cadastrarCliente = async (req, res) => {
    const cliente = req.body;

    const cadastrarCliente = await prisma.cliente.create({
        data: cliente
    });

    res.json(cadastrarCliente).status(201).end();
};

const listarClientes = async (req, res) => {
  const clientes = await prisma.clientes.findMany();

  res.json(clientes).status(200).end();
};

const apagarCliente = async (req, res) => {
  const { id } = req.params;

  const cliente = await prisma.clientes.delete({
    where: { id },
  });
  res.json(cliente).status(200).end();
};

const atualizarCliente = async (req, res) => {
  const { id } = req.params;
  const dados = req.body;
  
  const cliente = await prisma.clientes.update({
    where: { id },
    data: dados,
  });
  res.json(cliente).status(200).end();
};

module.exports = {
  cadastrarCliente,
  listarClientes,
  apagarCliente,
  atualizarCliente,
};
