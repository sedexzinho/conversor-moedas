import "dotenv/config";
import  fastify  from "fastify";


const server = fastify();

const converterSchema = {
  schema:{
    query:{
      type:'object',
      required: ['from', 'to', 'amount'],
        properties: {
          from: {type: 'string', minLength:3, maxLength: 3},
          to: {type: 'string', minLength:3, maxLength:3},
          amount: {type: 'number'}
        }
    }
  }
}

server.get("/converter",converterSchema, async (request, reply) => {
  const { from, to, amount } = request.query;
  try{
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${from}/${to}`,
    );
    const data = await response.json();
    const resultado = amount * data.conversion_rate;

    return {
      de: from,
      para: to,
      valor_original: Number(amount),
      valor_convertido: resultado,
    };
  }catch(error){
   
    console.error('Erro detalhado', error)
    return reply.status(500).send({error:'Ocorreu um erro interno no servidor. Tente novamente mais tarde.'})

    }
});

server.get('/listar' , async(request,reply) => {
  try{
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`)
    const data = await response.json();
    return data.supported_codes.map(([codigo,nome]) => ({ codigo,nome}))
  }catch(error){
    console.error('Erro detalhado', error)
    return reply.status(500).send({error: 'Erro ao encontrar moedas disponiveis '})
  }
 
  
})

server.listen({
  host: '0.0.0.0',
  port: process.env.PORT ?? 3333,
  
});
