import styled from 'styled-components';
import { accent, light } from '../../styles/styleConstants';

const StyledBadge = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: ${accent};
  font-size: 11px;
  color: ${light};
  position: absolute;
  z-index: 999;
  left: ${({ x }) => x};
  top: ${({ y }) => y};
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

interface ComponInterface {
  count: number;
  xOffset: string;
  yOffset: string;
}

const Badge: React.FC<ComponInterface> = ({
  count,
  xOffset,
  yOffset,
  children,
}) => {
  return (
    <span style={{ position: 'relative' }}>
      <StyledBadge x={xOffset} y={yOffset} isVisible={count > 0}>
        {count > 99 ? '+99' : count}
      </StyledBadge>
      {children}
    </span>
  );
};

export default Badge;
