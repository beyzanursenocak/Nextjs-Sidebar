import React from 'react'
import { useTranslations } from 'next-intl'

const Transaction = () => {
  const t = useTranslations();

  return (
    <div>
      {t("test")}
    </div>
  )
}

export default Transaction
