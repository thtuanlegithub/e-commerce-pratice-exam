type MainPageTitleProps = {
  title: string;
};

function MainPageTitle({ title }: MainPageTitleProps) {
  return <div className="text-lg font-medium">{title}</div>;
}

export default MainPageTitle;
