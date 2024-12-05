import React, { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  const articles = [
    {
      title: "Understanding the difference between grid-template and grid-auto",
      content:
        "With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between grid-template-* and grid-auto-* properties.",
      date: "Oct 09, 2018",
    },
    {
      title: "Recreating the GitHub Contribution Graph with CSS Grid Layout",
      content:
        "An explanation of how to create GitHub's Contribution Graph using CSS Grid.",
      date: "Nov 15, 2018",
    },
    {
      title: "CSS Grid: A Comprehensive Guide",
      content: "Learn everything you need to know about CSS Grid in this guide.",
      date: "Dec 01, 2018",
    },
  ];

  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  };

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(search.toLowerCase()) ||
      article.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            flex: "2",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />

        <div
          style={{
            flex: "1",
            padding: "10px",
            backgroundColor: "#f4f4f4",
            borderRadius: "5px",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h4 style={{ margin: "0 0 10px" }}>About</h4>
          <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.5" }}>
            Articles on Frontend Development. All articles are written by
            <strong> Ire Aderinokun</strong>, Frontend Developer and User
            Interface Designer.
          </p>
        </div>
      </div>

      <p>{filteredArticles.length} posts were found.</p>
      {filteredArticles.map((article, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3
            dangerouslySetInnerHTML={{
              __html: highlightText(article.title, search),
            }}
          />
          <small style={{ color: "#555" }}>{article.date}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: highlightText(article.content, search),
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
