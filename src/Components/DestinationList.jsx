import React from "react";
import {
    useGetAllDestinationQuery,
    useDeleteDestinationMutation,
} from "../api/destinationApi";

function DestinationList() {
    const { data, isLoading, isSuccess, isError, error } =
        useGetAllDestinationQuery();
    const [deleteDestination] = useDeleteDestinationMutation();

    let content;
    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        console.log(data);
        content = data.map((destination) => {
            return (
                <div
                    className="row py-1"
                    key={destination.id}
                    style={{
                        borderBottom: "1px solid #3333",
                        borderTop: "1px solid #333",
                    }}
                >
                    <div className="col-3 offset-3">
                        {destination.city}, {destination.country}
                    </div>
                    <div className="col-1 text-warning">
                        {destination.daysNeeded} days
                    </div>
                    <div className="col-2">
                        <button
                            className="btn btn-danger"
                            onClick={() =>
                                deleteDestination({
                                    id: destination.id,
                                })
                            }
                        >
                            Remove
                        </button>
                    </div>
                </div>
            );
        });
    } else if (isError) {
        content = <p>{error}</p>;
    }
    return <div>{content}</div>;
}

export default DestinationList;
