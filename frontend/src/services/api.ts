export async function fetchBowlers() {
  const response = await fetch('http://localhost:5109/Bowlers'); // Ensure this matches your API port
  if (!response.ok) {
    throw new Error('Failed to fetch bowlers');
  }
  return response.json();
}
