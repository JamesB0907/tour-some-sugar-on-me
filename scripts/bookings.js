import { getVenues, getBands, getBookings } from "./database.js";

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

// export const books = () => {
//     let string = ""

// for(const venue of venues){
//     let date= ""
//     let AddBand = []
//     for(const booking of bookings){
//         if(venue.id === booking.venueId){
//             AddBand.push(booking.bandId)
//             date = booking.date
//         }
//     }
//     string+= `<li>${AddBand.map(x => bands.find(y => y.id === x).name).join(" and ")} will be performing at ${venue.name} on ${date}</li>`
// }

// return string
// }

export const createBookingHTML = () => {

    let HTML = "<ul>"
    
    for(const venue of venues){
        let matchedVenue = null
        let matchedBands = []
        let matchingBandIds = []
        let bookingDate = null

        for(const booking of bookings){

            if(booking.venueId === venue.id){
                matchedVenue = venue.name
                bookingDate = booking.date
            

                for(const band of bands){
                    if(booking.bandId === band.id){
                        matchedBands.push(band.name)
                        matchingBandIds.push(band.id)
                    }
                }
            }
        }

        const bandsString = matchedBands.join(' and ')
        
        //filter out any venues with no bands booked
        if(matchedBands.length > 0){
            HTML += `<li class="booking--${matchingBandIds[0]} booking--${matchingBandIds[1]}">${bandsString} is playing at ${matchedVenue} on ${bookingDate}</li>`
        }
    }

    HTML += "</ul>"

    return HTML
}

document.addEventListener(
    "click",  
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.className.startsWith("booking")) {

            const bookingArray = itemClicked.classList
            const justBandIds = []
            const matchingBands = []

            for(const bandID of bookingArray){
                const [,justBandId] = bandID.split("--")
                justBandIds.push (justBandId)

            
            for (const band of bands) {
                for (const bandid of justBandIds){
                
                if (parseInt(bandid) === band.id) {

                            matchingBands.push(band.name)

                        }            
                    }
                }  
            }
          window.alert(`${matchingBands.join(" and ")}`)
    }
}
)