export default async function Page() {
  return (
    <main className="flex flex-1 animate-fade-in-up flex-col">
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 aspect-video rounded-2xl bg-slate-200" />

        <div className="col-span-6 aspect-video rounded-2xl bg-slate-200 md:col-span-3" />
        <div className="col-span-6 aspect-video rounded-2xl bg-slate-200 md:col-span-3" />
        <div className="col-span-6 aspect-video rounded-2xl bg-slate-200 md:col-span-2" />
        <div className="col-span-6 aspect-video rounded-2xl bg-slate-200 md:col-span-2" />
        <div className="col-span-6 aspect-video rounded-2xl bg-slate-200 md:col-span-2" />
      </div>
    </main>
  );
}
