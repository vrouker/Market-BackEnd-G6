import db from "../db/client.js";
import { createOrder } from "./queries/orders.js";
import { createProduct } from "./queries/products.js";
import { createReview } from "./queries/reviews.js";
import { createUser } from "./queries/users.js";
await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
    // Seed Users
    await createUser({username: "JohnJacobJingleheimerSchmidt", password: "supercalifragilisticexpialidocious"})
    await createUser({username: "Buyer1", password: "password"})

    // Seed Products
    await createProduct({title: "Gulfstream G600", description: "A high-speed luxury business jet with a 7,500-mile range, cutting-edge avionics, and an ultra-comfortable cabin. Symbol of wealth and elite travel.", price: 59500000.00})
    await createProduct({title: "Paper Airplane", description: "A folded sheet of paper that glides using basic aerodynamics. Simple, fun, and a timeless symbol of imagination.", price: 1.01})
    await createProduct({title: "Cessna 172", description: "The ubiquitous four-seat single-engine trainer, known for reliability, simplicity, and ease of operation. Popular for flight training and personal use.", price: 450000.00})
    await createProduct({title: "Boeing 737", description: "A twin-engine narrow-body airliner seating 126-215 passengers. Widely used in commercial and VIP/private configurations.", price: 89100000.00})
    await createProduct({title: "Robinson R44", description: "Four-seat piston helicopter with Lycoming engine; commonly used for training, private use, and light utility operations.", price: 465000.00})
    await createProduct({title: "Cessna 182", description: "A more powerful four-seat GA aircraft than the Cessna 172, with stronger payload and performance—ideal for family travel and IFR-capable missions.", price: 765000.00})
    await createProduct({title: "Piper PA-28", description: "Light single-engine four-seaters, available in fixed-gear (“Cherokee/Warrior/Archer”) and retractable-gear (“Arrow”) versions. Popular flight school trainers and personal aircraft with varied performance.", price: 210000.00})
    await createProduct({title: "Airbus A320", description: "Single-aisle airliner flying ~140-240 passengers. Variants include A318, A319, A320, A321, and neos (new engine option). A mainstay in short- to medium-haul airline routes.", price: 101000000.00})
    await createProduct({title: "La Mouette Atlas", description: "Delta-wing hang glider praised for light weight, ease of handling, and thermal performance—great for novice to mid-level pilots.", price: 3210.00})
    await createProduct({title: "AM-4-Seater", description: "A roadable aircraft (“flying car”) with folding wings. Available for preorder.", price: 1600000.00})
    await createProduct({title: "A Great Eagle", description: "A giant, intelligent eagle from Middle-earth. Rescues key characters and represents freedom, wisdom, and divine intervention.", price: 3018.00})


    // Seed Orders
    await createOrder({date: "2024-09-01", note: "There he goes.", user_id: 1})

    // Seed Reviews
    await createReview({rating: 5, comment: "Best Plane Ever", product_id: 1})
    await createReview({rating: 1, comment: "Left me standard in New Mexico, would not recommend", product_id: "2"})
    await createReview({rating: 5, comment: "Rescued me from Isengard", product_id: 11})


}
