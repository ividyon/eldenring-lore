import { t } from '@utils/i18n';
import MiniSearch from 'minisearch';
import { FormEventHandler, useCallback, useEffect, useState } from 'react';
import "./App.css";
import Card from './components/Card';
import Header from './components/layout/Header';
import SearchBar from './components/SearchBar';
import dataJson from './data/data.json';
import { DataPoint, DataSearchResult } from './data/types';
import { Container } from './styles';
function App() {
  const [search, setSearch] = useState<string>("");
  useEffect(() => {
    document.title = search ? `${search} - ${t("title")}`: t("title");
  })

  useEffect(() => {
    const currParams = new URLSearchParams(window.location.search);
    const q = currParams.get('q');

    if (q) setSearch(q);
  }, [])

  let miniSearch = new MiniSearch<DataPoint>({
    fields: ['title', 'body'], // fields to index for full-text search
    storeFields: ['title', 'body'] // fields to return with search results
  })
  
  // Index all documents
  miniSearch.addAll(dataJson.data)

  const searchChangeHandler: FormEventHandler<HTMLInputElement> = useCallback((e) => {
    
    e.persist();
    const value = (e.target as HTMLInputElement).value;
    setSearch(value)
    const params = new URLSearchParams(window.location.search);
    params.set("q", value)
    window.history.replaceState(null, "", `?${params.toString()}`);
  }, []);
  const results = miniSearch.search(search, {
    fuzzy: 0.3,
    boost: {
      title: 4,
    },
    prefix: true,
  });
  
  return (
    <Container>
      <Header />
      <SearchBar onInput={searchChangeHandler} />
      {results.map(result => 
        <Card data={result as DataSearchResult} />
      )}
    </Container>
  );
}

export default App;
