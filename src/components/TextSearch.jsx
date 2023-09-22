import React, { useState } from "react";

const articles = `JavaScript is the world's most popular programming language.

JavaScript is the programming language of the Web.

JavaScript is easy to learn.

This tutorial will teach you JavaScript from basic to advanced.
  Use the Menu
We recommend reading this tutorial, in the sequence listed in the menu.

If you have a large screen, the menu will always be present on the left.

If you have a small screen, open the menu by clicking the top menu sign ☰.

Learn by Examples
Examples are better than 1000 words. Examples are often easier to understand than text explanations.

This tutorial supplements all explanations with clarifying "Try it Yourself" examples.`;

const TextSearch = () => {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  const countOccurrences = (str, term) => {
    const regex = new RegExp(term, "gi");
    const matches = str.match(regex);
    return matches ? matches.length : 0;
  };

  const highlightText = (text, term) => {
    const regex = new RegExp(`(${term})`, "gi");
    return text
      .split(regex)
      .map((part, index) =>
        part.toLowerCase() === term.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          part
        )
      );
  };

  const searchedItems = highlightText(articles, searchItem);
  const searchCount = countOccurrences(articles, searchItem);

  return (
    <div>
      <h2>Search:</h2>
      <input type="text" value={searchItem} onChange={handleInputChange} />
      {searchItem == 0 ? (
        <></>
      ) : (
        <>
          <p>{searchCount} posts were found</p>
        </>
      )}
      <p>{searchedItems}</p>
    </div>
  );
};

export default TextSearch;
