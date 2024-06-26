import React from "react";
import ProductCarouselComponent from "../components/ProductCarouselComponent";
import CategoryCardComponent from "../components/CategoryCardComponent";
import { Container, Row } from "react-bootstrap";

const HomePage = () => {
  const categories = [
    "Tablets",
    "Monitors",
    "Games",
    "Printers",
    "software",
    "cameras",
    "books",
    "vidoes",
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
        <Row xs={1} md={2} className="g-4" mt-5>
          {categories.map((category, idx) => (
            <CategoryCardComponent key={idx} category={category} idx={idx} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
