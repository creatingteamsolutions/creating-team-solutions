import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { WorkshopDescription } from "./assets/texts/workshopdescrptions/workshopdescrptions";

interface WorkshopDialogProps {
    selectedWorkshopDescription: WorkshopDescription | undefined;
    onClose: () => void;
}

export function WorkshopDialog({
    selectedWorkshopDescription,
    onClose,
}: WorkshopDialogProps) {
    if (selectedWorkshopDescription === undefined) {
        return null;
    }

    return (
        <Dialog open maxWidth="lg" onClose={onClose}>
            <DialogContent>
                <Container>
                    <Box
                        mb={3}
                        sx={{
                            backgroundImage: `url(${selectedWorkshopDescription.image})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundAttachment: "scroll",
                            backgroundSize: "cover",
                            height: 200,
                        }}
                    />

                    <Typography
                        variant="h5"
                        align="center"
                        textTransform="uppercase"
                        fontWeight={700}
                        gutterBottom
                    >
                        {selectedWorkshopDescription.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        align="center"
                        fontStyle="italic"
                        mb={3}
                    >
                        {selectedWorkshopDescription.description}
                    </Typography>

                    {selectedWorkshopDescription.paragraphs.map((paragraph) => {
                        return (
                            <Typography variant="body1" mb={3}>
                                {paragraph}
                            </Typography>
                        );
                    })}
                </Container>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}
