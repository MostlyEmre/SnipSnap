import styled from 'styled-components';
import PropTypes from 'prop-types';

const SnipSnap = ({
  children,
  breakpoint,
  reverseOrder,
  id
}) => {
  // checks if the number is odd or not
  const isOdd = num => {
    if (num % 2 === 0) {
      return false;
    } else if (num % 2 === 1) {
      return true;
    }
  }; // reverseOrder true => isOdd(num) === true && 'row-reverse
  // reverseOrder false => isOdd(num) === false &&& 'row-reverse
  // id % 2 === 0 && 'row-reverse' isOdd(id) === true && "row-reverse"


  return /*#__PURE__*/React.createElement(Root, {
    breakpoint: breakpoint,
    reverseOrder: reverseOrder,
    layout: reverseOrder ? isOdd(id) === false && "row-reverse" : isOdd(id) === true && "row-reverse"
  }, children);
};
const Root = styled.section`
  display: flex;
  align-items: center;
  flex-direction: ${({
  layout
}) => layout || "row"};

  & > div {
    flex: 1;
  }

  @media (max-width: ${({
  breakpoint
}) => breakpoint}) {
    flex-direction: column;
  }
`;
SnipSnap.propTypes = {
  breakpoint: PropTypes.string,
  reverseOrder: PropTypes.bool,
  id: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired
};
SnipSnap.defaultProps = {
  breakpoint: "0px",
  reverseOrder: false
};

export { SnipSnap };
