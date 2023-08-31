import classes from './newsletter-registration.module.css';
import { useRef } from 'react';
import { MongoClient } from 'mongodb';

function NewsletterRegistration() {
  const emailRef=useRef()

  function registrationHandler(event) {
    event.preventDefault();
    const email=emailRef.current.value

    fetch('/api/newsletter',{
      method: 'POST',
      body: JSON.stringify({email:email}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(res=>res.json())
    .then(data=>console.log(data))

  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type='email'
            placeholder='Your email'
            aria-label='Your email'
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
