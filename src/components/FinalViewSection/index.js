const FinalViewSection = (props) => {
  const { finalViewList } = props;
  return finalViewList.map((each) => <p>{each}</p>);
};

export default FinalViewSection;
