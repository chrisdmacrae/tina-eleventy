import React, { ReactNode } from 'react'
import { TinaCMS, TinaProvider } from 'tinacms'
import { EditablePage } from './EditablePage'

export interface CmsProviderProps {
  editMode?: boolean
  sidebar?: boolean
  toolbar?: boolean
  children?: ReactNode
}

export function CmsProvider({ editMode, sidebar, toolbar, children, ...props }: CmsProviderProps) {
  const cms = React.useMemo(() => new TinaCMS({
    enabled: editMode ?? false,
    sidebar: sidebar ?? editMode ?? false,
    toolbar: toolbar ?? editMode ?? false
  }), [editMode, sidebar, toolbar])

  return (
    <TinaProvider cms={cms}>
      <EditablePage slug={"index"} />
    </TinaProvider>
  )
}