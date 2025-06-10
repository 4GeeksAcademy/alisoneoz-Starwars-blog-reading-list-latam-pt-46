import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store } = useGlobalReducer()
  
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars</span>
				</Link>
				
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites ({store.favorites.length})
					</button>
					<ul className="dropdown-menu">
						{store.favorites.length === 0 
							? (<li>(Empty!)</li>) 
							: (
								store.favorites.map((favoriteItem)=>(
									<li  className="dropdown-item" key={favoriteItem.uid}>
										<div className="">{favoriteItem.name} <FaTrash /></div>
										
									</li>
								))
							)
						}					
					</ul>
				</div>
			</div>
		</nav>
	);
};