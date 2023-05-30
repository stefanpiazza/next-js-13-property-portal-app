async function getData(params: {
  searchType: string;
  propertyType: string;
  id: string;
}) {
  const { searchType, propertyType, id } = params;

  const res = await fetch(
    `${process.env.API_LISTING_URL}?` +
      new URLSearchParams({
        search_type: searchType,
        property_type: propertyType,
        id: id,
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
    id: string;
  };
}) {
  const data = await getData(params);

  const { listing } = data;

  const { location, bedrooms, bathrooms, price, type, description } = listing;

  return (
    <main className="flex flex-1 animate-fade-in-up flex-col">
      <ul className="flex flex-col gap-y-4">
        <li>
          <article className="flex flex-col gap-4 rounded-2xl border bg-white p-4">
            <div className="flex aspect-video rounded-2xl bg-slate-200" />
            <div className="flex flex-col">
              <p className="text-2xl">{price}</p>
              <p className="text-lg">{location}</p>
              <p className="text-base">{type}</p>
              <ul className="flex items-center gap-x-2">
                <li className="text-base">{bedrooms} 🛏️</li>
                <li className="text-base">{bathrooms} 🛁</li>
              </ul>
              <p className="text-sm">{description}</p>
            </div>
          </article>
        </li>
      </ul>
    </main>
  );
}
