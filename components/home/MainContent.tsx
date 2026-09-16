import Card from "./cardComponent";

export default function Main() {
  return (
    <>
      <section className="grid w-full h-screen pl-15 pr-15">
        <article className="w-full">
          <div className="grid grid-cols-5 gap-5">
            <Card />
          </div>
        </article>
      </section>
    </>
  )
}
