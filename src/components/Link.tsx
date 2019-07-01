import * as React from "react";

export type OwnProps = {
  children: React.ReactNode;
};

type Props = OwnProps & {
  active: boolean;
  onClick: () => unknown;
};

const Link = ({ active, children, onClick }: Props) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: "4px"
    }}
  >
    {children}
  </button>
);

export default Link;
