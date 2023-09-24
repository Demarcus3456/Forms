import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    databaseURL: "https://realtime-database-6c94c-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const infoInDB = ref(database, "personInfo")

// Get a list of user input from your database
async function getCities(db) {
    const userInputsCol = collection(db, 'cities');
    const userSnapshot = await getDocs(userInputsCol);
    const userList = userSnapshot.docs.map(doc => doc.data());
    return userList;
}

const inputFieldEl = document.getElementById("input-field");
const submit = document.getElementById("add-button");
const form = document.getElementById('theForm'); // get the form element from which we need data
const userArray = [];


// Submitted info will be send to the database
submit.addEventListener("click", function () {
    let inputValue = inputFieldEl.value;
    push(infoInDB, inputValue);
    console.log(`${inputValue} added to database`);
});

// Info is updated to the database and saved
onValue(infoInDB, function (snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())

        clearShoppingListEl()

        for (let i = 0; i < userArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]

            appendItemToUserListEl(currentItem)
        }
    } else {
        userListEl.innerHTML = "Please fill out every field!"
    }
});

form.addEventListener('submit', callbackFunction); // event listener for the submit to use the callback function

function callbackFunction(event) {
    event.preventDefault(); // prevent default refresh
    const myFormData = new FormData(event.target); // get the data

    const formDataObj = Object.fromEntries(myFormData.entries()); //put the data inside an object
    console.log(formDataObj)

};
