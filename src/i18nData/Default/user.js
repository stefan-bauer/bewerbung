// const optionsFull = { year: "numeric", month: "short", day: "numeric" };
const optionsMonthOnly = { year: "numeric", month: "short" };
const optionsYearOnly = { year: "numeric" };

const firstName = "James";
const sirName = "Bond";
const titleName = "Sir";
const birthDay = "1962,11,01";
const signing = "default_sign.svg";

export const contact = {
  address: "Center007, 1111 London",
  addressMaps: "g8zvgofNVzSJ4GiS8",
  mail: "james.bond@007.com",
  phone: "+00 007 / 00 70 072",
  linkedin: "james-bond",
  avatarImg:"default_avatar.png"
};

const profileDescription = {
  0: "eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis",
};

const workItems = [
  {
    Header: "MI6",
    Description: "Employee",

    DateStart: new Date("2014,03,01").toLocaleDateString(
      "de-DE",
      optionsYearOnly
    ),
    DateEnd: new Date("2020,09,01").toLocaleDateString(
      "de-DE",
      optionsYearOnly
    ),
  },
];

const educationItems = [
  {
    Header: "Master's Degree self defence",
    SubHeader: "School of life",
    DateStart: new Date("1960,10,01").toLocaleDateString(
      "de-DE",
      optionsYearOnly
    ),
    DateEnd: new Date("2020,01,01").toLocaleDateString(
      "de-DE",
      optionsMonthOnly
    ),
    Description:
      "Specialiced in: <em>quick flirt</em> and <em>Kissing</em> <br />",
  },
];

const publicatedPaperItems = [
  {
    Header: "Flirt guide",
    SubHeader:
      "with every bondgirl <br /> Historical approaches and new results",
    PublicatedDate: new Date("2002,01,01").toLocaleDateString(
      "de-DE",
      optionsMonthOnly
    ),
    Authors: "James Bond",
  },
];

const otherItems = [
  {
    Header: "Shooting",
    Description: "done",
    DateStart: new Date("1979,02,01").toLocaleDateString(
      "de-DE",
      optionsMonthOnly
    ),
    DateEnd: new Date("1980,02,01").toLocaleDateString(
      "de-DE",
      optionsMonthOnly
    ),
  },

  {
    Header: "Driving licence",
    Description: "all",
  },

];

const itItems = [
  {
    Header: "Computer",
    // Content: "Amplify, SAM, Cloudformation, CDK, Lambda, DynamoDB, ...",
    Type: "inline",
    Content: [
      {
        title: "Q - inventions",
        // description: "In Arbeit",
      },
    ],
  }
];

const langItems = [
  {
    title: "Englisch",
  },
  {
    title: "language of love",
    // description: "Muttersprache",
  },
];

export const cv = {
  Profile: {
    description: profileDescription,
  },
  Work: { workItems },
  Education: { educationItems },
  Publicated: { publicatedPaperItems },
  Other: { otherItems },
};

export const skills = {
  itItems: itItems,
  langItems: langItems,
};

export const user = {
  firstName,
  sirName,
  titleName,
  fullName: `${firstName} ${sirName}`,
  birthDay: new Date(birthDay),
  optionsGeb: { year: "numeric", month: "short", day: "numeric" },
  signingImg: signing
};

/* ****
 * Certification
 **** */

export const highCertification = {
  pageHeader:"High Certification",
  subHeader:"London Underground Agency",
  srcImg:"default_certification.png",
  srcImgDefault:"default_certification.png"
};

export const middleCertification = {
  pageHeader:"Middle Certification",
  subHeader:"London Underground Agency",
  srcImg:"default_certification.png",
  srcImgDefault:"default_certification.png"
};

export const lowCertification = {
  pageHeader:"High Certification",
  subHeader:"London Underground Agency",
  srcImgFront:"default_certification.png",
  srcImgBack:"default_certification.png",
  srcImgDefault:"default_certification.png"
};
