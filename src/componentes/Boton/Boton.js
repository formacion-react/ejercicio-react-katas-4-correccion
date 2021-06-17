import styles from "./Boton.module.css";

export const Boton = (props) => {
  const { children, accion } = props;
  return (
    <button onClick={accion} className={styles.boton}>
      {children}
    </button>
  );
};
