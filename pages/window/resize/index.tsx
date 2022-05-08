import type { NextPage } from 'next'
import React, {ReactNode, useCallback, useEffect, useMemo, useState} from 'react'

const WindowResizePage: NextPage = () => {
  const handleResize = useCallback(() => {
    console.log(`window size: ${window.innerWidth}x${window.innerHeight}`)
    // setCalendarWrapperSx(getCalendarWrapperSx(buttonsRef));
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div>
      window resize
    </div>
  )
}

export default WindowResizePage