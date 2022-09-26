import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/system";
import { ExperienceDetail } from "./assets/texts/experiencedetails";

interface PlaceSpokenProps extends ExperienceDetail {
    isLeftSide: boolean;
}

export function PlaceSpoken({
    years,
    hostingOrganization,
    location,
    locationImage,
    isLeftSide,
}: PlaceSpokenProps) {
    const theme = useTheme();

    const cardImageElement = (
        <CardMedia
            component="img"
            sx={{ width: { xs: 0, sm: 75, md: 150 } }}
            image={locationImage}
            alt="Live from space album cover"
        />
    );

    const leftCardContent = isLeftSide ? null : cardImageElement;
    const rightCardContent = isLeftSide ? cardImageElement : null;

    const extraCardBoxStyles: SxProps = isLeftSide
        ? {
              flex: 1,
              alignItems: "flex-end",
          }
        : {};

    const extraCardContentStyles: SxProps = isLeftSide
        ? {
              alignItems: "flex-end",
          }
        : {};

    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
            >
                {years}
            </TimelineOppositeContent>

            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot
                    sx={{ backgroundColor: `${theme.palette.primary.main}` }}
                >
                    <BusinessCenterIcon />
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Card sx={{ display: "flex" }}>
                    {leftCardContent}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            ...extraCardBoxStyles,
                        }}
                    >
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                ...extraCardContentStyles,
                            }}
                        >
                            <Typography variant="subtitle2">
                                {hostingOrganization}
                            </Typography>
                            <Typography variant="caption">
                                {location}
                            </Typography>
                        </CardContent>
                    </Box>
                    {rightCardContent}
                </Card>
            </TimelineContent>
        </TimelineItem>
    );
}
