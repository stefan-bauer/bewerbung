import {user, contact,
  highCertification as userHc,
  middleCertification as userMc,
  lowCertification as userLc
} from './user';


/* ***** 
* DRAWER
***** */
export const drawerUser = {
  titleName: user.titleName,
  firstName: user.firstName,
  sirName: user.sirName,
  mail:contact.mail,
  address: contact.address,
  addressMaps: contact.addressMaps,
  phone: contact.phone,
  linkedin: contact.linkedin,
  avatarImg: contact.avatarImg,
};

export const drawer = {
  contactHeading: "Contact",
};

export const letterLayout={
  pageHeader: user.fullName,
  hiddenHeader: "Letter",
}

export const cvLayout= {
  pageHeader: "Curriculum Vitae",
  Profile: {
      Header: "Profile",
      BirthHeader: "Birth date",
    },
    Work:{
        Header: "Work experience"
    },
    Education:{
      Header: "Education",
      EndingHeader: "Completion",
    },
    Publicated:{
      Header: "Publications",
      PublicatedHeader: "Publicated",
      Types:{
          book:'Book',
          paper:'Paper'
      }
    },
    Other:{
      Header: "Other",
    }
    
}

export const skillsLayout= {
  pageHeader: "Skills",
  Skills:{
      it:{
          Header:"IT",
          // Type: "block",
      },
      lang:{
          Header:'Languages',
          Type: "block",
      }
  }
}

export const titleLayout= {
  pageHeader: user.fullName,
  pageTitle: "Application portfolio",
  Toc: "Content",
  TocContent:
  {
      cv: cvLayout.pageHeader,
      skills: skillsLayout.pageHeader,
      highcf: userHc.pageHeader,
      middlecf: userMc.pageHeader,
      lowcf: userLc.pageHeader,
    },
}