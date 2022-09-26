import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import React from "react";
import { Element } from "react-scroll";
import { alternateBackgroundColor } from "../../../styles/MaterialUiTheme";
import { SectionId } from "../sectiondetails";
import { speakers } from "./assets/texts/speakerdescriptions/speakerdescriptions";
import { Speaker } from "./Speaker";

export function Speakers() {
    return (
        <React.Fragment>
            <Element name={SectionId.Speakers} />
            <Box sx={{ py: 8, backgroundColor: alternateBackgroundColor }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        color="black"
                        fontWeight={500}
                        textTransform="uppercase"
                        pb={3}
                    >
                        Speakers
                    </Typography>

                    <Grid container spacing={4}>
                        {speakers.map((speaker) => (
                            <Speaker
                                name={speaker.name}
                                credentials={speaker.credentials}
                                image={speaker.image}
                                bio={speaker.bio}
                            />
                        ))}
                    </Grid>
                </Container>
            </Box>
        </React.Fragment>
    );
}
