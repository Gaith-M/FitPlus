import styled from 'styled-components';
import {
  accent,
  boxShadow,
  dark,
  light,
  secondaryLight,
  space_5,
} from '../../styles/styleConstants';

const StepperContainer = styled.div`
  padding: 10px 5px;
  margin-bottom: ${space_5};
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${secondaryLight};
  box-shadow: ${boxShadow};
`;

const StepperNumber = styled.span`
  width: 60px;
  height: 60px;
  margin: 5px;
  background-color: ${({ active }) => (active ? accent : secondaryLight)};
  color: ${({ active }) => (active ? secondaryLight : dark)};
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
}

const index: React.FC<compInterfae> = ({ current }) => {
  return (
    <StepperContainer>
      <StepperNumber active={current >= 0}>1</StepperNumber>
      <StepperLine active={current >= 1} />
      <StepperNumber active={current >= 1}>2</StepperNumber>
      <StepperLine active={current >= 2} />
      <StepperNumber active={current >= 2}>3</StepperNumber>
    </StepperContainer>
  );
};

export default index;
