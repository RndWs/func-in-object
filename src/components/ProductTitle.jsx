
import { useState } from "react";
 
import styles from "./ProductStyles.module.css";

function ProductTitle({ name, id, changeName }) {
  const [isTitleEditing, setIsTitleEditing] = useState(false);

  const [titleText, setTitleText] = useState(name);

  const handleTitle = () => {
    setIsTitleEditing(true);
  };

  const handTitleChange = (e) => {
    setTitleText(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsTitleEditing(false);

    changeName(id, titleText);
  };


  return (
    <>
      {isTitleEditing ? (
        <input
          name="title"
          className={styles.input}
          type="text"
          value={titleText}
          onChange={handTitleChange}
          onBlur={handleTitleBlur}
          autoFocus
          placeholder="enter a title"
        />
      ) : (
        <h2 className={styles.title} onClick={handleTitle}>
          {name}
        </h2>
      )}
    </>
  );
}

export default ProductTitle;
