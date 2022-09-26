export enum SectionId {
    About = "About",
    Speakers = "Speakers",
    Workshops = "Workshops",
    Experience = "Experience",
    Testimonials = "Testimonials",
    Contact = "Contact",
}

export interface SectionDetail {
    id: SectionId;
    name: string;
}
export const sectionDetails: SectionDetail[] = [
    {
        id: SectionId.About,
        name: "About",
    },
    {
        id: SectionId.Speakers,
        name: "Speakers",
    },
    {
        id: SectionId.Workshops,
        name: "Workshops",
    },
    {
        id: SectionId.Experience,
        name: "Experience",
    },
    {
        id: SectionId.Testimonials,
        name: "Testimonials",
    },
    {
        id: SectionId.Contact,
        name: "Contact",
    },
];
