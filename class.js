console.log("com 1");

setTimeout(()=>{
    //eg. api call
    console.log("com 2");
},1000);
//eg. some manipulate date

console.log("com 3");

// // ///tipical:
// // fetch(url);
//       ||
//       \/
// // .then(("some_response_string")=>{converts string to Json};);
//                 ||
//                 \/

// // .then((JHason)=>{//we do manipulate};)

// // .catch((l)=>{};)