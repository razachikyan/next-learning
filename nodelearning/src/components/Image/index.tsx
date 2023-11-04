import styles from "./styles.module.scss";

const CustomImage = ({height=230}) => {
  return (
    <div
    style={{height}}
      className={
        styles.img + " " + styles[`color${Math.ceil(Math.random() * 6)}`]
      }
    />
  );
};

export default CustomImage;
