/**
 * Attributes:
    1. getAttribute(attr) -> to get the attribute value
    2. setAttribute(attr,value) -> to set the attribute value
 */
// function getData(dataId,getNextData){
//    setTimeout(()=> {
//       console.log(dataId);

//       if(getNextData){
//          getNextData(); 
//       }
//    },2000);
// }

function getData(dataId){

   return new Promise((resolve,reject)=>{
      setTimeout(()=> {
         console.log(dataId);
         resolve("success");
      },2000);
   })
}
// Aync-await
// async function getAlldata(){

//    await getData(1);
//    await getData(2);
//    await getData(3);
// }

// write the above code using IIFE: Immediately Invoked Function Expression
(async function (){

   await getData(1);
   await getData(2);
   await getData(3);
})();

// getData(1).then((res)=>{
//    getData(2);
// })
// better way of writing the above thing is Promise chaining.
// getData(1).then((res)=>{
//    return getData(2);
// }).then((res)=>{
//    return getData(3);
// }).then((res)=>{
//    console.log(res);
// })

// getData(1,()=>{

//    getData(2,()=>{
//       getData(3,()=>{
//          getData(4);
//       })
//    })
// });
// the above is referred to as callback hell and also difficult to understand 
// Pyramid of doom


/**
 * To solve the problem of callback hell we use promises
 * Promises:
 * 
 * let promise = new Promise((resolve,reject)=>{......})
 */ 
// let promise = new Promise((resolve,reject)=>{
//    console.log("Hello");
   
   
//    resolve("success");
//    // reject("sonme error has occured");
// });

// function getData(dataID,getNextData){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          console.log(dataID);
//          resolve("success");
//          if(getNextData){
//             getNextData();
//          }
//       },5000)
//    })
// }


// let promise = getData(1234);
/**
 * Promises:
 * .then() & .catch()
 * promise.then((res)=>{......}) -> used when fulfilled
 * promise.catch((err)=>{......}) -> used when rejected
 */
// const getPromise = ()=>{
//    return new Promise((resolve,reject)=>{
//       console.log("I am a promise");
//       resolve("successfully ran");
//    });

// };


// let promise = getPromise();

// promise.then((res)=>{
//    console.log(res);
// })
// promise.catch((err)=>{
//    console.log(err);
// })

// below is shown how promise chaining works
// function asyncFunction1(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          console.log("data1");
//          resolve("success");
//       },5000);
//    })
// }

// function asyncFunction2(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          console.log("data2");
//          resolve("success");
//       },5000);
//    })
// }
// console.log("fetching data 1 ");

// asyncFunction1().then(()=>{
//    console.log("fetching data 2 ")
//    asyncFunction2();
// });


// Async-await
/**Better thing than promises are Async-Await 
 * async function always returns a promise.
   async function myFunc(){......}

   await pauses the execution of its surrounding async function until promise is settled.
*/ 



// function api(){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          console.log("weather data");
//          resolve(200);
//       },2000)
//    })
// }

// async function getWeatherData(){
//    await api();
//    await api();
// }
// getWeatherData();