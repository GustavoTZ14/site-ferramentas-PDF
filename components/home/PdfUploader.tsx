export default function PdfUploader({ openMenu }: { openMenu: boolean }) {
  return (
    <>
      <section className={`w-100 h-screen absolute top-0 right-0 shadow-l-xl bg-[#25262e] transition-transform duration-300 ${openMenu ? "translate-x-0" : "translate-x-full"}`}>
        <article>

        </article>
      </section>
    </>
  )
}
