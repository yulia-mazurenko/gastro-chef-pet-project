import { PhoneLink, PhoneWrapper } from "./Contacts.styled";

export const Contacts: React.FC = () => {
  return (
    <PhoneWrapper>
      <PhoneLink href="tel:+380689494919">+38 (068) 949 - 49 -19</PhoneLink>
    </PhoneWrapper>
  );
};
