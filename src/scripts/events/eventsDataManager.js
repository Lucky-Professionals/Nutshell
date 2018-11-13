const url = "http://localhost:3000/events"
//house all functions that interact with the database
const eventsDataManager = {
  // fetches data from database
    getEvent: (id) => {
        return fetch(`${url}?userId=${id}`)
            .then(res => res.json())
    },
    // saves data to database with POST
    saveEvent: (entry) => {
        return fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        }).then(res => res.json());
    },
    // deletes data from database with DELETE
    deleteEvent: (id) => {
        return fetch(`${url}/${id}`,{
            method: "DELETE"
        }).then(res => res.json())
    },
    // edits the data with PUT
    editEvent: (entry, id) => {
        return fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entry)
        }).then(res => res.json());
    },
    // grabs a single event from the database using its id
    singleEvent: (id) => {
        return fetch(`${url}/${id}`)
            .then(res => res.json())
    }
}

export {eventsDataManager}