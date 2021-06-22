import styled from 'styled-components';
import {
  accent,
  boxShadow,
  dark,
  light,
  onyx,
  secondaryLight,
  space_5,
} from '../../styles/styleConstants';
import { FlexContainer } from '../shared-components/containers';

const StepperNumber = styled.span`
  width: 60px;
  height: 60px;
  margin: 5px;
  background-color: ${({ active }) => (active ? accent : secondaryLight)};
  color: ${({ active }) => (active ? light : dark)};
  font-size: 32px;
  font-weight: bold;
  border-radius: 50%;
  border: 5px solid ${accent};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s background-color ease-out;

  @media (max-width: 700px) {
    width: 45px;
    height: 45px;
    font-size: 22px;
  }
`;

const StepperLine = styled.span`
  display: inline-block;
  height: 10px;
  flex: 1 1 20%;
  margin: 0 5px;
  border-radius: 4px;
  background-color: ${({ active }) => (active ? accent : light)};
  transition: 0.3s background-color ease-out;
`;
interface compInterfae {
  current: number;
  theme: string;
}

const index: React.FC<compInterfae> = ({ current, theme }) => {
  return (
    <FlexContainer
      p='10px 5px'
      m='0 0 15px 0'
      align='center'
      justify='space-around'
      bg={theme === 'light' ? secondaryLight : onyx}
      style={{ color: theme === 'light' ? dark : light, boxShadow: boxShadow }}
    >
      <StepperNumber active={current >= 0}>1</StepperNumber>
      <StepperLine active={current >= 1} />
      <StepperNumber active={current >= 1}>2</StepperNumber>
      <StepperLine active={current >= 2} />
      <StepperNumber active={current >= 2}>3</StepperNumber>
    </FlexContainer>
  );
};

export default index;
