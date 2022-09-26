import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import React from "react";
import { Element } from "react-scroll";
import { SectionId } from "../sectiondetails";
import { testimonialDetails } from "./assets/texts/testimonialdetails";
import { Testimonial } from "./Testimonial";

export function Testimonials() {
    return (
        <React.Fragment>
            <Element name={SectionId.Testimonials} />
            <Box sx={{ py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        color="black"
                        fontWeight={500}
                        textTransform="uppercase"
                        pb={3}
                    >
                        Testimonials
                    </Typography>

                    <Grid container spacing={4}>
                        {testimonialDetails.map((testimonialDetail) => (
                            <Testimonial
                                testimonialChunks={
                                    testimonialDetail.testimonialChunks
                                }
                                author={testimonialDetail.author}
                                extraCredentials={
                                    testimonialDetail.extraCredentials
                                }
                            />
                        ))}
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
    );
}
