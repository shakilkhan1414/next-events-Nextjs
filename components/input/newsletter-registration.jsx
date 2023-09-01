import classes from './newsletter-registration.module.css';
import { useRef,useContext } from 'react';
import NotificationContext from '@/store/Notification-context';

function NewsletterRegistration() {

  const notificationCtx = useContext(NotificationContext);

  const emailRef=useRef()

  function registrationHandler(event) {
    event.preventDefault();
    const email=emailRef.current.value

    notificationCtx.showNotification({
      title: 'Signing up ...',
      message: 'Registering for newsletter.',
      status: 'pending'
    })

    fetch('/api/newsletter',{
      method: 'POST',
      body: JSON.stringify({email:email}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    .then(res=>res.json())
    .then(data=>{
      notificationCtx.showNotification({
        title: 'Success!',
        message: 'Succesfully Registered for newsletter.',
        status: 'success'
      })
    })
    .catch(error=>console.log(error))

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
