import { getVenues, getBookings, getBands } from "./database.js";

const venues = getVenues()
const bookings = getBookings()
const bands = getBands()

export const venueList = () => {
    let venuesHTML = `<div class="venueContainer">`

    for (const venue of venues) {
        venuesHTML += `<h3 id="venue--${venue.id}">${venue.name}</h3>
        <ul id= "venue_details">
        <li>Address: ${venue.address}</li>
        <li>Size: ${venue.sqFeet}</li>
        <li>Maximum # of Guests: ${venue.maxOccupancy}</li>
        </ul>`
    }

    venuesHTML += "</div>"

    return venuesHTML
}

document.addEventListener(
    "click",  
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("venue")) {

            const [ ,venuePrimaryKey] = itemClicked.id.split("--")

            const matchingBands = []

            for (const booking of bookings) {
                
                if (booking.venueId === parseInt(venuePrimaryKey)) {

                    for (const band of bands) {

                        if (band.id === booking.bandId) {

                            matchingBands.push(band.name)

                        }            
                    }
                }
            }
window.alert(`${matchingBands.join(" and ")}`)
    }
}
)