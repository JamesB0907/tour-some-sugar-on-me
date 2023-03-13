import { venueList } from "./venues.js";
import { createBookingHTML } from "./bookings.js";
import { bandList } from "./bands.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar On Me</h1>
<article class="bookings">
    <h2>Current Bookings</h2>
    ${createBookingHTML()}
</article>

<article class="details">
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${bandList()}
    </section>
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${venueList()}
</article>
`
mainContainer.innerHTML = applicationHTML