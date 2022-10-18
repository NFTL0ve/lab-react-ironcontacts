
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
return (
  <div className="App">
  <h1>IronContacts</h1>
  <button onClick={function(){addRandom()}}>Add Random Contact</button>
  <table>
    <ul>
      <li>Picture</li>
      <li>Name</li>
      <li>Popularity</li>
      <li>Won an Oscar</li>
      <li>Won an Emmy</li>
    </ul>

    {
      contacts.map(objInfo => {
            return(
              <tr>
                <td><img src={objInfo.pictureUrl} alt='pictureImg'/></td>
                <td>{objInfo.name}</td>
                <td>{Math.round(objInfo.popularity*100)/100}</td>
                <td>{objInfo.wonOscar + "🏆"}</td>
                <td>{objInfo.wonEmmy + "🏆"}</td>
              </tr>
            )
      })
    }
  </table>
  </div>
);
  }


  export default App