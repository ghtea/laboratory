import type { NextPage } from 'next'
import React, {ReactNode, useCallback, useEffect, useMemo, useState} from 'react'

// for more study: https://sumini.dev/issue/000-nextjs-window,document-is-not-defined/
const WindowPage: NextPage = () => {
  console.log("render"); // TODO: remove

  if (typeof window !== "undefined") {
    console.log("window", window)
  } else {
    console.log("no window")
  }

  if (typeof document !== "undefined") {
    console.log("document", document)
  } else {
    console.log("no document")
  }

  useEffect(() => {
    console.log("window", window)
  }, [])

  return (
    <div>
      window
    </div>
  )
}

export default WindowPage