import Head from 'next/head'
import { useState } from 'react'
import axios from 'axios'

import ReactLoading from 'react-loading'
import Swal from 'sweetalert2'

export default function Home() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const res = await axios.post('/api/send-email', { name: 'david', email })
    await axios.post('/api/subscribe', { email })
    if (res.data) {
      setIsLoading(false)
      Swal.fire({
        title: 'Seu E-book esta a caminho!',
        text: 'Fique de olho no seu e-mail, se o e-book não chegar, dê uma olhada na caixa de spam!',
        icon:'success',
        confirmButtonColor: 'black',
      }) 
    }

  }

  return (
    <div className="container">
      <Head>
        <title>Thais Monteiro Psicóloga</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      </Head>

      <main className='background-pink'>
        <img className='avatar' src='/psico.jpg' alt='foto'></img>
        <p className="description">
          Dra. Thais Monteiro <br/> Psicóloga
        </p>
        <h5 className="title">
          Ebook Grátis - Maneiras práticas de lidar com a ansiedade
        </h5>
       
        <br/><br/>
        <div>
          {isLoading ? 
            <ReactLoading type={"bars"} color={"white"} /> 
            :
             <form className='email-form'>
             <div className='form-group mb-3'>
               <input 
                 className='form-control' 
                 type='email' 
                 placeholder='Digite seu melhor E-mail' 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
               />
               <br/>
               <button onClick={(e) => onSubmit(e)} className='btn btn-dark form-control'>
                 Receber E-book
               </button>
             </div>
           </form>
          }
         
        </div>
        
      </main>

      <footer>
        Direitos reservados - {new Date().getFullYear()}
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .avatar {
          max-width: 150px;
          margin: 20px;
          border-radius: 50%;
        }

        .background-pink {
          background-color: #ffb6c1;
          padding: 50px;
        }
        
        .email-form {
          font-size: 1rem;
          max-width: 300px;
          display: block;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        
      `}</style>
    </div>
  )
}
