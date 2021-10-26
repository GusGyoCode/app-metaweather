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

const useGlobalState = () => {
  const [language, setLanguage] = useState(initialStateTranslate)
  const [isDark, setIsDark] = useState('dark')
  const [data, setData] = useState([])
  const [validation, setValidation] = useState(false)
  const [error, setError] = useState(false)

  const handleTranslate = e => {
    storage.setItem('language', e)
  }
  const handleTheme = e => {
    storage.setItem('isDark', e)
  }

  useEffect(() => {
    handleTranslate(language)
    handleTheme(isDark)
  }, [language, isDark])

  return { language, setLanguage, isDark, setIsDark, data, setData, validation, setValidation, error, setError }
}

export default useGlobalState
