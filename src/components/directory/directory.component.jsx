import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        
        {
          title: "Perro",
          imageUrl: "https://i.ibb.co/1dpyGHs/perro-slide-0.jpg",
          size: "large",
          id: 4,
          linkUrl: "",
        },
        {
          title: "Gato",
          imageUrl: "https://i.ibb.co/LgJxrzp/descarga.jpg",
          size: "large",
          id: 5,
          linkUrl: "",
        },
      ],
    };
  }

  // validaciones de jsx: { }, key={id}
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
