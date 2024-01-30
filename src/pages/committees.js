import CommitteesSection from "@/components/CommitteesSection";

const values = {"Infrastructure": ["Welcome to WCS Infrastructure! We are responsible for the design, development, and deployment of the WCS website, as well as its ongoing maintenance. We work closely with other committees and members to ensure that the website is up-to-date and provides information about the club's events, activities, and resources. We play a key role in advancing the mission of WCS by providing a centralized hub for members and promoting the club to the broader community.", 
                                  "Anushri Mittal, Neha Vardhaman"], 
                "Corporate": ["As part of the corporate committee, we speak with company representatives to arrange partnerships and secure sponsorships to support WCS's events and operations over the course of the year. We then collaborate with our corporate sponsors to plan and host events including General Meetings, networking events, tech talks, workshops, and more. Additionally, we organize WCS's annual Chicago retreat where our members spend a day immersing themselves in Chicago's tech environment.", 
                                  "Divya Koya, Riya Jain"], 
                "Explorations": ["Welcome to WCS Explorations! We aspire to support your CS journey. We provide beginner friendly workshops and resources to help members gain technical skills and prepare for interviews. Check our our annual hackathon Code Ada and our project cycle Dev Ada! Don't miss the opportunity to attend our events, as they offer a chance to make new connections and gain valuable knowledge!",
                                "Jillian Nylund, Shreya Vinjamuri"],
                "Mentoring": ["Welcome to WCS Mentoring! We are a committee that is focused on providing resources and opportunities, whether it be professional, academic, or personal, for both new and current UIUC students. We host the Bits and Bytes program that is focused on connecting mentors and mentees within the CS program to provide incoming freshman, transfer students, and sophomores support. Additionally, we provide events to help students develop their professional skills.",
                              "Kalika Raje, Shreya Deshpande"],
                "Social": ["Welcome to WCS Social Committee! We strive to make new and upcoming events inclusive and engaging, participate in internal and external networking to hold unique experiences, and design and create enjoyable and amicable social events. Our main events include Spring Banquet, internal and external socials, and small-scale frequent activities.",
                          "Kavya Puranam, Twinkle Yeruva"],
                "Outreach": ["Welcome to WCS Outreach! We are the subdivision of WCS dedicated to encouraging young women to pursue a computer science education. Although 51% of the United States population is female, only 18% of Computer Science bachelor’s degrees are earned by women. Women’s voices are needed in tech, and we want to do our part in making those numbers change. We have multiple initiatives: Chictech, High School Visits, our Explore CS Series, and CS+X Panel.",
                          "Akshata Tiwari, Garima Sharma"]
              };
export default function Committees({children}) {
  return (
     <div>
        <h1 style={{textAlign: "center"}}>Our Committees</h1>
        <CommitteesSection name="Infrastructure" description={values["Infrastructure"][0]} officers={values["Infrastructure"][1]} color="#FB79C3" bColor="#FFCEE7"></CommitteesSection>
        <CommitteesSection name="Corporate" description={values["Corporate"][0]} officers={values["Corporate"][1]}></CommitteesSection>
        <CommitteesSection name="Explorations" description={values["Explorations"][0]} officers={values["Explorations"][1]} color="#FB79C3" bColor="#FFCEE7"></CommitteesSection>
        <CommitteesSection name="Mentoring" description={values["Mentoring"][0]} officers={values["Mentoring"][1]}></CommitteesSection>
        <CommitteesSection name="Social" description={values["Social"][0]} officers={values["Social"][1]} color="#FB79C3" bColor="#FFCEE7"></CommitteesSection>
        <CommitteesSection name="Outreach" description={values["Outreach"][0]} officers={values["Outreach"][1]}></CommitteesSection>
    </div>
  );
};
