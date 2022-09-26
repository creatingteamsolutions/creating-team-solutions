import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TestimonialDetail } from "./assets/texts/testimonialdetails";

interface TestimonialProps extends TestimonialDetail {}

export function Testimonial({
    testimonialChunks,
    author,
    extraCredentials,
}: TestimonialProps) {
    return (
        <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column">
                {testimonialChunks.map((testimonialChunk) => {
                    return (
                        <Typography paragraph fontStyle="italic" gutterBottom>
                            {testimonialChunk}
                        </Typography>
                    );
                })}

                <Typography variant="subtitle2">- {author}</Typography>

                {extraCredentials.map((extraCredential) => {
                    return (
                        <Typography variant="caption">
                            {extraCredential}
                        </Typography>
                    );
                })}
            </Box>
        </Grid>
    );
}
