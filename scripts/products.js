export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/Bamboo-straw.png",
    name: "Bamboo Straw with a Cleaner - 6 Pairs",
    priceCents: 340,
    keywords: [
      "bamboo",
      "straw",
      "straws",
      "bamboo straw",
      "kitchen item",
      "kitchen items",
      "kitchen",
    ],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/Beewax-wrapper.png",
    name: "Beewax Wrappers stack - 10 in stack",
    priceCents: 295,
    keywords: [
      "bees",
      "bee",
      "wax",
      "wrap",
      "wrapper",
      "beewax",
      "bee wax",
      "beewax wrapper",
      "bee wax wrapper",
    ],
  },
  {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/Eco-soap.png",
    name: "Eco Soap - 4 Pack",
    priceCents: 799,
    keywords: [
      "soap",
      "eco soap",
      "natural soap",
      "natural",
      "bathing products",
      "bathroom",
      "natural",
      "eco friendly",
      "sanitation",
      "sanitary",
    ],
    type: "sanitation",
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/Straws.png",
    name: "Bamboo + Stainless steeel Straws - combo pack",
    priceCents: 899,
    keywords: [
      "bamboo",
      "straw",
      "straws",
      "bamboo straw",
      "kitchen item",
      "kitchen items",
      "kitchen",
      "steel",
      "stainless",
      "stainless steel",
      "combo",
      "combo pack",
      "pack",
    ],
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/Bamboo-toothbrush.png",
    name: "Bamboo Toothbrush",
    priceCents: 599,
    keywords: [
      "toothbrush",
      "sanitaion",
      "brush",
      "natural",
      "bathing products",
      "bathroom",
      "natural",
      "eco friendly",
    ],
    type: "sanitation",
  },
  {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: "images/products/bat-boxes.png",
    name: "Bat box",
    priceCents: 1599,
    keywords: [
      "bat",
      "box",
      "boxes",
      "bats",
      "pollination",
      "bat box",
      "bat boxes",
      "bats",
      "bee",
      "bee box",
      "bee house",
      "house",
      "habitat",
      "bee boxes",
    ],
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/bathroom-kit.png",
    name: "Bathroom combo pack",
    priceCents: 2400,
    keywords: [
      "toothbrush",
      "sanitaion",
      "brush",
      "natural",
      "bathing products",
      "bathroom",
      "natural",
      "eco friendly",
      "soap",
      "eco soap",
      "natural soap",
      "combo",
      "combo pack",
      "pack",
    ],
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/bee-house.png",
    name: "Bee House",
    priceCents: 3075,
    keywords: [
      "bat",
      "box",
      "boxes",
      "bats",
      "pollination",
      "bat box",
      "bat boxes",
      "bats",
      "bee",
      "bee box",
      "bee house",
      "house",
      "habitat",
      "bee boxes",
    ],
  },
  {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: "images/products/compost-bin.png",
    name: "Compost bin",
    priceCents: 4099,
    keywords: [
      "compost",
      "compost bin",
      "bin",
      "garbage",
      "ferilizer",
      "garden",
      "gardening",
    ],
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "images/products/Eco-loofah.png",
    name: "Eco Loofah",
    priceCents: 599,
    keywords: [
      "loofah",
      "eco loofah",
      "loofahs",
      "natural",
      "bathing products",
      "bathroom",
      "natural",
      "eco friendly",
      "sanitation",
      "sanitary",
      "sponge",
    ],
    type: "sanitation",
  },
  {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/Natural-bathing-sponge.png",
    name: "Natural fiber sponge",
    priceCents: 2070,
    keywords: [
      "sponge",
      "natural sponge",
      "eco sponge",
      "loofah",
      "eco loofah",
      "loofahs",
      "natural",
      "bathing products",
      "bathroom",
      "natural",
      "eco friendly",
      "sanitation",
      "sanitary",
    ],
    sizeChartLink: "images/clothing-size-chart.png",
  },
  {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: "images/products/nature-documet.png",
    name: "Nature Documentaries for Kids",
    priceCents: 3099,
    keywords: [
      "nature",
      "document",
      "documentary",
      "education",
      "nature documentary",
      "knowledge",
      "kid",
      "kids",
      "child",
      "children",
      "book",
      "books",
      "education items",
    ],
  },
  {
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image: "images/products/seed-bomb.jpg",
    name: "Seed bomb",
    priceCents: 2499,
    keywords: [
      "pollination",
      "seed",
      "seeds",
      "bomb",
      "seed bomb",
      "flowers",
      "flower seeds",
      "ferilizer",
      "garden",
      "gardening",
    ],
  },
];
