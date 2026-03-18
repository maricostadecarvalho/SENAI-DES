const prisma = require("../data/prisma");

const limiteParticipates = async (usuarios, eventosid) => {
   const eventos = await prisma.eventos.findUnique({
    where: { id : eventoid },
    include: {
        inscricoes: true
    }
   });

   const numeroParticipates = eventos.inscricoes.filter(inscricoes => inscricoes.status == "CONFIRMADA").length;

   console.log(numeroParticipates);
};

module.exports ={
    limiteParticipates
}