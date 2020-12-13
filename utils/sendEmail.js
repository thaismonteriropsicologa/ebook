import fetch from 'node-fetch'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

const sendEmail = async ({ email, data }) => {
  try {
    const t = await fetch(SENDGRID_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email
              }
            ],
            subject: 'Seu e-book chegou'
          }
        ],
        from: {
          email: 'noreply@thaismonteiro.com',
          name: 'Dra. Thais Monteiro'
        },
        content: [
          {
            type: 'text/html',
            value: `Que legal, <br/> <br/>Seu e-book chegou aproveite! <br/><br/> Depois me conta o que você achou da leitura.`
          }
        ],
        attachments: [
          {
            content: data,
            filename: 'ebook.pdf',
            type: 'application/pdf',
            disposition: 'attachment',
            contentId: 'mypdf'
          }
        ]
      })
    });

    console.log(t)

  } catch (e) {
    console.log(e)
  }
    
}

export { sendEmail };