import { DropDownIcon } from "../UI";
import { TermsItem } from "./termsItem";

export const RulesAndTerms: React.FC = () => {
  function rulesClickHandler() {}
  return (
    <div className="w-mobile m-auto text-start mt-[55px]">
      <h3 className="font-mtavruli font-medium text-16 pb-5">წესები და პირობები</h3>
      <ul className="flex flex-col gap-[5px]">
        <TermsItem text="როდის იწყება და რა ფორმატით გაიმართება აქცია" onClick={rulesClickHandler} />
        <TermsItem text="როგორ მივიღო აქციაში მონაწილეობა?" onClick={rulesClickHandler} />
        <TermsItem text="სხვადასხვა" onClick={rulesClickHandler} />
      </ul>
    </div>
  );
};
