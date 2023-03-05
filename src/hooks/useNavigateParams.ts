import { useNavigate } from 'react-router-dom'

export const useNavigateParams = () => {
  const navigate = useNavigate()

  return (url: string, queryString?: string) => {
    let path = '/' + url
    if (queryString) {
      path += '/' + queryString
    }
    navigate(path)
  }
}
