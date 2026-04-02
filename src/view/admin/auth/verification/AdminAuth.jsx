import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import globalVariable from "../../../../data/globalVariable"
import { getRolesList } from "../../../../redux/action"
import { veryfyCookie } from "../../../../services/profile/profileServices"
import { Loader1 } from "../../../../components/loader/Loader1"
import MainAdminPanel from "../../pages/MainAdminPanel"



const AdminAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [cookies] = useCookies(['admin_access_token'])

  const [status, setStatus] = useState('check')



  useEffect(() => {
    if (cookies.admin_access_token) {
      globalVariable.accessToken = cookies.admin_access_token
      if (sessionStorage.getItem('admin_access_details')) {
        setStatus('verified')
        dispatch(getRolesList())
      } else {
        veryfyCookie(cookies, setStatus, dispatch, getRolesList, navigate)
      }
    } else {
      setStatus(false)
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {status === 'check' && (
        <div className="d-flex justify-content-center align-items-center authDiv">
          <Loader1 />
        </div>
      )}
      {status === 'verified' && <MainAdminPanel />}
    </div>
  )
}

export default AdminAuth
