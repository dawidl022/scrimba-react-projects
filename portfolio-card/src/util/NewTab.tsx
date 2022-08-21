import { FC, ReactNode } from "react";

interface IProps {
  href: string;
  children: ReactNode;
  // all other props
  [x: string]: any;
}

const NewTab: FC<IProps> = ({ href, children, ...rest }) => (
  <a href={href} target="_blank" rel="noopener" {...rest}>
    {children}
  </a>
);

export default NewTab;
