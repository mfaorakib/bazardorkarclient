import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
 

export const LoginFrameWork=()=>{
    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig);
    }
}
export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
  

 
  return firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            var user = result.user;
            
            return user;

        }).catch((error) => {
            var errorMessage = error.message;
             return  errorMessage;
        });
    
};
