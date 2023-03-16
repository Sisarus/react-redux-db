import React, { useState } from "react";
import { useAddDestinationMutation } from "../api/destinationApi";

function AddDestination() {
    const [newCity, setNewCity] = useState("");
    const [newCountry, setNewCoutry] = useState("");
    const [addDestinationMutation] = useAddDestinationMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        //addDestination
        addDestinationMutation({
            id: parseInt(Math.random() * 100) + 1,
            city: newCity,
            country: newCountry,
            daysNeeded: parseInt(Math.random() * 10) + 1,
        });
        setNewCity("");
        setNewCoutry("");
    };

    return (
        <div className="p-4 boder">
            <form onSubmit={handleSubmit}>
                <div className="row col-8 offset-2">
                    <h4>Enter a new Destination</h4>
                    <div className="col-5 p-1">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter city"
                            value={newCity}
                            onChange={(e) =>
                                setNewCity(e.target.value)
                            }
                        />
                    </div>
                    <div className="col-5 p-1">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Country"
                            value={newCountry}
                            onChange={(e) => {
                                setNewCoutry(e.target.value);
                            }}
                        />
                    </div>
                    <div className="col-2 p-1">
                        <button className="btn btn-success form-control">
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddDestination;
