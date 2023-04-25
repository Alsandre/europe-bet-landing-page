import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { TermsItem } from './termsItem';
import { RULES } from '../constants';

export const RulesAndTerms: React.FC = () => {
  function rulesClickHandler() {}
  return (
    <div className="w-mobile m-auto text-start mt-[55px]">
      <h3 className="font-mtavruli font-medium text-16 pb-5">
        წესები და პირობები
      </h3>
      <Accordion>
        {RULES.map(({ rule, description }) => (
          <AccordionItem
            header={({ state }) => {
              return <TermsItem rotate={state.isEnter} text={rule} />;
            }}
          >
            {description}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
