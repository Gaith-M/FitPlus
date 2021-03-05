import styled from 'styled-components';

const IconContainer = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const IconBar = styled.span`
  width: ${({ w }) => (w ? w : '30px')};
  height: ${({ h }) => (h ? h : '15px')};
  background-color: ${({ color }) => (color ? color : '#333')};
  margin-bottom: ${({ mb }) => (mb ? mb : '5px')};
  border-radius: ${({ radius }) => (radius ? radius : '3px')};
  transition: 0.3s;
`;

interface ComponentInterface {
  w?: string;
  h?: string;
  color?: string;
  mb?: string;
  radius?: string;
  onClick: () => void;
}

const index: React.FC<ComponentInterface> = ({
  w,
  h,
  color,
  mb,
  radius,
  onClick,
}) => {
  return (
    <IconContainer className='menuContainer' onClick={onClick}>
      <IconBar
        className='iconBar'
        w={w}
        h={h}
        color={color}
        mb={mb}
        radius={radius}
      />
      <IconBar
        className='iconBar'
        w={w}
        h={h}
        color={color}
        mb={mb}
        radius={radius}
      />
      <IconBar
        className='iconBar'
        w={w}
        h={h}
        color={color}
        mb={mb}
        radius={radius}
      />
    </IconContainer>
  );
};

export default index;
