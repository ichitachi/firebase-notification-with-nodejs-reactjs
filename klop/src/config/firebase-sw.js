import firebase from './firebase';

export const init = () =>  {
        navigator.serviceWorker
          .register('http://localhost:3000/firebase-messaging-sw.js', { scope: '/' })
          .then((reg) => {
            if(reg.installing) {
                console.log('Service worker installing');
            } else if(reg.waiting) {
                console.log('Service worker installed');
            } else if(reg.active) {
                console.log('Service worker active');
            }
          }).catch((err) => {
              console.log("ERROR " + err)
            });
  }
  