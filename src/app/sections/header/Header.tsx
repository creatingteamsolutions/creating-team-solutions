import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as ScrollLink } from "react-scroll";
import { sectionDetails } from "../sectiondetails";

export function Header() {
    const theme = useTheme();

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: "#222222",
                display: { xs: "none", md: "flex" },
            }}
        >
            <Toolbar>
                <Typography
                    variant="h5"
                    noWrap
                    sx={{
                        mr: 2,
                        display: "flex",
                        fontFamily: "Kaushan Script",
                        fontWeight: 700,
                        color: `${theme.palette.primary.main}`,
                        textDecoration: "none",
                    }}
                >
                    Jan &amp; Rhonda
                </Typography>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                    }}
                >
                    {sectionDetails.map((sectionDetail) => (
                        <ScrollLink
                            to={sectionDetail.id}
                            smooth={true}
                            duration={500}
                        >
                            <Button
                                key={sectionDetail.id}
                                onClick={() => {}}
                                sx={{ color: "white", display: "block" }}
                            >
                                {sectionDetail.name}
                            </Button>
                        </ScrollLink>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
