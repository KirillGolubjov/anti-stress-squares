import { motion } from "framer-motion"
import { calculateShift } from "../../_utils/helpers";

// eslint-disable-next-line react/prop-types
const ListItem = ({ item, index }) => {
  // eslint-disable-next-line react/prop-types
  const { id, color, removing } = item;
  
  return (
    <motion.div
      key={id}
      initial={{ x: '-20vw' }}
      animate={{
        x: removing ? "100vw" : 0,
        backgroundColor: color,
        width: '20vw',
        height: '20vw',
        position: 'absolute',
        left: `${calculateShift(index, 20)}vw`,
      }}
      transition={{ duration: 1 }}
    />
  );
};

export default ListItem;
