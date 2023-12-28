const ViewSection = (props) => {
  const { setQueue } = props;

  return setQueue.map((each) => <p>{each}</p>);
};

export default ViewSection;
