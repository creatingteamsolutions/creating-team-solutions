import Jan from "../../images/jan.jpg";
import Rhonda from "../../images/rhonda.jpg";

interface Speaker {
    name: string;
    credentials: string;
    bio: string;
    image: string;
}

export const speakers: Speaker[] = [
    {
        name: "Rhonda Fischer",
        credentials: "RN, BSN, CEN",
        bio: `Rhonda Fischer, a board-certified ER nurse with 26 years of
            experience, brings her passion for patient safety and
            clinical excellence into both her nursing practice and her
            work as a national patient safety consultant. She currently
            serves as the Trauma Coordinator at her local hospital, with
            an emphasis on education, teambuilding and community
            outreach. Rhonda has been a TeamSTEPPS Master trainer since
            2009 and loves helping individuals find their voice and
            leverage their strengths for the health of their team and
            the quality care of each patient. Her emphasis on team
            dynamics and the importance of creating a culture of trust,
            transparency, and value, continues to motivate and transform
            teams both locally and nationally. Rhonda’s engaging and
            energetic speaking style inspires others to never lose sight
            of what fuels their professional passion and their
            commitment to the patient experience.`,
        image: Rhonda,
    },
    {
        name: "Jan Brauer",
        credentials: "RN, BSN, MA",
        bio: `Jan Brauer believes that we all have a unique perspective
            and voice to contribute to a team. She is a nationally
            recognized inspirational speaker, nursing team coach and
            leadership development trainer. Her focus is on patients
            first and the training of healthcare teams to ensure patient
            safety. Jan says the "why" of her work is caring for people.
            She has become a leader in patient-centered teamwork to
            ensure that healthcare teams are working collaboratively to
            provide quality patient centered care. She inspires and
            engages teams, teaches leadership and collaboration
            techniques as well as how to deal with team conflict. Jan is
            a Clinical Education Coordinator with 35 years as a labor
            and delivery nurse and a TeamSTEPPS Master Trainer since
            2010 in Oregon and across the nation. Audiences love Jan's
            sense of humor and engaging, energetic approach to sharing
            the core elements of teamwork with practical tools necessary
            for building successful teams.`,
        image: Jan,
    },
];
