import type { ReactNode } from "react"
import useAuthStore from "../stores/authStore"

export interface ButtonLogoutProps {
  className?: string,
  children?: ReactNode,
}

export function ButtonLogout(props: Readonly<ButtonLogoutProps>) {
  const { logout } = useAuthStore()
  
  return(
    <button className={`p-2 ${props.className}`} type="button" onClick={logout}>{ props.children }</button>
  )
}