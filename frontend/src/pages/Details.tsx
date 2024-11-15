import React, { useState, useEffect } from "react";

interface Destination {
  id: string;
  name: string;
  description: string;
  location: string;
  // Add other properties based on the API response structure
}

interface DestinationDetailProps {
  destinationId: string;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({
  destinationId,
}) => {
  const [destination, setDestination] = useState<Destination | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDestination();
  }, [destinationId]);

  const fetchDestination = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/destination/${destinationId}`
      );
      if (!response.ok) throw new Error("Failed to fetch destination details");

      const data: Destination = await response.json();

      setDestination(data);
      setLoading(false);
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{destination?.name}</h1>
      <p>{destination?.description}</p>
      <p>Location: {destination?.location}</p>
    </div>
  );
};

export default DestinationDetail;
