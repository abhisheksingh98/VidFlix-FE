// firebase.js — offline stub: replaces Firebase Auth entirely
// signInWithPopup and signOut are no-ops; credential uses local fake data.

const auth = {
  signInWithPopup: async () => {
    throw new Error('Firebase removed — use local login instead')
  },
  signOut: async () => { },
}

export default auth
