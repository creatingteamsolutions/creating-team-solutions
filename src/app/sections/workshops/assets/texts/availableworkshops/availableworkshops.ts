import AnswerInRoomThumbnail from "../../images/thumbnail/answerInRoom-thumbnail.jpg";
import DrivingChangeThumbnail from "../../images/thumbnail/driving-change-thumbnail.jpg";
import EmpoweringThumbnail from "../../images/thumbnail/empowering-thumbnail.jpg";
import HealthyTeamThumbnail from "../../images/thumbnail/healthy-team-thumbnail.jpg";
import LastingCultureThumbnail from "../../images/thumbnail/lasting-culture-thumbnail.jpg";
import LeadershipDistanceThumbnail from "../../images/thumbnail/leadershipDistance-thumbnail.jpg";
import PatientSafetyThumbnail from "../../images/thumbnail/patient-safety-thumbnail.jpg";
import ReflectionOnImperfectionThumbnail from "../../images/thumbnail/reflection-on-imperfection-thumbnail.jpg";
import SteppingThumbnail from "../../images/thumbnail/stepping-thumbnail.jpg";
import TeamSteppsThumbnail from "../../images/thumbnail/teamStepps-thumbnail.jpg";
import TemperamentThumbnail from "../../images/thumbnail/temperament-thumbnail.jpg";
import TransformStoryThumbnail from "../../images/thumbnail/transformStory-thumbnail.jpg";
import { WorkshopId } from "../workshopids";

export interface AvailableWorkshop {
    id: WorkshopId;
    title: string;
    description: string;
    thumbnail: string;
    fullImage: string;
}

export const availableWorkshops: AvailableWorkshop[] = [
    {
        id: WorkshopId.TemperamentTeam,
        title: `Temperament and Team Performance`,
        description: `An interactive workshop revealing how personal temperament and communication style impact the team dynamic, particularly in the face of conflict`,
        thumbnail: TemperamentThumbnail,
        fullImage: TemperamentThumbnail,
    },
    {
        id: WorkshopId.ActivatingFrontline,
        title: `Activating and Engaging the Frontline Voice`,
        description: `Discover how frontline engagement can lead to innovative and lasting change and explore how influence can be leveraged to affect change from anywhere in the organization`,
        thumbnail: DrivingChangeThumbnail,
        fullImage: DrivingChangeThumbnail,
    },
    {
        id: WorkshopId.EmployingStrategies,
        title: `Employing Strategies for Lasting Cultural Change`,
        description: `Discover how fostering resilience and cultivating staff engagement can address burnout and secure lasting change in your organization`,
        thumbnail: LastingCultureThumbnail,
        fullImage: LastingCultureThumbnail,
    },
    {
        id: WorkshopId.EssentialsForTeam,
        title: `Essentials for High Performing Teams`,
        description: `Explore the deeper meaning of team and examine the role of the team dynamic and its impact on patients, caregivers and organizations`,
        thumbnail: HealthyTeamThumbnail,
        fullImage: HealthyTeamThumbnail,
    },
    {
        id: WorkshopId.SteppingConflict,
        title: `STEPPing Through Conflict`,
        description: `In this hands-on workshop, participants will examine causes of team breakdown and discover practical strategies to utilize when conflict threatens the team dynamic`,
        thumbnail: SteppingThumbnail,
        fullImage: SteppingThumbnail,
    },
    {
        id: WorkshopId.AnswerInRoom,
        title: `The Answer is in the Room`,
        description: `Discover how to empower team members to find collective solutions to the challenges they face, maximizing the strengths found within the team`,
        thumbnail: AnswerInRoomThumbnail,
        fullImage: AnswerInRoomThumbnail,
    },
    {
        id: WorkshopId.RisingThreat,
        title: `The Rising Threat to Patient Safety`,
        description: `Learn about the cost of workplace incivility and how to move your workforce from a position of powerlessness to one of positivity and empowerment`,
        thumbnail: PatientSafetyThumbnail,
        fullImage: PatientSafetyThumbnail,
    },
    {
        id: WorkshopId.EmpoweringLeaders,
        title: `Empowering Tomorrow’s Leader`,
        description: `Discover how a commitment of time and mentoring into the leaders of tomorrow empowers the team to achieve cultural change`,
        thumbnail: EmpoweringThumbnail,
        fullImage: EmpoweringThumbnail,
    },
    {
        id: WorkshopId.LeadershipDistance,
        title: `Leadership that Goes the Distance`,
        description: `Learn how Self-leadership is a marker for not only personal growth but team effectiveness`,
        thumbnail: LeadershipDistanceThumbnail,
        fullImage: LeadershipDistanceThumbnail,
    },
    {
        id: WorkshopId.TeachingTransform,
        title: `Teaching to Transform`,
        description: `Find ways to communicate information creatively and meaningfully in the increasingly complex environment of healthcare`,
        thumbnail: TransformStoryThumbnail,
        fullImage: TransformStoryThumbnail,
    },
    {
        id: WorkshopId.ReflectionImperfection,
        title: `A Reflection on Imperfection`,
        description: `Explore how to leverage perceived weaknesses for greater growth and effectiveness and how to keep conflict from shortchanging leadership potential`,
        thumbnail: ReflectionOnImperfectionThumbnail,
        fullImage: ReflectionOnImperfectionThumbnail,
    },
    {
        id: WorkshopId.TeamStepps,
        title: `TeamSTEPPS`,
        description: ` An evidence-based teamwork system to improve communication and teamwork skills among health care professionals`,
        thumbnail: TeamSteppsThumbnail,
        fullImage: TeamSteppsThumbnail,
    },
];
