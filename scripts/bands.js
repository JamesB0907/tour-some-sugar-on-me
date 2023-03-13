import { getBands, getBookings, getVenues } from "./database.js";

const bands = getBands()
const venues = getVenues()
const bookings = getBookings()

export const bandList = () => {
    let bandsHTML = `<div class="bandContainer">`

    for (const band of bands) {
        bandsHTML += `<h3 id="band--${band.id}">${band.name}</h3>
        <ul id= "band_details">
        <li>Members: ${band.memberCount}</li>
        <li>Genre: ${band.genre}</li>
        <li>Year Formed: ${band.yearFormed}</li>
        </ul>`
    }

    bandsHTML += "</div>"

    return bandsHTML
}

document.addEventListener(
    "click",  
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("band")) {

            const [ ,bandPrimaryKey] = itemClicked.id.split("--")

            const matchingVenues = []
            
            const bandName = itemClicked.innerHTML

            for (const booking of bookings) {
                
                if (booking.bandId === parseInt(bandPrimaryKey)) {

                    for (const venue of venues) {

                        if (venue.id === booking.venueId) {

                            matchingVenues.push(venue.name)

                        }            
                    }
                }
            }
window.alert(`${bandName} is playing at ${matchingVenues.join(" and ")}`)
    }
}
)