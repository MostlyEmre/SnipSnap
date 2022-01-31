import React from "react";
import { storiesOf } from "@storybook/react";
import { SnipSnap } from "../components/SnipSnap";

const stories = storiesOf(`SnipSnap Test`, module);

const content = [
  {
    title: "Hello 1",
    img: "http://www.fillmurray.com/460/300",
    post: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, numquam totam. Dolorem, minima quo obcaecati ea repellat eius odit.",
  },
  {
    title: "No way!!",
    img: "http://www.fillmurray.com/460/300",
    post: "Nope Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, numquam totam. Dolorem, minima quo obcaecati ea repellat eius odit.",
  },
  {
    title: "Spider-Man",
    img: "http://www.fillmurray.com/460/300",
    post: "Peter Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, numquam totam. Dolorem, minima quo obcaecati ea repellat eius odit.",
  },
];

stories.add("SnipSnap", () => {
  return (
    <>
      {content.map((item, index) => (
        <SnipSnap breakpoint="600px" reverseOrder={false} id={index}>
          <div>
            <h1 style={{ color: "aquamarine" }}>{item.title}</h1>
            <p style={{ color: "white" }}>{item.post}</p>
          </div>
          <div>
            <img src={item.img} />
          </div>
        </SnipSnap>
      ))}
    </>
  );
});
