import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./StorePage.module.css";
import RenderProducts from "../components/RenderProducts";
import Button from "../components/Button";

import useFetchStuff from "../hooks/useFetchStuff";

import { NUM_RESULT } from "../config";

function StorePage({ categories }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const pathname = searchParams.get("query");

  useEffect(() => {
    document.title = `Cholobob Store ${pathname ? `| ${pathname}` : ""}`;
    setResults([]);
    getMoreResults();
  }, [pathname]);

  function getMoreResults() {
    const newResults = useFetchStuff(pathname, NUM_RESULT);
    newResults.map((result) => {
      setResults((results) => [...results, result]);
    });
  }

  function changeSerachQuery(query) {
    setSearchParams({ query });
    setResults([]);
    getMoreResults();
  }

  return (
    <div>
      <header className={styles.header}>
        <div>
          <p>{pathname ? `Results for: ${pathname}` : "Categories"}</p>
          {pathname ? (
            <p
              className={`${styles.link} active`}
              onClick={() => setSearchParams({})}
            >
              clear
            </p>
          ) : null}
        </div>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            changeSerachQuery(e.target[0].value);
            e.target[0].value = "";
          }}
        >
          <input type="text" placeholder="Search" />
          <Button type="purple">Submit</Button>
        </form>
        <ul className={styles.ul}>
          {categories.map((category) => (
            <a
              key={category}
              onClick={() => changeSerachQuery(category)}
              className={`${styles.link} ${
                pathname === category ? "active" : ""
              }`}
            >
              {category}
            </a>
          ))}
        </ul>
      </header>
      <div className={styles.container}>
        {results.map((result) => (
          <RenderProducts key={result.id} result={result} />
        ))}
      </div>
      <div className={styles.showMoreContainer}>
        <Button type="blue" onClick={getMoreResults}>
          Show More
        </Button>
      </div>
    </div>
  );
}

export default StorePage;
