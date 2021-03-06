import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// const cors = require('cors')({ origin: true });

admin.initializeApp();

// const database = admin.database().ref('/subscriptions');
const stripe = require('stripe')(functions.config().stripe.token);
const currency = functions.config().stripe.currency || 'USD';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// export const charge = functions.https.onRequest(async (request, response) => {
//   try {
//     const { status } = await stripe.charges.create({
//       amount: 5,
//       currency: currency,
//       description: 'An example charge',
//       source: request.body
//     });
//     response.json({ status });
//   } catch (err) {
//     console.log(err);
//     response.status(500).end();
//   }
// });

// export const createUser = functions.https.onCall(async (data) => {
//   const tokenID = data.tokenID;
//   const name = data.name;
//   const email = data.email;
//   const password = data.password;

//   const { status } = await stripe.charges.create({
//     amount: 5,
//     currency: currency,
//     description: 'Slack Redactor',
//     source: tokenID
//   });

//   if (!status) {
//     throw new functions.https.HttpsError(
//       'unknown',
//       'Charge could not be completed'
//     );
//   }

//   admin.auth().createUser({
//     email: email,
//     emailVerified: false,
//     password: password,
//     displayName: name
//   }).then((user) => {
//     return user;
//   }).catch(err => {
//     throw new functions.https.HttpsError('unknown', 'could not create user')
//   })

// })

export const charge = functions.https.onCall(async (data, context) => {
  const tokenID = data.tokenID;
  const { status } = await stripe.charges.create({
    amount: 5.00,
    currency: currency,
    description: 'Slack Redactor',
    source: tokenID
  });
  return { status };
});

export const addMessage = functions.https.onCall((data, context) => {
  const text = data.text;

  if (!(typeof text === 'string') || text.length === 0) {
    throw new functions.https.HttpsError('invalid-argument', 'text');
  }
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'failed-precondition',
      'the function must be called while authenticated'
    );
  }
  const uid = context.auth.uid || null;
  const name = context.auth.token.name || null;

  return admin.database().ref('/messsages').push({
    text: text,
    author: { uid, name },
  }).then(() => {
      console.log('New Message written');
      return { text };
  }).catch((error) => {
    throw new functions.https.HttpsError('unknown', error.message, error);
  });
});


export const helloWorld = functions.https.onCall(() => {
  return { message: "Hello World!" };
});
