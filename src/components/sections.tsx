import React from "react";

interface Props {
  title: string;
  description: string;
  animation: any;
  size: string;
}

export default function Section({
  title,
  description,
  animation,
  size
}: Props) {
  return (
    <section className="section-3" style={{ width: size }}>
      <div className="text">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
      <div className="graphic">{animation}</div>
    </section>
  );
}
