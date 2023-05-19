import { NextResponse } from "next/server";

const _allListings = [
  {
    id: "1",
    location: "London",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 1,
    price: "£450,000",
    description:
      "Stylish apartment located in the heart of London. This beautifully designed property features modern amenities and offers stunning views of the city skyline.",
  },
  {
    id: "2",
    location: "Manchester",
    type: "Terraced House",
    bedrooms: 3,
    bathrooms: 2,
    price: "£320,000",
    description:
      "Charming terraced house situated in a quiet neighborhood of Manchester. This property boasts a spacious living area, a private garden, and convenient access to local amenities.",
  },
  {
    id: "3",
    location: "Edinburgh",
    type: "Townhouse",
    bedrooms: 4,
    bathrooms: 3,
    price: "£650,000",
    description:
      "Elegant townhouse in the historic city of Edinburgh. With its classic architecture and contemporary interiors, this property offers a luxurious living space and is close to renowned attractions.",
  },
  {
    id: "4",
    location: "Bristol",
    type: "Detached House",
    bedrooms: 5,
    bathrooms: 4,
    price: "£800,000",
    description:
      "Spacious detached house in a sought-after area of Bristol. This property features a large garden, a modern kitchen, and ample parking space, providing the perfect family home.",
  },
  {
    id: "5",
    location: "Birmingham",
    type: "Studio Apartment",
    bedrooms: 1,
    bathrooms: 1,
    price: "£180,000",
    description:
      "Contemporary studio apartment located in the vibrant city of Birmingham. With its open-plan design and close proximity to shopping centers and entertainment venues, this property is ideal for young professionals.",
  },
  {
    id: "6",
    location: "Glasgow",
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 2,
    price: "£1,200,000",
    description:
      "Luxurious penthouse offering breathtaking views of Glasgow's skyline. This property boasts high-end finishes, a private terrace, and exclusive access to a range of amenities, including a gym and swimming pool.",
  },
  {
    id: "7",
    location: "Leeds",
    type: "Cottage",
    bedrooms: 2,
    bathrooms: 1,
    price: "£280,000",
    description:
      "Quaint cottage nestled in the picturesque countryside of Leeds. This charming property features exposed beams, a cozy fireplace, and a well-maintained garden, offering a peaceful retreat from city life.",
  },
  {
    id: "8",
    location: "Newcastle",
    type: "Duplex",
    bedrooms: 2,
    bathrooms: 2,
    price: "£380,000",
    description:
      "Modern duplex apartment in the heart of Newcastle. With its contemporary design and close proximity to cultural landmarks and dining options, this property provides a stylish urban living experience.",
  },
];

const _flatsListings = [
  {
    id: "1",
    location: "London",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 1,
    price: "£450,000",
    description:
      "Stylish apartment located in the heart of London. This beautifully designed property features modern amenities and offers stunning views of the city skyline.",
  },
  {
    id: "5",
    location: "Birmingham",
    type: "Studio Apartment",
    bedrooms: 1,
    bathrooms: 1,
    price: "£180,000",
    description:
      "Contemporary studio apartment located in the vibrant city of Birmingham. With its open-plan design and close proximity to shopping centers and entertainment venues, this property is ideal for young professionals.",
  },
  {
    id: "6",
    location: "Glasgow",
    type: "Penthouse",
    bedrooms: 3,
    bathrooms: 2,
    price: "£1,200,000",
    description:
      "Luxurious penthouse offering breathtaking views of Glasgow's skyline. This property boasts high-end finishes, a private terrace, and exclusive access to a range of amenities, including a gym and swimming pool.",
  },
  {
    id: "8",
    location: "Newcastle",
    type: "Duplex",
    bedrooms: 2,
    bathrooms: 2,
    price: "£380,000",
    description:
      "Modern duplex apartment in the heart of Newcastle. With its contemporary design and close proximity to cultural landmarks and dining options, this property provides a stylish urban living experience.",
  },
];

const _housesListings = [
  {
    id: "2",
    location: "Manchester",
    type: "Terraced House",
    bedrooms: 3,
    bathrooms: 2,
    price: "£320,000",
    description:
      "Charming terraced house situated in a quiet neighborhood of Manchester. This property boasts a spacious living area, a private garden, and convenient access to local amenities.",
  },
  {
    id: "3",
    location: "Edinburgh",
    type: "Townhouse",
    bedrooms: 4,
    bathrooms: 3,
    price: "£650,000",
    description:
      "Elegant townhouse in the historic city of Edinburgh. With its classic architecture and contemporary interiors, this property offers a luxurious living space and is close to renowned attractions.",
  },
  {
    id: "4",
    location: "Bristol",
    type: "Detached House",
    bedrooms: 5,
    bathrooms: 4,
    price: "£800,000",
    description:
      "Spacious detached house in a sought-after area of Bristol. This property features a large garden, a modern kitchen, and ample parking space, providing the perfect family home.",
  },
  {
    id: "7",
    location: "Leeds",
    type: "Cottage",
    bedrooms: 2,
    bathrooms: 1,
    price: "£280,000",
    description:
      "Quaint cottage nestled in the picturesque countryside of Leeds. This charming property features exposed beams, a cozy fireplace, and a well-maintained garden, offering a peaceful retreat from city life.",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const propertyType = searchParams.get("property_type")?.toLowerCase();
  const id = searchParams.get("id")?.toLowerCase();

  let _listings;

  switch (propertyType) {
    case "houses":
      _listings = _housesListings;
      break;

    case "flats":
      _listings = _flatsListings;
      break;

    default:
      _listings = _allListings;
      break;
  }

  const listing = _listings.find((listing) => listing.id === id);

  return NextResponse.json({ listing });
}
