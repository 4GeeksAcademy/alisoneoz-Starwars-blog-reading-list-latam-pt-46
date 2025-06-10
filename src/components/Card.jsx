import React from 'react'

const Card = ({item, category}) => {
    
    return (
        <div key={item.uid} className="col-md-3 mb-3">
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Description of {item.name} goes here.</p>
                    <Link to={`/${category}/${item.uid}`} className="btn btn-primary">More Info</Link>
                    <button className="btn btn-success">favorito</button>
                </div>
            </div>
        </div>
    )
}

export default Card