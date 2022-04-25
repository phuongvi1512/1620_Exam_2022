// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

// Your code goes here
const displayAllContacts = document.getElementById('display_all_contacts')
const displaySingleContact = document.getElementById('display_single_contact')

/* display all contacts */
function createCard(contact) {
  let cardContainer = document.createElement('div')
  let cardName = document.createElement('p')
  let cardImage = document.createElement('img')
  cardContainer.className = 'card'
  cardContainer.id = contact.name
  cardName.innerHTML = contact.name
  cardImage.src = `img/${contact.image}`
  cardContainer.appendChild(cardName)
  cardContainer.appendChild(cardImage)
  displayAllContacts.appendChild(cardContainer)
}


window.addEventListener('load', () => {
  contactsList.forEach(contact => {
    createCard(contact)
  })
});

/*display single contact */
/*
displayAllContacts.addEventListener('click', (evt)=>{
  let targetContact = evt.target.id
  console.log(targetContact)
  for (const contact of contactsList) {
    if (contact['name'] == targetContact) {
      const characterName = `<h1>${contact['name']}</h1>`
      const characterPhone = `<p>${contact['phone']}</p>`
      const characterImage = `<img src="img/${contact['image']}>`
      const characterEmail = `<p>${contact['email']}</p>`
      const singleContactContainer = document.createElement('div')
      singleContactContainer.id = targetContact
      singleContactContainer.appendChild(characterName)
      singleContactContainer.appendChild(characterPhone)
      singleContactContainer.appendChild(characterEmail)
      singleContactContainer.appendChild(characterImage)
      displaySingleContact.appendChild(singleContactContainer)
    }
  }
})
*/
/*
displayAllContacts.addEventListener('click', (evt) => {
  const childs = document.getElementsByClassName('card')
  for (const child of childs) {
    console.log(child)
  }
})
*/

