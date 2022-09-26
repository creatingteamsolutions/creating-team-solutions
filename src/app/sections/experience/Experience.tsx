import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Timeline from "@mui/lab/Timeline";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Container, keyframes, SxProps } from "@mui/system";
import React from "react";
import { Element } from "react-scroll";
import { alternateBackgroundColor } from "../../../styles/MaterialUiTheme";
import { SectionId } from "../sectiondetails";
import { experienceDetails } from "./assets/texts/experiencedetails";
import { PlaceSpoken } from "./PlaceSpoken";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

export function Experience() {
    const [expanded, setExpanded] = React.useState(false);
    const theme = useTheme();

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    const pulseKeyframes = keyframes`
        0% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0;
          transform: scale(1.5);
        }
        100% {
          opacity: 0;
          transform: scale(1.5);
        }
`;

    const animateCollapseButtonCss: SxProps = !expanded
        ? {
              "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: "0",
                  left: "0",
                  backgroundColor: "inherit",
                  borderRadius: "inherit",
                  transition: "opacity .3s, transform .3s",
                  animation: `${pulseKeyframes} 1s cubic-bezier(0.24, 0, 0.38, 1) infinite`,
                  zIndex: `-1`,
              },
          }
        : {};

    return (
        <React.Fragment>
            <Element name={SectionId.Experience} />
            <Box sx={{ py: 8, backgroundColor: alternateBackgroundColor }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        color="black"
                        fontWeight={500}
                        textTransform="uppercase"
                    >
                        Where We've Been
                    </Typography>

                    <Timeline position="alternate">
                        {experienceDetails
                            .slice(0, 4)
                            .map((experienceDetail, idx) => {
                                return (
                                    <PlaceSpoken
                                        years={experienceDetail.years}
                                        hostingOrganization={
                                            experienceDetail.hostingOrganization
                                        }
                                        location={experienceDetail.location}
                                        locationImage={
                                            experienceDetail.locationImage
                                        }
                                        isLeftSide={idx % 2 === 1}
                                    />
                                );
                            })}

                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            {experienceDetails
                                .slice(4)
                                .map((experienceDetail, idx) => {
                                    return (
                                        <PlaceSpoken
                                            years={experienceDetail.years}
                                            hostingOrganization={
                                                experienceDetail.hostingOrganization
                                            }
                                            location={experienceDetail.location}
                                            locationImage={
                                                experienceDetail.locationImage
                                            }
                                            isLeftSide={idx % 2 === 1}
                                        />
                                    );
                                })}
                        </Collapse>
                    </Timeline>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <IconButton
                            onClick={handleExpandClick}
                            color="primary"
                            disableRipple
                            sx={{
                                backgroundColor: `${theme.palette.primary.main}`,
                                color: "white",
                                transform: !expanded
                                    ? "rotate(0deg)"
                                    : "rotate(180deg)",
                                transition: theme.transitions.create(
                                    "transform",
                                    {
                                        duration:
                                            theme.transitions.duration.shortest,
                                    }
                                ),
                                overflow: "visible",
                                position: "relative",
                                ...animateCollapseButtonCss,
                            }}
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    );
}
