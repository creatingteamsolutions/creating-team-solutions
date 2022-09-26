import Box from "@mui/material/Box";
import * as React from "react";
import { Contact } from "./sections/contact/Contact";
import { Experience } from "./sections/experience/Experience";
import { Header } from "./sections/header/Header";
import { Speakers } from "./sections/speakers/Speakers";
import { Testimonials } from "./sections/testimonials/Testimonials";
import { TitleSection } from "./sections/title/TitleSection";
import { WhoWeAre } from "./sections/whoweare/WhoWeAre";
import { WorkshopsSection } from "./sections/workshops/WorkshopsSection";

export function App() {
    return (
        <React.Fragment>
            <Header />
            <Box
                component="main"
                sx={{ position: "relative", marginTop: { xs: 0, md: 8 } }}
            >
                <TitleSection />
                <WhoWeAre />
                <Speakers />
                <WorkshopsSection />
                <Experience />
                <Testimonials />
                <Contact />
            </Box>
        </React.Fragment>
    );
}
