import React from "react"

import {Navigate, Outlet} from "react-router-dom"

const useAuth = () => {

	let a = localStorage.getItem("role")

	if (a) {
		_user = JSON.parse(_user)
		console.log("user", _user)
	}
	if (a) {
		return {
			auth: true,
			role: _user.role,
		}
	} else {
		return {
			auth: false,
			role: null,
		}
	}
}



const ProtectedRoutes = (userRole) => {
	const {auth, role} = useAuth()

	//if the role required is there or not
	if (userRole) {
		return auth ? (
			userRole === role ? (
				<Outlet />
			) : (
				<Navigate to="/" />
			)
		) : (
			<Navigate to="/" />
		)
	} else {
		return auth ? <Outlet /> : <Navigate to="/login" />
	}
}

export default ProtectedRoutes