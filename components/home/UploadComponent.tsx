
"use client";
import { useState } from "react";
import { Trash, GripVertical } from 'lucide-react';

export default function Hero() {
  const [arquivo, setArquivo] = useState<File[]>([]);

  function excluirArquivo(index: number) {
    setArquivo((filesAtuais) =>
      filesAtuais.filter((_, i) => i !== index)
    );
  }

  return (
    <section className="p-15 w-full">
      <article>

      </article>
    </section >
  )
}
