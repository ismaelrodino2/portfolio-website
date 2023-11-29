import useTranslation from "next-translate/useTranslation";
import Section from "./Section";

const WhatSetsMeApartSection = () => {
  const { t } = useTranslation("common");

  return(
  <Section title={t('whatsetsmeapart.title')}>
    <ul className="list-disc">
      <li className="mb-2">
        <div dangerouslySetInnerHTML={{__html: t('whatsetsmeapart.reason1')}}></div>
      </li>
      <li className="mb-2">
      <div dangerouslySetInnerHTML={{__html: t('whatsetsmeapart.reason2')}}></div>

      </li>
      <li>
      <div dangerouslySetInnerHTML={{__html: t('whatsetsmeapart.reason3')}}></div>

      </li>
    </ul>
  </Section>
)};

export default WhatSetsMeApartSection;
