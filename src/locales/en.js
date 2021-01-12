/* eslint-disable */

import {
    drawer as drawerLayout,
    drawerUser as drawerUserLayout,
    letterLayout,
    cvLayout as cvL,
    skillsLayout as skL,
    titleLayout as tiL,
  } from "../i18nData/Personal/En/layout";
  
  import { letter as Contact } from "../i18nData/Personal/En/toContact";
  
  import {
    user as User,
    cv as userCv,
    skills as userSkills,
    highCertification as userHc,
    middleCertification as userMc,
    lowCertification as userLc
  } from "../i18nData/Personal/En/user";
  
  /* --------------------------- */
  
  export const drawerUser = drawerUserLayout;
  export const drawer = drawerLayout;
  
  export const letter = {
    pageHeader: letterLayout.pageHeader,
    hiddenHeader: letterLayout.hiddenHeader,
    date: Contact.date,
    dateOptions: Contact.dateOptions,
    subject: Contact.subject,
    salutation: Contact.salutation,
    addOn: Contact.addOn,
    letterContent: Contact.letterContent,
    letterEnding: Contact.letterEnding,
    signing: User.fullName,
    signingImg: User.signingImg,
  };
  
  export const titlePage = {
    pageHeader: tiL.pageHeader,
    pageTitle: tiL.pageTitle,
    TOC: tiL.Toc,
    TOCContent: tiL.TocContent,
  };
  
  export const HighCertification = {
    pageHeader: userHc.pageHeader,
    subHeader: userHc.subHeader,
    srcImg: userHc.srcImg,
    srcImgDefault: userHc.srcImgDefault,
  };
  export const MiddleCertification = {
    pageHeader: userMc.pageHeader,
    subHeader: userMc.subHeader,
    srcImg: userMc.srcImg,
    srcImgDefault: userMc.srcImgDefault,
  };
  export const LowCertification = {
    pageHeader: userLc.pageHeader,
    subHeader: userLc.subHeader,
    srcImgFront: userLc.srcImgFront,
    srcImgBack: userLc.srcImgBack,
    srcImgDefault: userLc.srcImgDefault,
  };
  
  export const Cv = {
    pageHeader: cvL.pageHeader,
    Profile: {
      Header: cvL.Profile.Header,
      BirthHeader: cvL.Profile.BirthHeader,
      BirthDate: User.birthDay.toLocaleDateString("en-US", User.optionsGeb),
      descriptionContent: userCv.Profile.description,
    },
    Work: {
      Header: cvL.Work.Header,
      Items: userCv.Work.workItems,
    },
  
    Education: {
      Header: cvL.Education.Header,
      EndingHeader: cvL.Education.EndingHeader,
      Items: userCv.Education.educationItems,
    },
  
    Publicated: {
      Header: cvL.Publicated.Header,
      PublicatedHeader: cvL.Publicated.PublicatedHeader,
      Types: [
        {
          Header: cvL.Publicated.Types.paper,
          Items: userCv.Publicated.publicatedPaperItems,
        },
      ],
    },
  
    Other: {
      Header: cvL.Other.Header,
      Items: userCv.Other.otherItems,
    },
  };
  
  export const Skills = {
    pageHeader: skL.pageHeader,
  
    It: {
      Header: skL.Skills.it.Header,
      Items: userSkills.itItems,
    },
  
    Lang: {
      Header: skL.Skills.lang.Header,
      Type: skL.Skills.lang.Type,
      Items: userSkills.langItems,
    }
  };
  