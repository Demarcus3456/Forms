const form = document.getElementById('theForm');

form.addEventListener('submit', callbackFunction);
                            
function callbackFunction(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
        
    const formDataObj = Object.fromEntries(myFormData.entries());
    console.log(formDataObj)
        
};
