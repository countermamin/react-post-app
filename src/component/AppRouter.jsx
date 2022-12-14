import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
	const { isAuth, isLoading } = useContext(AuthContext);
	if (isLoading) {
		return <Loader />;
	}

	return isAuth ? (
		<Routes>
			{privateRoutes.map(route => (
				<Route
					path={route.path}
					exact={route.exact}
					element={route.element}
					key={route.path}
				/>
			))}
			<Route path='/login' element={<Navigate to='/posts' />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(route => (
				<Route
					path={route.path}
					exact={route.exact}
					element={route.element}
					key={route.path}
				/>
			))}
			<Route path='posts/*' element={<Navigate to='/login' />} />
			<Route path='about' element={<Navigate to='/login' />} />
		</Routes>
	);
};

export default AppRouter;
