function Header({ changeMain, count }) {
  return (
    <>
      <div className="container">
        <div
          className="header"
          style={{
            backgroundColor: "#4f86da",
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem 2rem",
            borderRadius: "1rem",
            margin: "0 .5rem",
          }}
        >
          <h2 style={{ color: "#fff" }}>Navigation</h2>
          <button
            style={{
              borderColor: "gray",
              padding: ".5rem",
              border: "none",
              borderRadius: ".3rem",
            }}
            onClick={() => changeMain()}
          >
            {count ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
