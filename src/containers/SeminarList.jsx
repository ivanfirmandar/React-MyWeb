import React from "react";
import CardA from "../items/Card";

class SeminarList extends React.Component {
  lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  readMore = () => {
    return this.lorem.substring(0, 100) + "....";
  };
  render() {
    return (
      <div className="d-flex flex-wrap">
        <CardA
          title="Perjalanan Jauh"
          subtitle="Novel"
          text={this.readMore()}
        />
        <CardA title="Kekasih" subtitle="Puisi" text={this.readMore()} />
        <CardA title="Heran?" subtitle="Novel" text={this.readMore()} />
        <CardA
          title="Perjalanan Jauh 2"
          subtitle="Novel"
          text={this.readMore()}
        />
      </div>
    );
  }
}
export default SeminarList;
