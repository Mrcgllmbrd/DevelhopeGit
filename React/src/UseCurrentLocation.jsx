import { useEffect, useState } from "react";

export function UseCurrentLocation() {
  const [position, setPosition] = useState(null);
  const [errorPosition, setError] = useState(null);
  const [loadingPosition, setLoading] = useState(false);

  useEffect(() => {
    setPosition(true);
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(latitude);
        setPosition({ latitude, longitude });
      });

    } catch (error) {
      setError(error);

    } finally {
      setLoading(false);
    }
  }, []);

  return {
    position,
    errorPosition,
    loadingPosition,
  };
}



/* 
Write the useCurrentLocation custom hook, 
that uses the browser's navigator.geolocation API
to get the current location
of the user through the getCurrentPosition builtin method.
The hook should return the current location
as well as a function to get the current location,
and the error and loading states.
The details on how to use this API can be found here
*/
