import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(31, 41, 55, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(motion.button)`
  margin-top: 20px;
`;

const scaleBox = {
  init: {
    scale: 1,
  },
  ani: {
    scale: 1.1,
  },
  fin: {
    scale: 1,
  },
};

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

function App() {
  const [clicked, setClicked] = useState(false);
  const [id, setId] = useState<null>(null);
  const toggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <Wrapper>
      <Grid>
        <Box
          variants={scaleBox}
          initial="init"
          whileHover="ani"
          onClick={() => setId(1)}
          layoutId={1}
        />
        <Box>{clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box>{!clicked ? <Circle layoutId="circle" /> : null}</Box>
        <Box
          variants={scaleBox}
          initial="init"
          whileHover="ani"
          onClick={() => setId(2)}
          layoutId={2}
        />
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            variants={overlay}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box
              layoutId={id}
              style={{
                width: 300,
                height: 200,
                backgroundColor: "rgba(255,255,255,1)",
              }}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
      <Button
        whileHover={{ scale: 1.5, color: "RGB(201, 41, 201)" }}
        onClick={toggle}
      >
        Switch
      </Button>
    </Wrapper>
  );
}

export default App;
