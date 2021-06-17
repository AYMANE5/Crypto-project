import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useGoogleAuth } from "../context/googleAuth";

//La private route sera accessible que si le user est authentifié sinon il sera redirigé a la page login
//render{} => https://reactjs.org/docs/render-props.html
const PrivateRouter = ({ component: Component, ...rest }) => {
	const { isSignedIn } = useGoogleAuth();

	return (
		<div>
			<Route
				{...rest}
				component={(props) =>
					isSignedIn ? (
						<Component {...props} />
					) : (
						<Redirect exact from="/" to="/login" />
					)
				}
			/>
		</div>
	);
};

export default PrivateRouter;
