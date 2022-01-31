'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

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
const Root = styled__default["default"].section`
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
  breakpoint: PropTypes__default["default"].string,
  reverseOrder: PropTypes__default["default"].bool,
  id: PropTypes__default["default"].number.isRequired,
  children: PropTypes__default["default"].element.isRequired
};
SnipSnap.defaultProps = {
  breakpoint: "0px",
  reverseOrder: false
};

exports.SnipSnap = SnipSnap;
