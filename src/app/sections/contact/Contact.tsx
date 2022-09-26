import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import { Element } from "react-scroll";
import { SectionId } from "../sectiondetails";
import { contactInfos } from "./assets/texts/contactinfos/contactinfos";
import { ContactInfo } from "./ContactInfo";

export function Contact() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Element name={SectionId.Contact} />
            <Box
                sx={{
                    backgroundColor: "#333333",
                    height: 500,
                }}
            >
                <Box
                    sx={{
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
                        sx={{ mx: "auto" }}
                    >
                        Let's get in touch
                    </Typography>

                    <Divider
                        textAlign="center"
                        color={theme.palette.primary.main}
                        component="hr"
                        sx={{ mx: "auto", width: 50, height: 4 }}
                    />

                    <Grid container spacing={4}>
                        {contactInfos.map((contactInfo) => (
                            <ContactInfo
                                name={contactInfo.name}
                                phoneNumber={contactInfo.phoneNumber}
                                email={contactInfo.email}
                            />
                        ))}
                    </Grid>
                </Box>
            </Box>
        </React.Fragment>
    );
}
