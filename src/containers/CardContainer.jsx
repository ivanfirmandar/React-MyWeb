import React from "react";
import CardA from "../items/Card";

class CardContainer extends React.Component {
  lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  readMore = () => {
    return this.lorem.substring(0, 100) + "....";
  };
  render() {
    return (
      <div className="d-flex flex-wrap justify-content-start">
        <CardA
          title="Undang-Undang Pajak Interaktif"
          subtitle="Aplikasi Android"
          text="Merupakan Aplikasi Penampil Undang-Undang Pajak dengan beberapa fitur yang dapat memudahkan Anda dalam mempelajari Undang-Undang tersebut meliputi fitur Cari, fitur Penunjuk, dan fitur Catatan di setiap pasal."
          link="http://www.uupajakindonesia.site/?i=1"
        />
        <CardA 
          title = "Aplikasi Terbengkalai" 
          subtitle="Aplikasi Website" 
          text= "Merupakan aplikasi yang awalnya bersemangat untuk dibuat, namun saat pengerjaan kehilangan semangat untuk melanjutkan dikarenakan bosan dan jenuh, atau terlalu besar untuk dilakukan sendiri"
          link="https://github.com/ivanfirmandar?tab=repositories"
        />
        
      </div>
    );
  }
}
export default CardContainer;
