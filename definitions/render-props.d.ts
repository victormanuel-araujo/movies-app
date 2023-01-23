interface ContainerProps<Args extends object, Props = Record<string, any>> extends Props {
  children: (args: Args) => JSX.Element;
}
