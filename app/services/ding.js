import Service from '@ember/service';

export default class DingService extends Service {
  signup(email) {
    console.log('signup');
    fetch('https://api.heka.no/api/v1/ding/signup', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    });
  }
  send(token, subject, message) {
    console.log('signup');
    fetch('https://api.heka.no/api/v1/ding/send', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        apiKey: token,
      },
      body: JSON.stringify({
        subject,
        message,
      }),
    });
  }
}
