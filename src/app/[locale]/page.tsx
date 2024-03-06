import { useTranslations } from 'next-intl'
import React from 'react'

  export const Page: React.FC = () => {
    const t = useTranslations();
    t("test")
  return (
    <div className='text-sidebar-active'>
      {t("test")}
    </div>
  )
}

export default Page

