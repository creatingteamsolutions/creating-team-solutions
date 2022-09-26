import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import React from "react";
import { Element } from "react-scroll";
import { SectionId } from "../sectiondetails";
import { availableWorkshops } from "./assets/texts/availableworkshops/availableworkshops";
import {
    WorkshopDescription,
    workshopDescriptions,
} from "./assets/texts/workshopdescrptions/workshopdescrptions";
import { WorkshopId } from "./assets/texts/workshopids";
import { Workshop } from "./Workshop";
import { WorkshopDialog } from "./WorkshopDialog";

export function WorkshopsSection() {
    const [selectedWorkshopDescription, setSelectedWorkshopDescription] =
        React.useState<WorkshopDescription | undefined>(undefined);

    function onClickLearnMore(workshopId: WorkshopId) {
        const description = workshopDescriptions.find(
            (workshopDescription) => workshopDescription.id === workshopId
        );
        setSelectedWorkshopDescription(description);
    }

    function onCloseDialog() {
        setSelectedWorkshopDescription(undefined);
    }

    return (
        <React.Fragment>
            <Element name={SectionId.Workshops} />
            <Box sx={{ py: 8 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        color="black"
                        fontWeight={500}
                        textTransform="uppercase"
                    >
                        Workshops
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        align="center"
                        fontStyle="italic"
                        mb={5}
                    >
                        Here is a look at the workshops that are offered
                    </Typography>

                    <Grid container spacing={4}>
                        {availableWorkshops.map((availableWorkshop) => (
                            <Workshop
                                id={availableWorkshop.id}
                                title={availableWorkshop.title}
                                description={availableWorkshop.description}
                                thumbnail={availableWorkshop.thumbnail}
                                onClickLearnMore={onClickLearnMore}
                            />
                        ))}
                    </Grid>
                </Container>
            </Box>

            <WorkshopDialog
                selectedWorkshopDescription={selectedWorkshopDescription}
                onClose={onCloseDialog}
            />
        </React.Fragment>
    );
}
