//HTML representation of DOM entries
const eventsEntryHtml = (eventEntry) => {
  return `
  <div>
  <p>${eventEntry.name}</p>
  <p>${eventEntry.date}</p>
  <p>${eventEntry.location}</p>
  <button id="deleteEventBtn!${eventEntry.id}">Delete</button>
  <button id="editEventBtn!${eventEntry.id}">Edit</button>
  </div>`
}

export {eventsEntryHtml}