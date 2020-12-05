// const date = "2020,11,03";
const date=new Date()

const subject = "Re: facilisis magna etiam tempor orci eu lobortis";

const salutation = "Dear Mrs. Money Penny, MSc,";

const letterContent = {
  0: "donec pretium vulputate sapien <b>nec sagittis</b> aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor",
  1: "mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et",
  2: "eget nullam non nisi est sit amet facilisis magna etiam tempor orci eu lobortis elementum nibh tellus molestie nunc non blandit massa enim nec dui nunc mattis enim ut tellus elementum sagittis",
  3: "ipsum consequat nisl vel pretium lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla",
  4: "Ich freue mich auf Ihre Rückmeldung und verbleibe",
};

const letterEnding = "mit besten Grüßen,";

export const letter = {
  date: new Date(date).toLocaleDateString(
    "de-DE",
    { year: "numeric", month: "long", day: "numeric" }
  ),
  subject,
  salutation,
  letterContent,
  letterEnding,
};
