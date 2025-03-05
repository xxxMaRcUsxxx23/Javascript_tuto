/** fetch API
 * The fetch API provides an interface for fetching (sending/receiving) resources.
 * It uses Request and Response objects.
 * The fetch() method is used to fetch a resource(data). 
 * 
 * let promise = fetch(url,[options])
 */ 



    const URL = "https://icanhazdadjoke.com/";

    const getFacts = async()=>{
    console.log("getting data......")
    let response = await fetch(URL);
    console.log(response); // JSON format


    let data = await response.json();
    console.log(data);
}

/**
 * Understanding Terms:
 * JSON -> Javascript Object Notation
 * json method() -> returns a second promise that resolves 
 with the result of parsing the response body text as JSON. (Input os JSON, output is JS object) 


 API ka response JSON format mei aata hai. Hame is JSON format se Javascript object mei convert karna padta hai. 
 The above is done by json method()
 */
