import Card from "./cardComponent";
import PdfUploader from "@/components/home/PdfUploader";

export default function Main({ openMenu }: { openMenu: boolean }) {
  return (
    <>
      <section className="flex w-full h-screen bg-[#1c1b21] p-15 relative">
        <article className="w-full">
          <div className="grid grid-cols-5 gap-5">
            <Card />
          </div>
        </article>
        <PdfUploader openMenu={openMenu} />
      </section>
    </>
  )
}
