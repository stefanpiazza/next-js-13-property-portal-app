export default function Loading() {
  return (
    <main className="flex flex-1 flex-col">
      <ul className="flex flex-col gap-y-4">
        {[...Array(6)].map((index) => (
          <li key={`listing-${index}`}>
            <article className="flex gap-4 rounded-2xl border p-4">
              <div className="flex h-32 w-32 flex-shrink-0 rounded-2xl bg-slate-200" />
              <div className="flex flex-col gap-y-1">
                <p className="h-7 w-36 rounded-2xl bg-slate-200" />
                <p className="h-6 w-20 rounded-2xl bg-slate-200" />
                <p className="h-5 w-32 rounded-2xl bg-slate-200" />
                <ul className="flex items-center gap-x-2">
                  <li className="h-5 w-10 rounded-2xl bg-slate-200" />
                  <li className="h-5 w-10 rounded-2xl bg-slate-200" />
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
