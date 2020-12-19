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
      html: `Olá ${name}! <br/><br/> Que legal!! Seu E-book Maneiras práticas de vencer a Ansiedade  chegou. <br/><br/>Aproveite e depois me conta o que você achou. <br/> <br/>Você pode também compartilhar com um amigo que esteja precisando dessas orientações. <br/><br/> Abraços. <br/> Thais Monteiro`,
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