import kangaroo from "../assets/kangaroo.png";


const productData = {
  Dog: {
     "ADULT DOGS-SMALL BREEDS": [
      {
        id: 1,
        title: "KANGAROO",
        desc: "WITH LAMB, RICE AND VEGETABLES FOR DOGS",
        subdesc: "Good for Everything, Specially For Stomachs",
        img: kangaroo,
        sizePrices: {
          "2kg": 15.99,
          "5kg": 35.99,
          "10kg": 60.99,
          "18kg": 95.99,
        },
      },
      {
        id: 2,
        title: "OCEAN FISH SMALL BITES",
        desc: "WITH LAMB, OATS, RICE AND VEGETABLES FOR DOGS",
        subdesc: "Good for Everything, Specially For Stomachs",
        img: kangaroo,
        sizePrices: {
          "2kg": 18.99,
          "5kg": 38.99,
          "10kg": 62.99,
          "18kg": 97.99,
        },
      },
      {
        id: 3,
        title: "WILD TUNA",
        desc: "WITH LAMB AND VEGETABLES FOR DOGS (GF)",
        subdesc: "Good for Everything, Specially For Stomachs",
        img: kangaroo,
        sizePrices: {
          "2kg": 19.49,
          "5kg": 39.99,
          "10kg": 63.99,
          "18kg": 99.49,
        },
      },
      {
        id: 4,
        title: "CHICKEN",
        desc: "WITH TURKEY AND VEGETABLES FOR DOGS",
        subdesc: "Good for Everything, Specially For Stomachs",
        img: kangaroo,
        sizePrices: {
          "2kg": 17.99,
          "5kg": 36.99,
          "10kg": 59.99,
          "18kg": 94.99,
        },
      },
      {
        id: 5,
        title: "TONE AND TRIMB LAMB",
        desc: "WITH OATS AND VEGETABLES FOR DOGS",
        subdesc: "Good for Everything, Specially For Stomachs",
        img: kangaroo,
        sizePrices: {
          "2kg": 20.49,
          "5kg": 40.49,
          "10kg": 65.49,
          "18kg": 100.49,
        },
      },
    ],

    "ADULT DOGS-MEDIUM AND LARGE BREEDS": [
      { id: 6, title: "Dog Medium 1", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: kangaroo},
      { id: 7, title: "Dog Medium 2", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: kangaroo},
      { id: 8, title: "Dog Medium 3", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: kangaroo},
      { id: 9, title: "Dog Medium 4", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: kangaroo},
      { id: 10, title: "Dog Medium 5", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: kangaroo },
    ],

    "GREIN FREE DOG FOOD": [
      { id: 11, title: "Dog GrainFree 1", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 12, title: "Dog GrainFree 2", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 13, title: "Dog GrainFree 3", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 14, title: "Dog GrainFree 4", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 15, title: "Dog GrainFree 5", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
    ],

    "SUPPLIMENTS AND TREETS": [
      { id: 16, title: "Dog Special 1", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 17, title: "Dog Special 2", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 18, title: "Dog Special 3", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 19, title: "Dog Special 4", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 20, title: "Dog Special 5", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
    ],
  },

  Cat: {
    "NUTRAL CAT FOOD": [
      { id: 21, title: "Cat Indoor 1", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 22, title: "Cat Indoor 2", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 23, title: "Cat Indoor 3", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 24, title: "Cat Indoor 4", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 25, title: "Cat Indoor 5", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
    ],

    "SUPPLIMENTS & TREETS": [
      { id: 26, title: "Cat Outdoor 1", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 27, title: "Cat Outdoor 2", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 28, title: "Cat Outdoor 3", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 29, title: "Cat Outdoor 4", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 30, title: "Cat Outdoor 5", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
    ],

    "GRAIN FREE CAT FOOD": [
      { id: 31, title: "Cat Kitten 1", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 32, title: "Cat Kitten 2", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 33, title: "Cat Kitten 3", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 34, title: "Cat Kitten 4", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 35, title: "Cat Kitten 5", desc: "Description", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
    ],
  },

  Grooming: {
    "GROOMING KIT FOR DOGS": [
      { id: 36, title: "Aloe Shampoo", desc: "Soothing aloe & oatmeal", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 37, title: "Herbal Cleanser", desc: "Gentle herbal blend", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 38, title: "Hypoallergenic Wash", desc: "For sensitive skin", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 39, title: "Deep Clean Shampoo", desc: "Removes dirt & odor", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 40, title: "Bright Coat", desc: "Whitens light coats", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
    ],

    "GROOMING KIT FOR CATS": [
      { id: 41, title: "Silky Conditioner", desc: "Leaves coat soft & shiny", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 42, title: "Detangle Spray", desc: "Eases knots and mats", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 43, title: "Moisturizing Balm", desc: "Repairs dry hair", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 44, title: "Aloe Conditioner", desc: "Aloe & chamomile blend", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 45, title: "Volumizing Rinse", desc: "Adds fullness to coat", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
    ],
  },

  Toys: {
    "TOY SET FOR DOGS": [
      { id: 46, title: "Squeaky Ball", desc: "Durable rubber fun", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 47, title: "Tennis Ball 2-Pack", desc: "Pet-safe felt", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 48, title: "Glow Ball", desc: "Lights up at night", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 49, title: "Treat Dispensing Ball", desc: "Interactive feeding", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 50, title: "Floating Ball", desc: "Great for water play", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
    ],

    "TOY SET FOR CATS": [
      { id: 51, title: "Rubber Bone", desc: "Tough natural rubber", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 52, title: "Nylon Chew Stick", desc: "Long-lasting", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 53, title: "Dental Chew Toy", desc: "Cleans teeth", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 54, title: "Bacon Flavor Bone", desc: "Irresistible taste", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
      { id: 55, title: "Ring Chew", desc: "Flexible & fun", subdesc: "Good for Everything, Specially For Stomachs", img: "/icons/kangaroo.png" },
    ],
  },
};

export default productData;
