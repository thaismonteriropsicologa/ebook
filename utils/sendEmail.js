const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey('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');


const sendWithAtachments = async (to, data) => {
  sendgrid.send({
      to: to,
      from: 'no-reply@hellenfitness.com.br',
      subject: 'Seu e-book chegou',
      html: `Que legal, <br/> <br/>Seu e-book chegou aproveite! <br/><br/> Depois me conta o que você achou da leitura.`,
      // attachments: [
      //     {
      //       content: data,
      //       filename: 'ebook.pdf',
      //       type: 'application/pdf',
      //       disposition: 'attachment',
      //       contentId: 'mypdf'
      //     }
      // ]
  }); 
  console.log('email enviado ');
}

export { sendWithAtachments };