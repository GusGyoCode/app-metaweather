import { useEffect, useState } from 'react'
import storage from 'local-storage-fallback'

const initialStateTranslate = () => {
  if (typeof window !== 'undefined' && navigator !== 'undefined') {
    if (storage.getItem('language')) {
      return storage.getItem('language')
    } else {
      const ln = navigator.language || navigator.userLanguage
      if (ln === 'en-EN') {
        storage.setItem('language', ln)
        return 'en-EN'
      } else if (ln === 'es-ES') {
        storage.setItem('language', ln)
        return 'es-ES'
      } else {
        storage.setItem('language', 'en-EN')
        return 'en-EN'
      }
    }
  }
}
const initialStateTheme = () => {
  if (storage.getItem('isDark')) {
    return storage.getItem('isDark')
  } return 'dark'
}

const useGlobalState = () => {
  const [language, setLanguage] = useState(initialStateTranslate)
  const [isDark, setIsDark] = useState(initialStateTheme)

  const handleTranslate = e => {
    storage.setItem('language', e)
  }
  const handleTheme = e => {
    storage.setItem('isDark', e)
  }

  useEffect(() => {
    handleTranslate(language)
    handleTheme(isDark)
    console.log(isDark)
  }, [language, isDark])

  return { language, setLanguage, isDark, setIsDark }
}

export default useGlobalState
