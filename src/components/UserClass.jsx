import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
   // console.log(this.props.name, "Child constructor");
  }
  componentDidMount() {
    //console.log(this.props.name, "Child didMount");
    const fetchData = async () => {
      const data = await fetch("https://api.github.com/users/rizwana573");
      const json = await data.json();
      //console.log(json);
    };
    fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.count !== prevState.count){

    }
    //console.log(this.props.name, "Child didUpdate");
  }
  render() {
    const { count } = this.state;
    const { name, location } = this.props;
    //console.log(this.props.name, "Child render");
    return (
      <>
        <h2> Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }));
          }}
        >
          Increase Count
        </button>
      </>
    );
  }
}

export default UserClass;
