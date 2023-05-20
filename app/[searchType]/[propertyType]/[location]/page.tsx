import Link from "next/link";

async function getData(params: {
  searchType: string;
  propertyType: string;
  location: string;
}) {
  const { searchType, propertyType, location } = params;

  const res = await fetch(
    `${process.env.API_LISTINGS_URL}?` +
      new URLSearchParams({
        search_type: searchType,
        property_type: propertyType,
        location: location,
      }),
    { cache: "no-store" }
  );

  return res.json();
}

export default async function Page({
  params,
}: {
  params: {
    searchType: string;
    propertyType: string;
    location: string;
  };
}) {
  const { searchType } = params;

  const data = await getData(params);

  const { listings } = data;

  return (
    <main className="flex flex-1 animate-fade-in-up flex-col">
      <ul className="flex flex-col gap-y-4">
        {listings &&
          listings.map(
            (listing: {
              id: string;
              location: string;
              bedrooms: string;
              bathrooms: string;
              price: string;
              type: string;
            }) => {
              const { id, location, bedrooms, bathrooms, price, type } =
                listing;

              return (
                <li key={`listing-${id}`}>
                  <Link href={`/${searchType}/details/${id}`}>
                    <article className="flex gap-4 rounded-2xl border p-4">
                      <div className="flex h-32 w-32 flex-shrink-0 rounded-2xl bg-slate-200" />
                      <div className="flex flex-col">
                        <p className="text-2xl">{price}</p>
                        <p className="text-lg">{location}</p>
                        <p className="text-base">{type}</p>
                        <ul className="flex items-center gap-x-2">
                          <li className="text-base">{bedrooms} 🛏️</li>
                          <li className="text-base">{bathrooms} 🛁</li>
                        </ul>
                      </div>
                    </article>
                  </Link>
                </li>
              );
            }
          )}
      </ul>
    </main>
  );
}
