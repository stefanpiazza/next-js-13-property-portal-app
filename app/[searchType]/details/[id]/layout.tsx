import Link from "next/link";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    searchType: string;
    id: string;
  };
}) {
  const { searchType, id } = params;

  return (
    <>
      <header className="rounded-2xl border p-4">
        <nav>
          <ul className="flex justify-center gap-x-4">
            <li>
              <Link
                className="text-sm"
                href={`/${searchType}/details/${id}/images`}
              >
                Images
              </Link>
            </li>
            <li>
              <Link
                className="text-sm"
                href={`/${searchType}/details/${id}/floorplans`}
              >
                Floorplans
              </Link>
            </li>
            <li>
              <Link
                className="text-sm"
                href={`/${searchType}/details/${id}/map`}
              >
                Map
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </>
  );
}
