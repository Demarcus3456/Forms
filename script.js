const form = document.getElementById('theForm'); // get the form element from which we need data

form.addEventListener('submit', callbackFunction); // event listener for the submit to use the callback function
                            
function callbackFunction(event) {
    event.preventDefault(); // prevent default refresh
    const myFormData = new FormData(event.target); // get the data
        
    const formDataObj = Object.fromEntries(myFormData.entries()); //put the data inside an object
    console.log(formDataObj)
        
};
