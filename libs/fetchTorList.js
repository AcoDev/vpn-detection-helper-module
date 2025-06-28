import axios from 'axios';

const TOR_EXIT_LIST_URL = 'https://check.torproject.org/torbulkexitlist';

export async function fetchTorExitNodes() {
  try {
    const res = await axios.get(TOR_EXIT_LIST_URL);
    const lines = res.data
      .split('\n')
      .map(line => line.trim())
      .filter(ip => ip && !ip.startsWith('#'));

    return new Set(lines);
  } catch (err) {
    console.error('Failed to fetch Tor exit node list:', err.message);
    return new Set();
  }
}