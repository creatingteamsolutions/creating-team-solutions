import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link as ScrollLink } from "react-scroll";
import { SectionId } from "../sectiondetails";
import TeamHeaderImage from "./assets/images/teamheader.jpg";

export function TitleSection() {
    return (
        <Box sx={{ position: "relative" }}>
            <Box
                sx={{
                    position: "absolute",
                    backgroundColor: "#000",
                    top: "0",
                    left: "0",
                    right: "0",
                    height: "100%",
                    width: "100%",
                    opacity: ".35",
                    zIndex: 2,
                }}
            />
            <Box
                sx={{
                    backgroundImage: `url(${TeamHeaderImage})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "scroll",
                    backgroundSize: "cover",
                    height: { xs: 461, md: 640 },
                }}
            >
                <Box
                    sx={{
                        zIndex: 3,
                        position: "relative",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        variant="h3"
                        align="center"
                        color="white"
                        fontWeight={700}
                        textTransform="uppercase"
                    >
                        Team Solutions
                    </Typography>
                    <Typography
                        variant="h6"
                        align="center"
                        color="white"
                        fontStyle="italic"
                        fontWeight={400}
                    >
                        Creating Team Solutions By Transforming Team Dynamics
                        And Developing Every Leader
                    </Typography>
                    <Box pt={3}>
                        <ScrollLink
                            to={SectionId.About}
                            smooth={true}
                            duration={500}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    display: "block",
                                    margin: "auto",
                                    color: "white",
                                }}
                            >
                                Who We Are
                            </Button>
                        </ScrollLink>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
