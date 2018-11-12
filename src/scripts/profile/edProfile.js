import {profileDataManager} from "./profileDataManager"
import {profileDomRender} from "./profileDomRender"

const edProfile = (activeUser) => {
  document.querySelector("#profileOutput").addEventListener("click", evt => {
    if (evt.target.id.startsWith("delete")) {
      const id = evt.target.id.split("!")[1]
      profileDataManager.deleteEntries(id).then(() =>
        profileDomRender(activeUser)
      )
    }
    if (evt.target.id.startsWith("edit")) {
      const id = evt.target.id.split("!")[1]
      document.querySelector("#saveBtn").id = `editBtn!${id}`
      profileDataManager.singleEntry(id).then((entry) => {
        document.querySelector("#contact").value = entry.contact
        document.querySelector("#phone").value = entry.phone
        document.querySelector("#city").value = entry.city
        document.querySelector("#about").value = entry.about
        document.querySelector("#secret").value = entry.secret


      })

    }
  })
}

export {edProfile}