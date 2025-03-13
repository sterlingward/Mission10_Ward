import { useEffect, useState } from 'react';
import { fetchBowlers } from '../services/api'; // Import API function

// Define Bowler Type
interface Bowler {
  bowlerID: number;
  bowlerLastName: string;
  bowlerFirstName: string;
  bowlerMiddleInit?: string | null;
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  team?: {
    teamName: string;
  } | null; // Ensure this is nullable to prevent crashes
}

export default function BowlerTable() {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchBowlers()
      .then((data) => {
        setBowlers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching bowlers:', err);
        setError('Failed to load bowlers. Please check API.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading bowlers...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  return (
    <div>
      <h2>Bowlers</h2>
      <table border={1} cellPadding={5} cellSpacing={0}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((bowler) => (
            <tr key={bowler.bowlerID}>
              <td>
                {bowler.bowlerFirstName} {bowler.bowlerMiddleInit || ''}{' '}
                {bowler.bowlerLastName}
              </td>
              <td>{bowler.team?.teamName || 'No Team'}</td>{' '}
              {/* Ensure it doesn't break if team is null */}
              <td>{bowler.bowlerAddress}</td>
              <td>{bowler.bowlerCity}</td>
              <td>{bowler.bowlerState}</td>
              <td>{bowler.bowlerZip}</td>
              <td>{bowler.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
