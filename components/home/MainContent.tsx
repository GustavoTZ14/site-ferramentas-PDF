import Card from "./cardComponent";

export default function Main() {
  return (
    <>
      <section className="flex w-full h-screen bg-[#1c1b21] p-15">
        <article className="w-full h-screen">
          <div className="grid grid-cols-5 gap-5">
            <Card />
          </div>
        </article>
      </section>
    </>
  )
}
