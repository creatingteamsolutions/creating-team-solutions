import AstoriaThumbnail from "../images/astoria.jpg";
import BendThumbnail from "../images/bend.jpg";
import MichiganThumbnail from "../images/detroit.jpg";
import IndianaThumbnail from "../images/indianapolis.jpg";
import LouisianaThumbnail from "../images/neworleans.jpg";
import NewportThumbnail from "../images/newport.jpg";
import PortlandPaitentThumbnail from "../images/oregonpaitent.jpg";
import PortlandThumbnail from "../images/portland.jpg";
import TexasThumbnail from "../images/sanAntonio.jpg";
import ConnecticutThumbnail from "../images/wallingford.jpg";
import DCThumbnail from "../images/washingtondc.jpg";

export interface ExperienceDetail {
    years: string;
    hostingOrganization: string;
    location: string;
    locationImage: string;
}

export const experienceDetails: ExperienceDetail[] = [
    {
        years: `2018 - 2019`,
        hostingOrganization: `AHA Team Training National Conference`,
        location: `California, Texas`,
        locationImage: TexasThumbnail,
    },
    {
        years: `2018`,
        hostingOrganization: `Fransiscan Health`,
        location: `Indiana`,
        locationImage: IndianaThumbnail,
    },
    {
        years: `2017`,
        hostingOrganization: `CHASS - Community Health And Social Services Center`,
        location: `Michigan`,
        locationImage: MichiganThumbnail,
    },
    {
        years: `2017`,
        hostingOrganization: `Connecticut Hospital Association`,
        location: `Connecticut`,
        locationImage: ConnecticutThumbnail,
    },
    {
        years: `2016 - 2017`,
        hostingOrganization: `Oregon Patient Safety Commission`,
        location: `Oregon`,
        locationImage: PortlandPaitentThumbnail,
    },
    {
        years: `2016`,
        hostingOrganization: `St. James Parish`,
        location: `Louisiana`,
        locationImage: LouisianaThumbnail,
    },
    {
        years: `2016`,
        hostingOrganization: `Columbia Memorial`,
        location: `Oregon`,
        locationImage: AstoriaThumbnail,
    },
    {
        years: `2015 - 2017`,
        hostingOrganization: `Samaritan Health`,
        location: `Oregon`,
        locationImage: NewportThumbnail,
    },
    {
        years: `2014 - 2017`,
        hostingOrganization: `TeamSTEPPS National Conference`,
        location: `Minnesota, Colorado, Washington D.C., Ohio`,
        locationImage: DCThumbnail,
    },
    {
        years: `2010 - 2019`,
        hostingOrganization: `Providence Health System`,
        location: `Oregon`,
        locationImage: PortlandThumbnail,
    },
    {
        years: `2010 - 2015`,
        hostingOrganization: `Oregon Rural Health Quality Network (ORHQN)`,
        location: `Oregon`,
        locationImage: BendThumbnail,
    },
];
