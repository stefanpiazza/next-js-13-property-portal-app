import { redirect } from "next/navigation";
import React from "react";

async function getSearch(data: FormData) {
  "use server";

  const { search_type, location, property_type } = Object.fromEntries(data);

  redirect(
    `/${search_type}/${property_type}/${(location as string).toLowerCase()}`
  );
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    searchType: string;
    propertyType: string;
    location: string;
  };
}) {
  const { searchType, propertyType, location } = params;

  return (
    <>
      <form
        className="flex flex-col gap-y-4 rounded-2xl border p-4"
        action={getSearch}
      >
        <input type="hidden" name="search_type" value={searchType} />
        <input type="hidden" name="property_type" value={propertyType} />

        <div className="flex w-full flex-col gap-y-1">
          <label className="text-base font-semibold" htmlFor="location">
            Location
          </label>
          <input
            className="rounded-2xl border p-4"
            type="text"
            name="location"
            list="location"
            required
            defaultValue={location.charAt(0).toUpperCase() + location.slice(1)}
            autoComplete="off"
          />
          <datalist id="location">
            <option>London</option>
            <option>Manchester</option>
            <option>Liverpool</option>
            <option>Leeds</option>
          </datalist>
        </div>

        <button className="rounded-2xl border p-4 text-base hover:bg-slate-200">
          Submit
        </button>
      </form>
      {children}
    </>
  );
}
