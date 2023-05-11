
// import { useState } from "react";
// import ChatBot from "react-simple-chatbot";

// import {Segment} from "semantic-ui-react"
// import messageicon from "./messageicon.png"

// import close from "./close.png"
// function App() {
//   const [chatVisible, setChatVisible] = useState(false);

//   const handleImageClick = () => {
//     setChatVisible(!chatVisible);
//     console.log(chatVisible)
//   };
//   const steps = [

//     {

//       id: "Greet",

//       message: "Hello, Welcome to our shop",

//       trigger: "Done",

//     },

//     {

//       id: "Done",

//       message: "Please enter your name!",

//       trigger: "waiting1",

//     },

//     {

//       id: "waiting1",

//       user: true,

//       trigger: "Name",

//     },

//     {

//       id: "Name",

//       message: "Hi {previousValue}, Please select your issue",

//       trigger: "issues",

//     },

//     {

//       id: "issues",

//       options: [

//         {

//           value: "React",

//           label: "React",

//           trigger: "React",

//         },

//         { value: "Angular", label: "Angular", trigger: "Angular" },

//       ],

//     },

//     {

//       id: "React",

//       message:

//         "Thanks for letting your React issue, Our team will resolve your issue ASAP",

//       // end: true,

//     },

//     {

//       id: "Angular",

//       message:

//         "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

//       // end: true,

//     },

//   ]; 
//   return (
//     <div>
//    { !chatVisible &&<img
//     style={{ position: "fixed", bottom: "20px", right: "20px" ,cursor: "pointer"}}
//       src={messageicon}
//       alt="Chat Icon"
//       onClick={handleImageClick}

//     />}
//     {chatVisible && (
//      <>
//       <img 
//       src={close}
//        alt="Close Icon"
//         style={{ position: "absolute",
//        bottom: "537px",
//     right: "69px",
//     cursor: "pointer"}} onClick={handleImageClick}/>
//       <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
//         <Segment style={{ width: "400px" }}>
//           <ChatBot steps={steps} />
//         </Segment>
//       </div></>
//     )}
//   </div>
//   );
// }

// export default App;



import { useState } from "react";
import ChatBot from "react-simple-chatbot";

import {Segment} from "semantic-ui-react"
import messageicon from "./messageicon.png"

import close from "./close.png"
import "./App.css"
function App() {
  const [chatVisible, setChatVisible] = useState(false);

  const handleImageClick = () => {
    setChatVisible(!chatVisible);
    console.log(chatVisible)
  };
  const steps = [

    {

      id: "Greet",

      message: "Hello, Welcome to our shop",

      trigger: "Done",

    },

    {

      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",

    },

    {

      id: "waiting1",

      user: true,

      trigger: "Name",

    },

    {

      id: "Name",

      message: "Hi {previousValue}, Please select your issue",

      trigger: "issues",

    },

    {

      id: "issues",

      options: [

        {

          value: "React",

          label: "React",

          trigger: "React",

        },

        { value: "Angular", label: "Angular", trigger: "Angular" },

      ],

    },

    {

      id: "React",

      message:

        "Thanks for letting your React issue, Our team will resolve your issue ASAP",

      // end: true,

    },

    {

      id: "Angular",

      message:

        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

      // end: true,

    },

  ]; 
  return (
  <> 
  helo
   <div>
  { !chatVisible &&<img
   style={{ position: "fixed", bottom: "20px", right: "20px" ,cursor: "pointer"}}
     src={messageicon}
     alt="Chat Icon"
     onClick={handleImageClick}

   />} 
   {chatVisible && (
    <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
     <img 
     src={close}
      alt="Close Icon"
      style={{
       position: "absolute",
   top: "-504px",
   right:" 65px",
   cursor: "pointer",

   height: "30px",
       zIndex: 1,
     }}
      onClick={handleImageClick}/>
     <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
       <Segment style={{ width: "400px" }}>
         <ChatBot steps={steps} />
       </Segment>
     </div></div>
   )}
 </div>

 {/* <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
 {/* <iframe className="Iframe" src="https://buildchat.vercel.app" /> */}
 {/* </div> */}
  </> 
  );
}

export default App;
