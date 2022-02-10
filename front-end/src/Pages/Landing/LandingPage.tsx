import React from "react";
import { Container } from "../../Styles/Landing.style";
import Footer from "../../Components/Footer.component";
import Header from "../../Components/Header.component";

function LandingPage(): JSX.Element {
    return (
        <div>
            <Header />
            <Container> Hello </Container>
            <Footer />
        </div>
    );
}

export default LandingPage;
