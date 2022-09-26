import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container } from "@mui/system";
import React from "react";
import { Element } from "react-scroll";
import YouTube from "react-youtube";
import { SectionId } from "../sectiondetails";

export function WhoWeAre() {
    const theme = useTheme();
    const isLargerThanSm = useMediaQuery(theme.breakpoints.up("sm"));
    const isLargerThanMd = useMediaQuery(theme.breakpoints.up("md"));

    const widthOfVideo = isLargerThanMd
        ? "1100"
        : isLargerThanSm
        ? "720"
        : "350";
    const opts = {
        height: "624",
        width: widthOfVideo,
        playerVars: {
            autoplay: 0,
            rel: 0,
            showinfo: 0,
            optimizeDisplay: 1,
        },
    };

    return (
        <React.Fragment>
            <Element name={SectionId.About} />
            <Box sx={{ py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        color="black"
                        textTransform="uppercase"
                        fontWeight={500}
                        pb={3}
                    >
                        Who We Are
                    </Typography>
                    <YouTube videoId="D3XeBOJ5LYM" opts={opts} />
                </Container>
            </Box>
        </React.Fragment>
    );
}
