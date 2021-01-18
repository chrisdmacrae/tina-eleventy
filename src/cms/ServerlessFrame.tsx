import React, { useEffect, useState } from "react"
import { Form } from "tinacms";

export interface ContentFrameProps {
  slug: string,
  form: Form,
  fileRelativePath?: string
}

export function ContentFrame({slug, fileRelativePath, form}: ContentFrameProps) {
  const endpoint = fileRelativePath ?? slug
  const [data, setData] = useState<string>();

  if (!endpoint) {
    return "Something went wrong..."
  }

  useEffect(() => {
    fetchData(`/api/11ty?slug=${endpoint}`)
      .then(data => setData(data.content))
  }, [])

  useEffect(() => {
    const unsubscribe = form.subscribe(values => {
      if (values.dirty) {
        setData(null);

        fetchData(`/api/11ty?slug=${endpoint}`)
          .then(data => setData(data.content))
      }
    }, {
        dirty: true,
        values: false
    })

    return () => {
      unsubscribe();
    }
  }, [])


  if (!data) {
    return "Loading..."
  }

  return (
    <div id="tina-content-frame" dangerouslySetInnerHTML={{ __html: data }} />
  )
}

export const fetchData = async (path: string): Promise<any> => {
  const data = await fetch(path, { });

  return data.json();
}