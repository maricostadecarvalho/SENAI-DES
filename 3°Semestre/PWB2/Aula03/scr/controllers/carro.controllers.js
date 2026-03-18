const prisma = require("../data/prisma");

const cadastrarCarro = async (req, res) => {
    const carro = req.body;
let carros = carro.placa.trim().toUpperCase();
if(carros.lenght < 7)
    console.log("Placa Invalida");

let placa = carro.placa;
if(carro.placa.some(p => p=placa))
    res.status(400).json({message: "Placa já existe"});
    const cadastrarCarro = await prisma.carro.create({
        data: carro
    });

    res.json(cadastrarCarro).status(201).end();
};

const listarCarros = async (req, res) => {
  const carros = await prisma.carros.findMany();

  res.json(carros).status(200).end();
};

const apagarCarro = async (req, res) => {
  const { id } = req.params;

  const carro = await prisma.carros.delete({
    where: { id },
  });

  res.json(carro).status(200).end();
};

const atualizarCarro = async (req, res) => {
  const { id } = req.params;
  const dados = req.body;

  const carro = await prisma.carros.update({
    where: { id },
    data: {
      placa: dados.placa.toUpperCase(),
      marcaModelo: dados.marcaModelo,
      ano: dados.ano,
    }

  });

  res.json(carro).status(200).end();
};

module.exports = {
  cadastrarCarro,
  listarCarros,
  apagarCarro,
  atualizarCarro,
};

