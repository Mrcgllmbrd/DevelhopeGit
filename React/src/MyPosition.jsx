import { UseCurrentLocation } from "./UseCurrentLocation";

export function MyPosition({user}) {
  const { position, loadingPosition, errorPosition } = UseCurrentLocation();

  return (
    <div>
      {position && !loadingPosition && (
        <h1>
          {user}: 
          Latitude: {position.latitude},
          Longitude: {position.longitude}
        </h1>
      )}
      {loadingPosition && <h1>loading position...</h1>}
      {errorPosition && <h1>Position not found</h1>}
    </div>
  );
}
