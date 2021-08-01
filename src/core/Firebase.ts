import firebase from 'firebase';

const FieldValue = firebase.firestore.FieldValue;

export const init = () => {
  firebase.initializeApp(JSON.parse(process.env.VUE_APP_FIREBASE_CONFIG));
};

export const listenChat = (onResult) => {
  firebase
    .firestore()
    .collection('chat')
    .orderBy('created', 'desc')
    .limit(20)
    .onSnapshot(snapshot => {
      const result = snapshot.docs.map(d => ({
        ...d.data(),
        id: d.id
      }));

      onResult(result);
    });
};

export const sendMessage = async (message) => {
  return firebase
    .firestore()
    .collection('chat')
    .add({ ...message, created: FieldValue.serverTimestamp() });
};
