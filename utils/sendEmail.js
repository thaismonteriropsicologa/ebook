const sendgrid = require('@sendgrid/mail')

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const sendWithAtachments = async (to, data) => {
  try {
    await sendgrid.send({
      to: to,
      from: 'thaismonteiropsicologa@gmail.com',
      fromname: 'Thais Psicologa',
      subject: 'Seu e-book chegou',
      html: `Que legal, <br/> <br/>Seu e-book chegou aproveite! <br/><br/> Depois me conta o que você achou da leitura.`,
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