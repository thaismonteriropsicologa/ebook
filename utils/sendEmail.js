import { useReducer } from 'react';

const sendgrid = require('@sendgrid/mail')

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendWithAtachments = async (to, name, data) => {
  try {
    await sendgrid.send({
      to: to,
      from: 'thaismonteiropsicologa@gmail.com',
      fromname: 'Thais Psicologa',
      subject: 'Seu e-book chegou',
      html: `Oi, Tudo bem?<br/><br/> Que legal!! Seu E-book <b>Maneiras práticas de vencer a Ansiedade  chegou!</b> <br/><br/> Neste material, você vai encontrar4 estratégias práticas para lidar com a Ansiedade, que são <b>maneiras mais inteligente de gerenciar sua ansiedade.</b> <br/><br/> Comece a usar esse conhecimento o quanto antes e depois me conta os resultados. <br/><br/> Este ebook não vai ficar disponível por muito tempo, então sugiro que baixe e salve para consultar. Certo? <br/><br/><br/><br/> <b>Obs.</b> Você já faz parte do <a href="https://t.me/psicogramdaansiedade">Psicogram da Ansiedade?</a> É o canal de conteúdo exclusivo no Telegram. <br/><br/> Lá eu compartilho conteúdos em primeira mão e é garantido que você terá acesso, pois aparece para todos os membros do canal. Mas, fique tranquilo, você recebe somente as minhas mensagens. <br/><br/> Vale lembrar que é um <b>canal dedicado ao combate da Ansiedade,</b> então fique à vontade para convidar seus amigos. Basta clicar no link abaixo para fazer parte do grupo. <br/><br/> <a href="https://t.me/psicogramdaansiedade">https://t.me/psicogramdaansiedade</a> <br/><br/> Faça isso agora. Não leva nem 1 minuto. <br/><br/><br/><br/> Abraços. <br/> Thais Monteiro`,
      attachments: [
          {
            content: data,
            filename: 'ebook.pdf',
            type: 'application/pdf',
            disposition: 'attachment',
          }
      ]

      });
      console.log('email enviado');
  } catch(e) {
    console.log(e)
  }
}

export { sendWithAtachments };