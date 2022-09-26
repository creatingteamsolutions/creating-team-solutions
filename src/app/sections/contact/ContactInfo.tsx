import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { ContactDetails } from "./assets/texts/contactinfos/contactinfos";

interface ContactInfoProps extends ContactDetails {}

export function ContactInfo({ name, phoneNumber, email }: ContactInfoProps) {
    const theme = useTheme();

    return (
        <Grid item xs={12} md={6}>
            <Typography
                variant="h4"
                color="white"
                fontWeight={500}
                pt={2}
                sx={{
                    marginLeft: "auto",
                    textAlign: "center",
                }}
            >
                {name}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Grid
                    item
                    xs={12}
                    sx={{
                        marginLeft: "auto",
                        textAlign: "center",
                    }}
                >
                    <PhoneIcon sx={{ color: "white", fontSize: 45 }} />
                    <Typography color="white" gutterBottom>
                        {phoneNumber}
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{
                        marginRight: "auto",
                        textAlign: "center",
                    }}
                >
                    <MailOutlineIcon sx={{ color: "white", fontSize: 45 }} />
                    <Typography color={theme.palette.primary.main}>
                        {email}
                    </Typography>
                </Grid>
            </Box>
        </Grid>
    );
}
