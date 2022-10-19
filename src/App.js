
import "./App.css";
import objContacts from "./contacts.json";
import { useState} from "react"

function App() {

  const [contacts, setContacts] = useState(objContacts.slice(0,5))
  const [contactsLength, setContactsLength] = useState(4)


function addRandom(){
  let contactArray = [...objContacts];
const randomContact = Math.floor(Math.random()*(contactArray.length-5)+5)
contactArray.push(contactArray[randomContact]) 
setContactsLength(contactsLength+1)
setContacts(contactArray.slice(0, contactsLength))
};
function sortByName(){
  let contactArray = [...contacts];
  contactArray.sort((firstObj,secondObj) => firstObj.name.localeCompare(secondObj.name))
  console.log('contacts' , contacts)
  console.log('contactArray', contactArray)
  setContacts(contactArray)
}
function sortByPopularity(){
  let contactArray = [...contacts];
  contactArray.sort((firstObj,secondObj) => secondObj.popularity-firstObj.popularity)
  console.log('contacts' , contacts)
  console.log('contactArray', contactArray)
  setContacts(contactArray)
}

function deleteContact(index){
  let contactArray = [...contacts];
  contactArray.splice(index, 1)
  setContacts(contactArray)
}

return (
  <div className="App">
  <h1>IronContacts</h1>
  <button onClick={function(){addRandom()}}>Add Random Contact</button>
  <table>
    <tr>
      <td key="Picture"><b>Picture</b></td>
      <td key="Name"><b>Name</b></td>
      <td key="Popularity"><b>Popularity</b></td>
      <td key="Won Oscar"><b>Won Oscar</b></td>
      <td key="Won Emmy"><b>Won Emmy</b></td>
      
    </tr>

    {
      contacts.map((objInfo, i) => {
            return(
              <tr>
                <td><img src={objInfo.pictureUrl} alt='pictureImg'/></td>
                <td>{objInfo.name}</td>
                <td>{Math.round(objInfo.popularity*100)/100}</td>
                <td>{objInfo.wonOscar + "🏆"}</td>
                <td>{objInfo.wonEmmy + "🏆"}</td>
                <td><button onClick={function(){deleteContact(i)}}>Delete</button></td>
              </tr>
            )
      })
    }
  </table>
  </div>
);
  }


  export default App