import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface SpeakerProps {
    name: string;
    credentials: string;
    image: string;
    bio: string;
}
export function Speaker({ name, credentials, image, bio }: SpeakerProps) {
    return (
        <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar src={image} sx={{ width: 200, height: 200 }} />
                <Typography variant="h5" color="black" fontWeight={500} pt={2}>
                    {name}
                </Typography>
                <Typography color="black" gutterBottom>
                    {credentials}
                </Typography>
                <Typography paragraph>{bio}</Typography>
            </Box>
        </Grid>
    );
}
