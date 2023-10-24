"use client"
import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface MyComponentProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
}

const FramerContainer: React.FC<MyComponentProps> = ({ children, ...rest }) => {
  return (
    <motion.div {...rest}>
      {children}
    </motion.div>
  );
};

export default FramerContainer;
