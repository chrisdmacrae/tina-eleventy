import React from "react"
import { useForm, usePlugin } from "tinacms"
import { ContentFrame } from "./ServerlessFrame"

export function EditablePage({ slug }) {
  const [, form] = useForm({
    id: "page",
    label: "Page",
    fields: [
      { component: 'text', name: 'test' }
    ],
    onSubmit: (values) => console.log(values)
  })

  usePlugin(form);
  
  return (
    <ContentFrame slug={slug} form={form} />
  )
}