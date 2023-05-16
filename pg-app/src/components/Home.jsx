import React from "react";

export default function Home() {
  return (
    <>
      <section
        style={{
          dispaly: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          backgroundColor: "#212529",
          height: "91vh"
        }}
      >
        <p
          style={{
            width: "50%",
            height: "80%",
            display: "inline",
            paddingRight: "20px",
            paddingLeft: "20px",
            marginTop: "50px",
            fontFamily: "sans-serif",
            color: "blue",
            fontSize: "39.5px",
          }}
        >
          <span style={{color: "#1affff"}}>Welcome to </span>Navik-Asset-Tracking.
        </p>
        <span style={{ width: "50%", height: "100%", borderRadius: "50%" }}>
          <img
            src="vector1.jpg"
            alt="home image"
            style={{ width: "49%", height: "80%", marginTop: "50px", borderRadius: "8%"  }}
          ></img>
        </span>
      </section>
    </>
  );
}
