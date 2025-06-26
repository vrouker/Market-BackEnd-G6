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
    await createProduct({title: "Gulfstream G600", description: "A high-speed luxury business jet with a 7,500-mile range, cutting-edge avionics, and an ultra-comfortable cabin. Symbol of wealth and elite travel.", price: 59500000.00, imageUrl: "https://d36vpv0zv8va20.cloudfront.net/images/G600_Image.20230215.jpg"})
    await createProduct({title: "Paper Airplane", description: "A folded sheet of paper that glides using basic aerodynamics. Simple, fun, and a timeless symbol of imagination.", price: 1.01, imageUrl: "https://content.instructables.com/FQ1/093L/IJAEI4D3/FQ1093LIJAEI4D3.jpg?auto=webp&frame=1"})
    await createProduct({title: "Cessna 172", description: "The ubiquitous four-seat single-engine trainer, known for reliability, simplicity, and ease of operation. Popular for flight training and personal use.", price: 450000.00, imageUrl: "https://flyingmag1.b-cdn.net/wp-content/uploads/sites/2/2012/02/399113-_BP20765-6c1cfd-original-1629145877-scaled-1.jpg?width=2560&height=1707"})
    await createProduct({title: "Boeing 737", description: "A twin-engine narrow-body airliner seating 126-215 passengers. Widely used in commercial and VIP/private configurations.", price: 89100000.00, imageUrl: "https://images.aircharterservice.com/global/aircraft-guide/group-charter/boeing-b737-400-800-900-1.jpg"})
    await createProduct({title: "Robinson R44", description: "Four-seat piston helicopter with Lycoming engine; commonly used for training, private use, and light utility operations.", price: 465000.00, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSToXLxW_OwtC3utOZh6lJk3J9eAkd55tKwgA&s"})
    await createProduct({title: "Cessna 182", description: "A more powerful four-seat GA aircraft than the Cessna 172, with stronger payload and performance—ideal for family travel and IFR-capable missions.", price: 765000.00, imageUrl: "https://www.aopa.org/-/media/Images/AOPA-Main/Aircraft-Guide/Cessna-182-Skylane/03-333_146/03-333_146_16x9.jpg"})
    await createProduct({title: "Piper PA-28", description: "Light single-engine four-seaters, available in fixed-gear (“Cherokee/Warrior/Archer”) and retractable-gear (“Arrow”) versions. Popular flight school trainers and personal aircraft with varied performance.", price: 210000.00, imageUrl: "https://www.piper.com/wp-content/uploads/2019/01/18_Arch-TX_A2A_Clouds_Sunrise_12-scaled.jpg"})
    await createProduct({title: "Airbus A320", description: "Single-aisle airliner flying ~140-240 passengers. Variants include A318, A319, A320, A321, and neos (new engine option). A mainstay in short- to medium-haul airline routes.", price: 101000000.00, imageUrl: "https://images.aircharterservice.com/global/aircraft-guide/group-charter/airbus-a320-1.jpg"})
    await createProduct({title: "La Mouette Atlas", description: "Delta-wing hang glider praised for light weight, ease of handling, and thermal performance—great for novice to mid-level pilots.", price: 3210.00, imageUrl: "https://www.productfrom.com/photos/0006/6342_medium.jpg"})
    await createProduct({title: "AM-4-Seater", description: "A roadable aircraft (“flying car”) with folding wings. Available for preorder.", price: 1600000.00, imageUrl: "https://www.asdnews.com/NewsImages/b/71741/74130_O.jpg"})
    await createProduct({title: "A Great Eagle", description: "A giant, intelligent eagle from Middle-earth. Rescues key characters and represents freedom, wisdom, and divine intervention.", price: 3018.00, imageUrl: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/LOTR_Great-Eagles.jpg"})


    // Seed Orders
    await createOrder({date: "2024-09-01", note: "There he goes.", user_id: 1})

    // Seed Reviews
    await createReview({rating: 5, comment: "Best Plane Ever", product_id: 1})
    await createReview({rating: 1, comment: "Left me stranded in New Mexico, would not recommend", product_id: "2"})
    await createReview({rating: 5, comment: "Rescued me from Isengard", product_id: 11})


}
