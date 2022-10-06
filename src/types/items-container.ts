interface Method {
  name: string;
  handler: () => void;
}
export interface ItemContainerProps {
  title: string;
  children: React.ReactElement;
  method: Method;
}
