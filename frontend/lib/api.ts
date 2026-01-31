const API_URL = "http://localhost:5000/api";

export const fetchDeals = async () => {
  const res = await fetch(`${API_URL}/deals`);
  return res.json();
};

export const fetchMyClaims = async () => {
  const res = await fetch(`${API_URL}/claims`);
  return res.json();
};
