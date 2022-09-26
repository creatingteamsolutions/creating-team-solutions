import AnswerInRoomFull from "../../images/full/answerInRoom-full.jpg";
import DrivingChangeFull from "../../images/full/driving-change-full.jpg";
import EmpoweringFull from "../../images/full/empowering-full.jpg";
import HealthyTeamFull from "../../images/full/healthy-team-full.jpg";
import LastingCultureFull from "../../images/full/lasting-culture-full.jpg";
import LeadershipDistanceFull from "../../images/full/leadershipDistance-full.jpg";
import PatientSafetyFull from "../../images/full/patient-safety-full.jpg";
import ReflectionOnImperfectionFull from "../../images/full/reflection-on-imperfection-full.jpg";
import SteppingFull from "../../images/full/stepping-full.jpg";
import TeamSteppsFull from "../../images/full/teamStepps-full.jpg";
import TemperamentFull from "../../images/full/temperament-full.jpg";
import TransformStoryFull from "../../images/full/transformStory-full.jpg";
import { WorkshopId } from "../workshopids";

export interface WorkshopDescription {
    id: WorkshopId;
    title: string;
    description: string;
    image: string;
    paragraphs: string[];
}

export const workshopDescriptions: WorkshopDescription[] = [
    {
        id: WorkshopId.TemperamentTeam,
        title: `Temperament and Team Performance`,
        description: `An interactive workshop revealing how personal temperament and communication style impact the team dynamic, particularly in the face of conflict`,
        image: TemperamentFull,
        paragraphs: [
            `In their most popular workshop, Rhonda and Jan will cover the elements of strong teams, explore the DISC
        tool as it relates to your team, and strategize how to deploy each member of your team into their place
        of strength for improved performance and patient safety. Participants will discover their personal temperament
        and that of their teammates through an interactive exercise. From there, participants will discover how
        their personal temperament and communication style is impacting the team dynamic, particularly when it
        comes to conflict management and team engagement.`,
        ],
    },
    {
        id: WorkshopId.ActivatingFrontline,
        title: `Driving Change—The Power of Activating and Engaging the Frontline Voice`,
        description: `Discover how frontline engagement can lead to innovative and lasting change and explore how influence can be leveraged to affect change from anywhere in the organization.`,
        image: DrivingChangeFull,
        paragraphs: [
            `In this workshop, you will be encouraged to reevaluate where the real power for change lies in your organization - it is in the Front Line.  The front line has firsthand information and experience that can lead to innovative and lasting change.  Through interactive exercises and discussion, we will look at the makeup of the current workforce, the importance of coaching instead of managing, and the correlation between staff engagement and workforce retention.`,
            `We will also examine how to lead when you are not in charge, learning how to leverage influence to affect change from anywhere in the organization.  This requires intentionally building trust with senior leadership and great teambuilding skills to bring all voices to the table to achieve lasting change.  Participants will learn the essential role of asking each member of the team to be partners in solutions, the importance of feedback and the role of gratitude in creating a multi-generational workforce that can go the distance.`,
        ],
    },
    {
        id: WorkshopId.EmployingStrategies,
        title: `Employing Strategies for Lasting Cultural Change`,
        description: `Discover how fostering resilience and cultivating staff engagement can address burnout and secure lasting change in your organization`,
        image: LastingCultureFull,
        paragraphs: [
            `National statistics show that over half of professional caregivers are experiencing burnout. As a result, much of the needed change initiatives stall or even decline. Fostering resilience and cultivating staff engagement are key strategies for addressing burnout and securing lasting change.`,
            `This workshop will present tools and concepts to proactively address burnout and activate team members to be the solution to the barriers they face. Intentional partnership and shared leadership between front line staff and designated leaders will create the buy-in required for ongoing success. Participants will discover that it is involving every voice on the team, making time for resilience, and being a mentor that shows the way to the goal are the strategies for lasting change.`,
        ],
    },
    {
        id: WorkshopId.EssentialsForTeam,
        title: `The Power of a Healthy Team Dynamic: Essentials for High Performing Teams`,
        description: `Explore the deeper meaning of team and examine the role of the team dynamic and its impact on patients, caregivers and organizations.`,
        image: HealthyTeamFull,
        paragraphs: [
            `When it comes to navigating the road to “zero harm” in healthcare, the team dynamic is an indisputable factor affecting patient safety. In fact, more than 70% of medical errors are attributable to dysfunctional team dynamics. As important as clinical knowledge and technical skills are, the team members’ ability to collaborate, employ emotional intelligence with teammates, and be empowered to contribute to a common goal are equally essential.`,
            `In this interactive workshop, we will explore the deeper meaning of team and examine the role of the team dynamic and its impact on patients, caregiver and organizations. Essential characteristics of high performing teams will be examined in detail, culminating with an emphasis on the power of team synergy and collective purpose in driving staff satisfaction and patient safety.`,
        ],
    },
    {
        id: WorkshopId.SteppingConflict,
        title: `STEPPing Through Conflict: Strategies for the Threatened Team Dynamic`,
        description: `In this hands-on workshop, participants will examine causes of team breakdown and discover practical strategies to utilize when conflict threatens the team dynamic.`,
        image: SteppingFull,
        paragraphs: [
            `Recognizing that contention is to be expected and healthy conflict can potentially drive the team to greater performance is an important first step to leveraging team tension. Members of a team must recognize that stakes are high when conflict is left unaddressed, ultimately effecting the safe and effective care of patients and their families.`,
            `Participants will examine the causes of team breakdown and achieve a deeper understanding of typical conflict responses. Barriers to successful conflict resolution will be discussed as well as strategies to mitigate such barriers. Finally, participants will examine effective TeamSTEPPS solutions for conflict resolution and have the opportunity to practice those solutions.`,
        ],
    },
    {
        id: WorkshopId.AnswerInRoom,
        title: `The Answer is in the Room`,
        description: `Discover how to empower team members to find collective solutions to the challenges they face, maximizing the strengths found within the team.`,
        image: AnswerInRoomFull,
        paragraphs: [
            `All teams go through seasons of stagnation and conflict; members of a team need to understand that this is normal in order for the team not to get derailed. In the face of unexpected barriers, it is tempting to shift blame onto personnel.  What is more often true is, the project has lost focus, the leadership style isn’t effective or the leader has not empowered their team to proactively embrace and solve the challenges presented. "The Answer is in the Room" is an interactive workshop about empowering team members to find collective solutions, maximizing the strengths found within the team.`,
            `Session participants will discover how they can utilize a four-step process (the 4Ds) to address team-based problem solving, propelling their team into a place of strength and effectiveness once again.`,
        ],
    },
    {
        id: WorkshopId.RisingThreat,
        title: `The Rising Threat to Patient Safety`,
        description: `Learn about the cost of workplace incivility and how to move your workforce from a position of powerlessness to one of positivity and empowerment.`,
        image: PatientSafetyFull,
        paragraphs: [
            `Patient safety, teamwork and communication are all threatened when we allow a hidden culture of harassment.  Avoidance and isolation are dysfunctional solutions to what the CDC is now labeling the "Incivility Epidemic". Instead, we must identify the sources, reckon with the sequelae and create strategies for change.`,
            `Participants in this interactive workshop will leave with an increased awareness of the personal and professional cost of incivility.  They will have the ability to identify many of the contributing factors that feed a culture of incivility and how to combat them.  Using a toolkit for incivility survival, participants will gain the skills necessary for both self and social advocacy.  The workshop concludes by discussing practical, unique ways to foster resilience when confronted with lateral violence, empowering your workforce to move from a position of powerlessness to one of positivity and empowerment.`,
        ],
    },
    {
        id: WorkshopId.EmpoweringLeaders,
        title: `Empowering Tomorrow’s Leader`,
        description: `Discover how a commitment of time and mentoring into the leaders of tomorrow empowers the team to achieve cultural change`,
        image: EmpoweringFull,
        paragraphs: [
            `Lasting cultural change requires intentional investment into the individuals of the team. Intentional inviting, investing and empowering individuals to engage and eventually lead the culture change is one strategy to achieve goals that can even outlast the current leader.`,
            `Change does not occur simply by planning the “how”, it must include the “who”. This requires a commitment of time and mentoring into the leaders of tomorrow, with a goal of becoming a team that is committed to empowering others to take the change to the next level. This session will focus on ways of inviting and investing into individuals so that they will be equipped to lead the way of lasting change in patient safety.`,
        ],
    },
    {
        id: WorkshopId.LeadershipDistance,
        title: `Leadership that Goes the Distance`,
        description: `Learn how Self-leadership is a marker for not only personal growth but team effectiveness`,
        image: LeadershipDistanceFull,
        paragraphs: [
            `Without strong leadership, even the best teams will falter. Mastering the art of “self-leadership” is critical for both individual success and creating winning teams. However, most people find it easier to direct others rather than do the difficult work of self-reflection that will ultimately propel the whole team towards greatness. Rhonda will guide participants through a series of “self-leadership” questions that will help ensure you are giving the best possible gift you can give your team– a fully focused, deeply passionate and highly energized you.`,
        ],
    },
    {
        id: WorkshopId.TeachingTransform,
        title: `Teaching to Transform: Utilizing Strategic Storytelling to Enhance Patient Safety`,
        description: `Find ways to communicate information creatively and meaningfully in the increasingly complex environment of healthcare.`,
        image: TransformStoryFull,
        paragraphs: [
            `In the increasingly complex environment of healthcare, finding ways to communicate information creatively and meaningfully is of utmost importance. To truly impact patient safety, patients and caregivers alike must understand and embrace information on a personal level in ways that are both enlightening and transforming. Information alone is not enough to change behavior; we must access the human experience, identify with its impact and apply its learnings to both our personal and corporate patient safety journey.`,
            `Storytelling is a foundational element in communicating human experience. In this workshop, participants will gain understanding of the critical role that stories play in the transference of information. The many benefits of storytelling will be explored. Participants will identify the crucial components of an effective story as well as articulate storytelling pitfalls.`,
        ],
    },
    {
        id: WorkshopId.ReflectionImperfection,
        title: `A Reflection on Imperfection: Leadership Potential Unleashed`,
        description: `Explore how to leverage perceived weaknesses for greater growth and effectiveness and how to keep conflict from shortchanging leadership potential.`,
        image: ReflectionOnImperfectionFull,
        paragraphs: [
            `In the changing landscape of healthcare, leaders are under pressure and under fire perhaps more than ever. Leaders need to know that perfection is not an attainable goal and can actually undermine their effectiveness. In this session, participants will examine how their past experiences may be shaping their present perspectives and decision making. They will explore various ways to leverage their imperfection, inducing growth and greater effectiveness as a leader.`,
            `Unacknowledged or undealt with conflict can impair the leader’s confidence and willingness to take healthy risks personally and professionally. Participants will walk away with a four-step tool that can be employed to diffuse the power of offense and keep interpersonal conflict from shortchanging leadership potential.`,
        ],
    },
    {
        id: WorkshopId.TeamStepps,
        title: `TeamSTEPPS`,
        description: ` An evidence-based teamwork system to improve communication and teamwork skills among health care professionals`,
        image: TeamSteppsFull,
        paragraphs: [
            `TeamStepps is a teamwork system designed for health care professionals that is: a powerful solution to improving patient safety within your organization, an evidence-based teamwork system to improve communication and teamwork skills among health care professionals, a source for ready-to-use materials and a training curriculum to successfully integrate teamwork principles into all areas of your health care system, scientifically rooted in more than 20 years of research and lessons from the application of teamwork principles, developed by Department of Defense's Patient Safety Program in collaboration with the Agency for Healthcare Research and Quality.`,
            `Jan and Rhonda are TeamSTEPPS master trainers with extensive TeamSTEPPS experience - both in training and practical application. They can provide consultation, a four hour Fundamentals course, or assist your team with delivering a two-day Master Trainer course.`,
        ],
    },
];
