import styled from 'styled-components';

const IconContainer = styled.span`
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const IconBar = styled.span`
  width: ${({ w }) => (w ? w : '30px')};
  height: ${({ h }) => (h ? h : '15px')};
  background-color: ${({ color }) => (color ? color : '#333')};
  border-radius: ${({ radius }) => (radius ? radius : '3px')};
  transition: 0.3s;
`;

interface ComponentInterface {
  w?: string;
  h?: string;
  color?: string;
  radius?: string;
  onClick: () => void;
}

const index: React.FC<ComponentInterface> = ({
  w,
  h,
  color,
  radius,
  onClick,
}) => {
  return (
    <IconContainer className='menuContainer' onClick={onClick}>
      <IconBar className='iconBar' w={w} h={h} color={color} radius={radius} />
      <IconBar className='iconBar' w={w} h={h} color={color} radius={radius} />
      <IconBar className='iconBar' w={w} h={h} color={color} radius={radius} />
    </IconContainer>
  );
};

export default index;
