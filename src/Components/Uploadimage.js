// import React from 'react';

// import * as firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import firebaseConfig from './firebasConfig';


// function Uploadimage(){
//     const ref = firebase.storage().ref();

//     const file = document.querySelector("#photo").files[0];

//     const name = new Date() + '_' + file.name ;

//     const metadata = {
//         contentType : file.type
//     };

//     const task = ref.child(name).put(file,metadata);

//     task
//     .then(snapshot => snapshot.ref.getDownloadURL())
//     .then(url => {
//         console.log(url);
//         alert("image Upload successfull");
//         const image = document.querySelector("#image");
//         image.src = url ;
//     })

//     return (
//         <div className='greetingContainer'> 
//         <input type="file" id="photo"></input>
//         <image id="image"> </image>
//         <button onClick="Uploadimage()"> Upload image</button>
//         </div>
//       );

// }
// export default Uploadimage;