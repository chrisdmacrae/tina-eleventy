import React from "react"
import { useForm, usePlugin } from "tinacms"
import { RemoteContentFrame } from "./RemoteContentFrame"

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
    <RemoteContentFrame slug={slug} form={form} />
  )
}