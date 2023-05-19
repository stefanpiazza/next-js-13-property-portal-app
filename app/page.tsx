import { redirect } from "next/navigation";

async function getSearch(data: FormData) {
  "use server";

  const { search_type, location, property_type } = Object.fromEntries(data);

  redirect(
    `/${search_type}/${property_type}/${(location as string).toLowerCase()}`
  );
}

export default async function Page() {
  return (
    <main className="flex flex-1 flex-col">
      <form
        className="flex flex-col gap-y-4 rounded-2xl border p-4"
        action={getSearch}
      >
        <fieldset className="flex flex-col gap-y-1">
          <legend className="text-base font-semibold">
            Select search type
          </legend>

          <div className="flex gap-x-4">
            <div className="flex gap-x-1">
              <input
                type="radio"
                id="for-sale"
                name="search_type"
                value="for-sale"
                defaultChecked
              />
              <label className="text-base" htmlFor="for-sale">
                For Sale
              </label>
            </div>

            <div className="flex gap-x-1">
              <input
                type="radio"
                id="to-rent"
                name="search_type"
                value="to-rent"
              />
              <label className="text-base" htmlFor="to-rent">
                To Rent
              </label>
            </div>

            <div className="flex gap-x-1">
              <input
                type="radio"
                id="new-homes"
                name="search_type"
                value="new-homes"
              />
              <label className="text-base" htmlFor="new-homes">
                New Homes
              </label>
            </div>
          </div>
        </fieldset>

        <div className="flex flex-col gap-y-1">
          <label className="text-base font-semibold" htmlFor="location">
            Location
          </label>
          <input
            className="rounded-2xl border p-4"
            type="text"
            name="location"
            list="location"
            required
            autoComplete="off"
          />
          <datalist id="location">
            <option>London</option>
            <option>Manchester</option>
            <option>Liverpool</option>
            <option>Leeds</option>
          </datalist>
        </div>

        <fieldset className="flex flex-col gap-y-1">
          <legend className="text-base font-semibold">
            Select property type
          </legend>
          <div className="flex gap-x-4">
            <div className="flex gap-x-1">
              <input
                type="radio"
                id="all"
                name="property_type"
                value="property"
                defaultChecked
              />
              <label className="text-base" htmlFor="all">
                All
              </label>
            </div>

            <div className="flex gap-x-1">
              <input
                type="radio"
                id="houses"
                name="property_type"
                value="houses"
              />
              <label className="text-base" htmlFor="houses">
                Houses
              </label>
            </div>

            <div className="flex gap-x-1">
              <input
                type="radio"
                id="flats"
                name="property_type"
                value="flats"
              />
              <label className="text-base" htmlFor="flats">
                Flats
              </label>
            </div>
          </div>
        </fieldset>

        <button className="rounded-2xl border p-4 text-base">Submit</button>
      </form>
    </main>
  );
}
