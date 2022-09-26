export interface TestimonialDetail {
    testimonialChunks: string[];
    author: string;
    extraCredentials: string[];
}

export const testimonialDetails: TestimonialDetail[] = [
    {
        testimonialChunks: [
            `I've had the pleasure of teaching TeamSTEPPS (TS) with Rhonda and Jan at the Oregon state level for 5 years. They are extraordinary clinical nurses who bring innovation and creativeness to TeamSTEPPS tools &amp; strategies that transforms the practical aspect of how to implement and sustain TeamSTEPPS principles. Their passion to change the healthcare system's design, process and culture resonates with everyone who hears them speak. They are an inspiration to all of us to improve ourselves and ultimately the patient experience by making safety and quality our top priorities.`,
        ],
        author: `Stephen M. Hale, MD`,
        extraCredentials: [
            `Hospitalist Director`,
            `Samaritan Pacific Communities Hospital`,
            `Newport, OR`,
        ],
    },
    {
        testimonialChunks: [
            `When it comes to dynamic public speaking on patient safety, Rhonda and Jan are stars. For the past 5 years, they have brought enthusiasm and creativity to our state-wide TeamSTEPPS conferences. Conference participants routinely mark “Excellent” on Jan and Rhonda’s presentations for both content and presentation skills.`,
            `Jan and Rhonda have complimentary talents in assessing participants learning needs. They are able to translate complex teambuilding concepts into clear, practical strategies. They readily share their learnings as front-line nurses in promoting patient safety; they can “walk the talk” when it comes to patient safety because they have current knowledge and experiences in this arena. Jan and Rhonda are consistently approachable and professional. I have appreciated their promptness in meeting timelines, attention to details and eagerness to gain more knowledge in high performing work teams in healthcare. I would highly recommend them!`,
        ],
        author: `Julia Fontanilla, RN MN`,
        extraCredentials: [
            `TeamSTEPPS Conference Planner and Board Member`,
            `Oregon Rural Healthcare Quality Network`,
        ],
    },
];
