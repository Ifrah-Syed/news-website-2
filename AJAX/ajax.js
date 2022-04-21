let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler)

function buttonClickHandler(){
    console.log("u have clicked the fetch button");

    // instantiate(create) an xhr object
    const xhr=new XMLHttpRequest();
    
    // open the created object(operate either one of these at a time)
    // xhr.open('GET','ifra.txt',true)
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)
    //first arg type of http request, 2nd of source and 3rd whether non blocking then true
    xhr.open('POST','http://dummy.restapiexample.com/api/v1/create',true)
    // below is the response header that means we r sending form data in our url
    xhr.getResponseHeader('Content-type','application/json')

    // GET means sending url and getting the data
    // POST means sending url and data and get response according to the data sent

    // what to do on progress(optional)
    xhr.onprogress=function (){
        console.log("on progress");
        document.getElementById("loader")
        loader.style.display='block'
    }

    // what to do when response is ready
    xhr.onload= function() {
        if(this.status===200) //if http status code is 200 which means its loaded successfully
        {
            console.log(this.responseText); 
            //will print the retreived data
        }
        else{
            console.log(`sorry,there's some error`);
        }
        document.getElementById("loader")
        loader.style.display='none'
    }
    // onload means we r at ready state 4 of xhr

    // printing ready state values of xhr..values on net
    xhr.onreadystatechange=function () {
        console.log('ready state is ',xhr.readyState);
    }

    // sending the request
    params=`{"name":"test","salary":"123","age":"23"}`;
    xhr.send(params);
    // xhr.send() //for GET request
    // and then above functions are used like progress, onload,etc

}


// populate with employee data
let popBtn=document.getElementById('popBtn');
popBtn.addEventListener('click',popHandler);

function popHandler() {
    console.log("u have clicked the popBtn");
    const xhr=new XMLHttpRequest();
    // xhr.open('GET','ifra.txt',true)
    xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees',true)
//    xhr.getResponseHeader('retry-after','3600')

    xhr.onprogress=function (){
        console.log("on progress");
        document.getElementById("loader")
        loader.style.display='block'
    }

  
    xhr.onload= function() {
        if(this.status===200)
        {
            let obj=JSON.parse(this.responseText);
            console.log(obj);
            let list=document.getElementById('list');
            str="";
            for (key in obj){
                str+=`<li>${obj[key]}</li>`
            }
            // bcx response will b a string
            list.innerHTML=str;
        }
        else{
            console.log(`sorry,there's some error`);
        }
        document.getElementById("loader")
        loader.style.display='none'
    }
    xhr.onreadystatechange=function () {
        console.log('ready state is',xhr.readyState);
    }

    xhr.send();
}