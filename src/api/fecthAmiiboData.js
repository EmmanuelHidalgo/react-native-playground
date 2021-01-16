const fetchAmiiboData =  async (term) => {
  const fixedTerm = term !== '' ? term : 'mario';
  const res = await fetch(`https://www.amiiboapi.com/api/amiibo/?character=${fixedTerm}`);
  const data = await res.json();
  console.log(data);
  return data;
}

export default fetchAmiiboData;